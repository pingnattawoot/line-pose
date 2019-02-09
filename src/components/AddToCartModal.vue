<template>
  <BaseModal class="add-to-card-modal" @close="$emit('close')">
    <div slot="header" />
    <div slot="body" class="add-to-card-modal__body">
      <div
        class="cover-image-container"
        :style="`background-image: url(${book.cover});`"
      />

      <div class="detail-container">
        <div class="product-detail">
          <div class="title">{{ book.title }}</div>
          <div class="price">{{ getThaiBahtText(book.price) }}</div>
          <div v-if="thisBookInCart" class="already-in-cart">
            You already have this book
            <span class="bold">(x{{ thisBookInCart.quantity }})</span>
            in your cart.
          </div>
        </div>
        <div class="quantity-input-container">
          <BaseInputQuantity
            @increase="quantity += 1"
            v-model="quantity"
            @decrease="quantity -= 1"
            @enter="addItemToCart"
          />
        </div>
      </div>
    </div>
    <div class="add-to-card-modal__footer" slot="footer">
      <BaseButton
        :disabled="quantity <= 0"
        @click="addItemToCart"
        buttonClass="primary"
        >Add {{ moreBookText }} to cart</BaseButton
      >
      <BaseButton @click="$emit('close')">Cancel</BaseButton>
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import { ActionType, GetterType } from '@/store/modules/cart'
import { getThaiBahtText } from '@/utils'

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  computed: {
    ...mapGetters('cart', [GetterType.getBooksInCartById]),
    thisBookInCart() {
      return this.getBooksInCartById(this.book.id)
    },
    moreBookText() {
      return this.thisBookInCart
        ? `${this.quantity} more book${this.quantity > 1 ? 's' : ''}`
        : ''
    },
  },
  methods: {
    ...mapActions('cart', [ActionType.addToCart]),
    getThaiBahtText,
    addItemToCart() {
      if (this.quantity > 0) {
        this.addToCart({ bookId: this.book.id, quantity: this.quantity })
        this.$emit('close')
      }
    },
    addQuantity(num) {
      if (this.quantity + num > 0) {
        this.quantity += num
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.add-to-card-modal {
  label {
    font-weight: 700;
  }

  &__body {
    display: flex;
    width: 100%;

    .cover-image-container {
      flex: 1;
      display: flex;
      justify-content: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      min-height: 220px;
    }

    .detail-container {
      flex: 1;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-weight: bold;
        font-size: 1.2em;
      }

      .price {
        font-size: 1.5em;
        color: #00b900;
      }

      .quantity-input-container {
        align-self: center;
        bottom: 0;
      }

      .already-in-cart {
        margin: 4px 0px;
        background-color: #fffbf4;
        font-size: 0.8em;
        padding: 4px;
        border: 1px solid #eee;
        border-radius: 2px;
      }
    }
  }

  &__footer {
    display: flex;
    flex-direction: row-reverse;

    >:first-child {
      margin-left: 16px;
    }
  }
}
</style>
