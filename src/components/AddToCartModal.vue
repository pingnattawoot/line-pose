<template>
  <BaseModal class="add-to-card-modal" @close="$emit('close')">
    <h3 slot="header">Add to cart</h3>
    <div slot="body" class="add-to-card-modal__body">
      <div class="cover-image-container">
        <img :src="book.cover" />
      </div>

      <div class="detail-container">
        <div><label>Title:</label> {{ book.title }}</div>
        <div><label>Price:</label> {{ book.price }} THB.</div>
        <div>
          <label>Quantity:</label>
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
