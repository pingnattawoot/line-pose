<template>
  <div class="icon-wrapper" :style="{ color: iconColor }">
    <FontAwesomeIcon :icon="name" />
    <span
      v-if="badgeValue && badgeValue > 0"
      class="badge"
      :style="{
        color: textColor,
        background: iconColor,
        'border-color': textColor,
      }"
      >{{ badgeValue }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    className: String,
    badgeValue: Number,
    iconColor: String,
    textColor: String,
  },
}
</script>

<style lang="stylus" scoped>
.icon-wrapper {
  display: inline-flex;
  position: relative;
  font-size: 1em;

  .badge {
    $relative-size = 0.8em;
    color: #444;
    position: absolute;
    height: $relative-size;
    width: $relative-size;
    line-height: $relative-size;
    top: -0.5em;
    right: -0.5em;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #444;
  }
}
</style>
