<template>
  <div class="container dark-blue">
    <div class="content-con">
      <div v-if="part === 1" class="left plastel">
        <div class="left-container">
          <h3>ก่อนรัฐประหาร 2557</h3>
          <br />
          <div class="left-container-content">
            <p id="left-before-text">
              ปรากฎว่ามีการแต่งตั้งทหารหรือ<br />อดีตทหารเป็นกรรมการรัฐวิสาหกิจ<br />จำนวน
              30 คน คิดเป็นร้อยละ 6.80*
              <br />
              <br />
            </p>
            <p class="only-tablet">จำนวน30 คน คิดเป็นร้อยละ 6.80*</p>
            <br />
            <p>*จากจำนวนกรรมการรัฐวิสาหกิจทั้งหมด 441 คน</p>
          </div>
        </div>
      </div>
      <div v-if="part === 2" class="left-part2-bg left">
        <div class="left-container">
          <h3>หลังรัฐประหาร 2557</h3>
          <br />
          <div class="left-container-content">
            <p class="left-part2-bg">
              แต่หลังจากรัฐประหาร 2557 ได้ไม่นาน<br />
              ปรากฎว่า มีการแต่งตั้งทหารหรืออดีตทหาร<br />
              เป็นกรรมการรัฐวิสาหกิจ เพิ่มขึ้นถึง 76 คน คิดเป็นร้อยละ 18.23*<br />
              <br />
              <br />
              *จากจำนวนกรรมการรัฐวิสาหกิจทั้งหมด 417 คน
            </p>
          </div>
        </div>
      </div>
      <div v-if="part === 1" class="right">
        <div class="right-container">
          <h5 style="color: #fff">ทหารหรืออดีตทหารเป็นกรรมการรัฐวิสาหกิจ</h5>
          <div class="waffle-container" v-if="part === 1">
            <div class="waffle-before" v-for="i in 450" v-bind:key="i" />
          </div>
          <div class="waffle-container" v-if="part === 2">
            <div class="waffle-after" v-for="i in 450" v-bind:key="i" />
          </div>
          <div v-if="part === 1" class="waffle-label">
            <div class="waffle-label-left">
              <h3 style="color: #FFF">30 คน</h3>
              <p style="color: #fff">จาก 441 คน</p>
            </div>
            <h3 style="color: #fff">6.80 %</h3>
          </div>
          <div v-if="part === 2" class="waffle-label">
            <div>
              <h3 style="color: #FFF">76 คน</h3>
              <p style="color: #fff">จาก 417 คน</p>
            </div>
            <h3 style="color: #fff">18.23 %</h3>
          </div>
        </div>
      </div>
      <div v-if="part === 2" class="right-part2-bg right">
        <div class="right-container">
          <h5 style="color: #fff">ทหารหรืออดีตทหารเป็นกรรมการรัฐวิสาหกิจ</h5>
          <div class="waffle-container" v-if="part === 1">
            <div class="waffle-before" v-for="i in 450" v-bind:key="i" />
          </div>
          <div class="waffle-container" v-if="part === 2">
            <div class="waffle-after" v-for="i in 450" v-bind:key="i" />
          </div>
          <div v-if="part === 1" class="waffle-label">
            <div style="flex: 1">
              <h3 style="color: #FFF">30 คน</h3>
              <p style="color: #fff">จาก 441 คน</p>
            </div>
            <h3 style="color: #fff">6.80 %</h3>
          </div>
          <div v-if="part === 2" class="waffle-label">
            <div style="flex: 1">
              <h3 style="color: #FFF">76 คน</h3>
              <p style="color: #fff">จาก 417 คน</p>
            </div>
            <h3 style="color: #fff">18.23 %</h3>
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
    width: 100vw;
  }
  @media #{$mq-mobile} {
    margin-top: 0;
    height: calc(100vh - 5rem);
  }
}

.content-con {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media #{$mq-tablet} {
    flex-direction: column;
    align-items: center;
  }
}

.left {
  width: 50%;
  height: 100%;
  position: relative;
  @media #{$mq-tablet} {
    background-color: #384254;
    color: #fff;
    width: 100%;
    height: auto;
  }
}

.right {
  width: 50%;
  height: 100%;
  position: relative;
  @media #{$mq-tablet} {
    width: 100%;
  }
  @media #{$mq-mobile} {
    text-align: center;
  }
}

.left-part2-bg {
  background-color: #9db3d9;
  @media #{$mq-tablet} {
    background-color: #9db3d9;
  }
}

.right-part2-bg {
  background-color: #384254;
  @media #{$mq-tablet} {
    background-color: #9db3d9;
  }
}

.left-container {
  width: 640px;
  height: 100%;
  position: relative;
  float: right;
  top: 97px;
  @media #{$mq-tablet} {
    width: 100%;
    text-align: center;
    height: 30rem;
  }
  @media #{$mq-mobile} {
    height: 15rem;
  }
}

.left-container-content {
  margin-top: 4rem;
  @media #{$mq-mobile} {
    display: none;
  }
}

.right-container {
  width: 640px;
  height: 100%;
  position: relative;
  top: 97px;
  color: #fff;
  margin-left: 9rem;
  @media #{$mq-tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    position: relative;
    top: 0;
  }
}

.waffle-container {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  width: 45.6rem;
  @media #{$mq-mobile} {
    width: 28rem;
  }
}

.waffle-before {
  width: 1.5rem;
  height: 1.5rem;
  background: #ffffff;
  border-radius: 0.3rem;
  margin: 0.2rem;
  @media #{$mq-mobile} {
    width: 0.89rem;
    height: 0.89rem;
  }
}

.waffle-before:nth-last-child(-n + 30) {
  background: #e7384a;
}

.waffle-after {
  width: 1.5rem;
  height: 1.5rem;
  background: #ffffff;
  border-radius: 0.3rem;
  margin: 0.2rem;
  @media #{$mq-mobile} {
    width: 0.89rem;
    height: 0.89rem;
  }
}

.waffle-after:nth-last-child(-n + 76) {
  background: #e7384a;
}

.waffle-label {
  display: flex;
  margin-top: 3.2rem;
  width: 45.6rem;
  justify-content: space-between;
  @media #{$mq-mobile} {
    width: 100%;
    padding: 0 2rem;
  }
}

h3,
p {
  @media #{$mq-tablet} {
    color: #fff;
  }
}

h3 {
  @media #{$mq-mobile} {
    font-size: 2.4rem;
  }
}

#left-before-text {
  display: inline;
  @media #{$mq-tablet} {
    display: none;
  }
}

.only-tablet {
  display: none;
  @media #{$mq-tablet} {
    display: inline;
  }
}
</style>
