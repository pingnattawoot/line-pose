<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">
      <span>Little Brown</span>
      <div class="brand-icon" />
    </router-link>
    <router-link :to="{ name: 'cart' }" class="cart">
      <BaseIcon
        name="shopping-cart"
        :badgeValue="allItemQuantity"
        iconColor="#fffbf4"
        textColor="#00b900"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { GetterType } from '@/store/modules/cart'

export default {
  computed: mapGetters('cart', [GetterType.allItemQuantity]),
}
</script>

<style lang="stylus" scoped>
$nav-text-color = #fffbf4;
$nav-background-color = #00b900;

.nav {
  padding: 10px;
  height: 40px;
  background: $nav-background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .brand {
    display: flex;
    align-items: center;
    font-size: 2em;
    color: $nav-text-color;
    font-weight: 700;
    line-height: 40px;
    text-decoration: none;

    .brand-icon {
      // font-size: 0.8em;
      background-image: url('https://stickershop.line-scdn.net/sticonshop/v1/sticon/5ac309f0031a6752fb806d8d/iphone/001.png');
      width: 1em;
      height: 1em;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  > .cart {
    font-size: 20px;
    color: $nav-text-color;
    font-weight: 700;
    text-decoration: none;
    padding: 20px 20px;
  }
}
</style>
