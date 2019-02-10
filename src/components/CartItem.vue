<template>
  <div class="cart-item table-row">
    <div class="table-cell">
      <div class="product-container">
        <div
          class="cover-image"
          :style="`background-image: url(${book.cover});`"
        />
        <div class="title">{{ book.title }}</div>
      </div>
    </div>
    <div class="table-cell">{{ priceText }}</div>
    <div class="table-cell">
      <BaseInputQuantity
        @increase="addQuantity(1)"
        :value="item.quantity"
        @change="changeValue"
        @decrease="addQuantity(-1)"
      />
    </div>
    <div class="table-cell center bold">{{ totalPriceText }}</div>
    <div class="table-cell center">
      <button class="remove-item center" @click="askAndRemove()">
        <BaseIcon name="trash" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import { ActionType } from '@/store/modules/cart'
import { GetterType as BookGetters } from '@/store/modules/book'
import { getThaiBahtText } from '@/utils'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      min: 0,
      max: 100,
    }
  },
  computed: {
    ...mapGetters('book', [BookGetters.getBookById]),
    book() {
      return this.getBookById(this.item.bookId)
    },
    priceText() {
      return getThaiBahtText(this.book.price)
    },
    totalPriceText() {
      return getThaiBahtText(this.book.price * this.item.quantity)
    },
  },
  methods: {
    ...mapActions('cart', [
      ActionType.removeItem,
      ActionType.setQuantityInCart,
    ]),
    addQuantity(number) {
      const newQuantity = this.item.quantity + number
      if (newQuantity === 0) {
        this.askAndRemove()
      } else {
        this.setQuantityInCart({
          bookId: this.book.id,
          quantity: newQuantity,
        })
      }
    },
    askAndRemove() {
      const confirmRemove = confirm(
        `Do you want to remove '${this.book.title}' from your cart ?`
      )
      if (confirmRemove) {
        this.removeItem(this.book.id)
      }
    },
    changeValue(val) {
      let newValue = val
      if (newValue < this.min) {
        newValue = this.min
      } else if (newValue > this.max) {
        newValue = this.max
      }
      this.setQuantityInCart({
        bookId: this.book.id,
        quantity: newValue,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.cart-item {
  >.table-cell {
    padding: 4px 8px;
    text-align: center;
    vertical-align: middle;

    >.product-container {
      display: flex;
      align-items: center;

      .title {
        text-align: left;
        margin-left: 16px;
      }

      .cover-image {
        width: 50px;
        height: 80px;
        flex: 0 0 auto;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    >button.remove-item {
      display: inline-flex;
      border: none;
      background: transparent;
      cursor: pointer;
      color: #666;

      &:hover {
        color: #555;
      }

      &:active {
        color: #444;
      }
    }
  }
}
</style>
