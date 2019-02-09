<template>
  <router-link
    v-show="allItemQuantity > 0"
    :to="{ name: 'cart' }"
    class="floating-link"
  >
    <BaseIcon
      name="shopping-cart"
      :badgeValue="allItemQuantity"
      iconColor="#fffbf4"
      textColor="#00b900"
    />
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import { GetterType } from '@/store/modules/cart'

export default {
  computed: mapGetters('cart', [GetterType.allItemQuantity]),
}
</script>

<style lang="stylus" scoped>
.floating-link {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  bottom: 20px;
  background: #00b900;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
