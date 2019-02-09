<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">
      Little Brown Book Shop
    </router-link>
    <router-link :to="{ name: 'cart' }" class="cart">
      <FontAwesomeIcon icon="shopping-cart" /> ({{ allItemQuantity }})
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GetterType } from '@/store/modules/cart'

export default {
  computed: mapGetters('cart', [GetterType.allItemQuantity]),
}
</script>

<style lang="stylus" scoped>
$nav-text-color = #fffbf4;

.nav {
  padding: 10px;
  height: 40px;
  background: #444444;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .brand {
    font-size: 2em;
    color: $nav-text-color;
    font-weight: 700;
    line-height: 40px;
    text-decoration: none;
  }

  > .cart {
    font-size: 1.5em;
    color: $nav-text-color;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
