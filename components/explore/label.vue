<template>
  <div class="label-container">
    <svg class="soldier" width="22" height="16">
      <path
        d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6H3H0V8H3H5H8V6H5ZM14 10C11.33 10 6 11.34 6 14V16H22V14C22 11.34 16.67 10 14 10Z"
        fill="white"
      />
    </svg>
    ทหารลดลง
    <svg class="heat-label-desktop">
      <rect
        x="250"
        y="0.5"
        width="13"
        height="250"
        rx="6.50001"
        transform="rotate(90 250 0.5)"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="256.5"
          y1="0.5"
          x2="256.5"
          y2="250.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5C161E" />
          <stop offset="0.220767" stop-color="#E7384A" />
          <stop offset="0.494792" stop-color="#D8D8D8" />
          <stop offset="0.750956" stop-color="#8CA5D2" />
          <stop offset="1" stop-color="#384254" />
        </linearGradient>
      </defs>
    </svg>
    <div class="heat-label-ipad">
      <img :src="heatmapIpad" />
    </div>

    <svg class="soldier" width="22" height="16">
      <path
        d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6V3H3V6H0V8H3V11H5V8H8V6H5ZM14 10C11.33 10 6 11.34 6 14V16H22V14C22 11.34 16.67 10 14 10Z"
        fill="white"
      />
    </svg>
    ทหารเพิ่มขึ้น
    <svg class="infor" width="30" height="30" @click="handleModalInfo">
      <path
        d="M16.25 11.25H13.75V8.75H16.25V11.25ZM16.25 21.25H13.75V13.75H16.25V21.25ZM15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 18.3152 3.81696 21.4946 6.16117 23.8388C7.3219 24.9996 8.69989 25.9203 10.2165 26.5485C11.733 27.1767 13.3585 27.5 15 27.5C18.3152 27.5 21.4946 26.183 23.8388 23.8388C26.183 21.4946 27.5 18.3152 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heatmapIpad: require('~/assets/images/iPad/Explore/heatmap.png')
    }
  },
  props: ['handleModalInfo']
}
</script>

<style lang="scss" scoped>
.label-container {
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  @media #{$mq-tablet} {
    font-size: 1.4rem;
  }
}

.soldier {
  margin-right: 0.8rem;
}

.heat-label-desktop {
  margin: 0 1.2rem;
  width: 25rem;
  height: 1.4rem;
  @media #{$mq-tablet} {
    display: none;
  }
}

.heat-label-ipad {
  margin: 0 0.8rem;
  display: none;
  width: 10rem;
  height: 1.6rem;
  @media #{$mq-tablet} {
    display: inline;
  }
}

.infor {
  margin-left: 1rem;
  cursor: pointer;
}
</style>
