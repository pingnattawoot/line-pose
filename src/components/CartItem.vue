<template>
  <div class="cart-item">
    {{ book.title }} ({{ item.quantity }})
    <BaseInputQuantity
      @increase="addQuantity(1)"
      :value="item.quantity"
      @change="changeValue"
      @decrease="addQuantity(-1)"
    />
    <button @click="removeItem(book.id)">delete</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ActionType } from '@/store/modules/cart'
import { GetterType as BookGetters } from '@/store/modules/book'

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
  },
  methods: {
    ...mapActions('cart', [
      ActionType.removeItem,
      ActionType.changeQuantityInCart,
    ]),
    addQuantity(number) {
      return this.changeQuantityInCart({
        bookId: this.book.id,
        quantity: this.item.quantity + number,
      })
    },
    changeValue(val) {
      let newValue = val
      if (newValue < this.min) {
        newValue = this.min
      } else if (newValue > this.max) {
        newValue = this.max
      }
      this.changeQuantityInCart({
        bookId: this.book.id,
        quantity: newValue,
      })
    },
  },
}
</script>

<style scoped></style>
