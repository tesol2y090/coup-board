<template>
  <div class="switch-img-container">
    <img v-if="selectedImg === 'left'" :src="chart41" />
    <img v-else :src="chart42" />
    <div class="switch-container">
      <div
        @click="handleChangeSlide('left')"
        :class="selectedImg === 'left' ? 'switch-btn-active' : 'switch-btn'"
      >
        ก่อนรัฐประหาร’ 57
      </div>
      <div
        @click="handleChangeSlide('right')"
        :class="selectedImg === 'right' ? 'switch-btn-active' : 'switch-btn'"
      >
        หลังรัฐประหาร’ 57
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImg: 'left',
      chart41: require('~/assets/images/chart-4-1.png'),
      chart42: require('~/assets/images/chart-4-2.png')
    }
  },
  methods: {
    handleChangeSlide(tab) {
      this.selectedImg = tab
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-img-container {
  margin: 3rem 0;
}

.switch-container {
  width: 23.2rem;
  height: 3.6rem;
  background-color: #fff;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 2.5rem;
  display: flex;
}

.switch-btn {
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #384254;
  justify-content: center;
}

.switch-btn-active {
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  background: #e7384a;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.15), -2px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center;
}
</style>
