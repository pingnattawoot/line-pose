<template>
  <BaseModal class="add-to-card-modal" @close="$emit('close')">
    <div slot="header" />
    <div slot="body" class="add-to-card-modal__body">
      <div class="cover-image-container">
        <img :src="book.cover" />
      </div>

      <div class="detail-container">
        <div class="product-detail">
          <div class="title">{{ book.title }}</div>
          <div class="price">{{ priceText }}</div>
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
        >Add to cart</BaseButton
      >
      <BaseButton @click="$emit('close')">Cancel</BaseButton>
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
import { ActionType } from '@/store/modules/cart'
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
    priceText() {
      return getThaiBahtText(this.book.price)
    },
  },
  methods: {
    ...mapActions('cart', [ActionType.addToCart]),
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
    }

    .detail-container {
      flex: 1;
      padding: 10px;
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
