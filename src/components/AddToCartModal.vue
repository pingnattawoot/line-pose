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
          <div class="select-quantity">
            <button
              class="change-quantity-btn"
              @click="addQuantity(-1)"
              :disabled="this.quantity === 1"
            >
              -
            </button>
            <div class="quantity">{{ quantity }}</div>
            <button class="change-quantity-btn" @click="addQuantity(1)">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="add-to-card-modal__footer" slot="footer">
      <BaseButton @click="addItemToCart" buttonClass="primary"
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
      this.addToCart({ bookId: this.book.id, quantity: this.quantity })
      this.$emit('close')
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

      .select-quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8px;

        .change-quantity-btn {
          box-sizing: border-box;
          background: none;
          width: 28px;
          height: 28px;
          border: 1px solid #ccc;

          &:disabled {
            background-color: #ddd;
            color: #aaa;
            cursor: not-allowed;
          }
        }

        .quantity {
          box-sizing: border-box;
          height: 28px;
          min-width: 40px;
          line-height: 28px;
          text-align: center;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
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
