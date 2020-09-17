<template>
  <div class="label-container">
    <svg class="soldier icon-desktop" width="22" height="16">
      <path
        d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6H3H0V8H3H5H8V6H5ZM14 10C11.33 10 6 11.34 6 14V16H22V14C22 11.34 16.67 10 14 10Z"
        fill="white"
      />
    </svg>
    <svg width="14" height="11" class="soldier icon-mobile">
      <path
        d="M8.75 5.5C10.1313 5.5 11.25 4.38125 11.25 3C11.25 1.61875 10.1313 0.5 8.75 0.5C7.36875 0.5 6.25 1.61875 6.25 3C6.25 4.38125 7.36875 5.5 8.75 5.5ZM3.125 4.25H1.875H0V5.5H1.875H3.125H5V4.25H3.125ZM8.75 6.75C7.08125 6.75 3.75 7.5875 3.75 9.25V10.5H13.75V9.25C13.75 7.5875 10.4187 6.75 8.75 6.75Z"
        fill="white"
      />
    </svg>

    ทหารลดลง
    <div class="heat-label-desktop">
      <img :src="heatmapDesktop" />
    </div>
    <div class="heat-label-ipad">
      <img :src="heatmapIpad" />
    </div>

    <svg class="soldier icon-desktop" width="22" height="16">
      <path
        d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6V3H3V6H0V8H3V11H5V8H8V6H5ZM14 10C11.33 10 6 11.34 6 14V16H22V14C22 11.34 16.67 10 14 10Z"
        fill="white"
      />
    </svg>
    <svg width="15" height="11" class="soldier icon-mobile">
      <path
        d="M9.5 5.75C10.8813 5.75 12 4.63125 12 3.25C12 1.86875 10.8813 0.75 9.5 0.75C8.11875 0.75 7 1.86875 7 3.25C7 4.63125 8.11875 5.75 9.5 5.75ZM3.875 4.5V2.625H2.625V4.5H0.75V5.75H2.625V7.625H3.875V5.75H5.75V4.5H3.875ZM9.5 7C7.83125 7 4.5 7.8375 4.5 9.5V10.75H14.5V9.5C14.5 7.8375 11.1687 7 9.5 7Z"
        fill="white"
      />
    </svg>

    ทหารเพิ่มขึ้น
    <svg
      class="infor icon-desktop"
      width="30"
      height="30"
      @click="handleModalInfo"
    >
      <path
        d="M16.25 11.25H13.75V8.75H16.25V11.25ZM16.25 21.25H13.75V13.75H16.25V21.25ZM15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 18.3152 3.81696 21.4946 6.16117 23.8388C7.3219 24.9996 8.69989 25.9203 10.2165 26.5485C11.733 27.1767 13.3585 27.5 15 27.5C18.3152 27.5 21.4946 26.183 23.8388 23.8388C26.183 21.4946 27.5 18.3152 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
        fill="white"
      />
    </svg>
    <svg
      width="22"
      height="21"
      class="infor icon-mobile"
      @click="handleModalInfo"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M12.25 7.5H10.25V5.5H12.25V7.5ZM12.25 15.5H10.25V9.5H12.25V15.5ZM11.25 0.5C9.93678 0.5 8.63642 0.758658 7.42317 1.2612C6.20991 1.76375 5.10752 2.50035 4.17893 3.42893C2.30357 5.3043 1.25 7.84784 1.25 10.5C1.25 13.1522 2.30357 15.6957 4.17893 17.5711C5.10752 18.4997 6.20991 19.2362 7.42317 19.7388C8.63642 20.2413 9.93678 20.5 11.25 20.5C13.9022 20.5 16.4457 19.4464 18.3211 17.5711C20.1964 15.6957 21.25 13.1522 21.25 10.5C21.25 9.18678 20.9913 7.88642 20.4888 6.67317C19.9863 5.45991 19.2497 4.35752 18.3211 3.42893C17.3925 2.50035 16.2901 1.76375 15.0768 1.2612C13.8636 0.758658 12.5632 0.5 11.25 0.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(0.75)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heatmapIpad: require('~/assets/images/iPad/Explore/heatmap.png'),
      heatmapDesktop: require('~/assets/images/Desktop/Explore/heatmap.svg')
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
  @media #{$mq-tablet} {
    font-size: 1rem;
  }
}

.soldier {
  margin-right: 0.8rem;
}

.heat-label-desktop {
  margin: 0 1.2rem;
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

.icon-desktop {
  display: inline;
  @media #{$mq-tablet} {
    display: none;
  }
}

.icon-mobile {
  display: none;
  @media #{$mq-tablet} {
    display: inline;
  }
}
</style>
