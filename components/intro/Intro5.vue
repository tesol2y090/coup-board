<template>
  <div
    :class="{
      'animation-poor': current_slide === 6,
      'animation-rich': current_slide === 6
    }"
    :style="{
      '--active-color': '#909FE7'
    }"
    class="row"
  >
    {{ current_slide }}
    <div
      v-for="n in 100"
      :key="n"
      class="circle"
      :style="{ '--color': '#DADFF7' }"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    current_slide: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
@mixin on-circle($item-count, $color) {
  @for $i from 1 through $item-count {
    > *:nth-child(#{$i}) {
      transition-delay: ($i/10) + 0s;
      background: $color;
    }
  }
}
.row {
  display: flex;
  flex-wrap: wrap-reverse;
  width: 215px;
  @media #{$mq-mobile} {
    width: 112px;
  }
}
.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 2.5px;
  background: var(--color);
  @media #{$mq-mobile} {
    width: 8px;
    height: 8px;
    margin: 1.5px;
  }
}
.animation-poor {
  margin-top: 20rem;
  color: #000;
  @include on-circle($item-count: 22, $color: var(--active-color));
}
.animation-rich {
  margin-top: 20rem;
  color: #000;
  @include on-circle($item-count: 6, $color: var(--active-color));
}
</style>
