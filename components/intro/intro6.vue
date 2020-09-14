<template>
  <div class="container dark-blue">
    <div class="content-con">
      <div class="left">
        <div class="left-container">
          <div class="title">เปรียบเทียบสัดส่วน<br />เพิ่มขึ้น 1.67 เท่า</div>
          <div class="bottom">
            นั่นหมายความว่า ก่อนรัฐประหาร 2557<br />ในจำนวนกรรมการฯ ทั้งหมด 100
            คน<br />จะมีทหารเป็นกรรมการฯ อยู่ประมาณ 6 คน <br /><br />
            ในขณะที่ หลังรัฐประหาร 2557<br />
            จะมีทหารเป็นกรรมการฯ อยู่ประมาณ 18 คน<br />
            เพิ่มขึ้นถึง 11 คน หรือ 1.67 เท่า
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-container">
          <p style="color: #fff">ทหารหรืออดีตทหารเป็นกรรมการรัฐวิสาหกิจ</p>
          <div class="split-container">
            <div class="splint-left-container">
              <div class="waffle-container" v-if="part === 1">
                <div class="waffle-before" v-for="i in 100" v-bind:key="i" />
              </div>
              <div class="waffle-container" v-if="part === 2">
                <div class="waffle-after-left" v-for="i in 100" :key="i" />
              </div>
              <p style="color: #fff">ก่อนรัฐประหาร 2557</p>
              <p style="color: #E7384A">6 ใน 100 คน</p>
            </div>
            <div class="splint-right-container">
              <div class="waffle-container" v-if="part === 1">
                <div class="waffle-before" v-for="i in 100" v-bind:key="i" />
              </div>
              <div class="waffle-container" v-if="part === 2">
                <div class="waffle-after-right" v-for="i in 100" :key="i" />
              </div>
              <p style="color: #fff">หลังรัฐประหาร 2557</p>
              <p style="color: #E7384A">18 ใน 100 คน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    part: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState('store', ['current_slide'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 8rem);
  width: 1280;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media #{$mq-tablet} {
    width: 102.4rem;
    align-items: flex-start;
  }
}

.content-con {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media #{$mq-tablet} {
    flex-direction: column;
  }
}

.left {
  width: 50%;
  height: 100%;
  position: relative;
  @media #{$mq-tablet} {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
}

.right {
  width: 50%;
  height: 100%;
  position: relative;
  @media #{$mq-tablet} {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
}

.left-container {
  width: 640px;
  height: 100%;
  position: relative;
  float: right;
  top: 97px;
  @media #{$mq-tablet} {
    height: auto;
    text-align: center;
  }
}

.left-container-content {
  margin-top: 4rem;
}

.right-container {
  width: 640px;
  height: 100%;
  position: relative;
  top: 153px;
  color: #fff;
  margin-left: 9rem;
  @media #{$mq-tablet} {
    margin-left: 0rem;
    width: auto;
    height: auto;
    text-align: center;
  }
}

.split-container {
  display: flex;
  margin-top: 4.2rem;
}

.splint-right-container {
  margin-left: 8.6rem;
}

.waffle-container {
  display: flex;
  flex-wrap: wrap;
  width: 19rem;
  margin-bottom: 3.2rem;
}

.waffle-before,
.waffle-after-left,
.waffle-after-right {
  width: 1.5rem;
  height: 1.5rem;
  background: #ffffff;
  border-radius: 0.3rem;
  margin: 0.2rem;
}

div {
  color: #fff;
}

.title {
  font-weight: 800;
  font-size: 3.6rem;
}

.bottom {
  margin-top: 5rem;
  font-size: 2rem;
  font-weight: 500;
}
</style>
