<template>
  <div v-if="percent === 'no_data'" class="no-data" />
  <div
    v-else-if="percent !== 'no_data' && percent !== 'na'"
    class="pill-container noto-thai"
    :style="`${styleBgPill(percent)}`"
  >
    <span class="percent-text noto-thai" :style="`${styleFont(this.percent)}`">
      {{ this.percent }}</span
    >
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  props: ['percent'],
  methods: {
    percentToStyle(percent) {
      const scaleColor = d3
        .scaleLinear()
        .domain([-100, -50, 0, 50, 100])
        .range(['#384254', '#8CA5D2', '#D8D8D8', '#E7384A', '#5C1622'])
      const bgColor = scaleColor(percent)
      return `background-color: ${bgColor};`
    },
    styleBgPill(pencent) {
      const floatPercent = parseFloat(pencent)
      return `${this.percentToStyle(floatPercent)}`
    },
    styleFont(newPercent) {
      const fontColor = parseFloat(newPercent) > 49.99 ? '#fff' : '#000'
      return `color: ${fontColor};`
    }
  }
}
</script>

<style lang="scss" scoped>
.pill-container {
  width: 5rem;
  height: 2.5rem;
  border-radius: 1rem;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2.5rem;
  font-size: 1.2rem;
  color: #000;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  z-index: 2;
  cursor: pointer;
  &:last-child {
    margin-left: 0;
  }
  .percent-text {
    font-size: 1.2rem;
    display: none;
    @media #{$mq-tablet} {
      font-size: 0.8rem;
    }
  }
  &:hover {
    border: 1px solid #000000;
    .percent-text {
      display: inline;
    }
  }
  @media #{$mq-tablet} {
    width: 3.6rem;
    margin-left: 1rem;
  }
  @media #{$mq-mobile} {
    width: 2rem;
    border-radius: 50%;
    margin-left: 0.4rem;
  }
}

.no-data {
  width: 5rem;
  height: 2.5rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  margin-left: 2.5rem;
  z-index: 2;
  pointer-events: none;
  &:last-child {
    margin-left: 0;
  }
  @media #{$mq-mobile} {
    width: 2rem;
    border-radius: 50%;
    margin-left: 0.4rem;
  }
}
</style>
