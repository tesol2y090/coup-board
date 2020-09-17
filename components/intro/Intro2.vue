<template>
  <div class="container dark-blue">
    <div class="content-con">
      <div v-if="part === 2" class="box">
        หลังรัฐประหาร 2557
        <span class="text-red"
          >“การเปลี่ยนแปลง แต่งตั้งกรรมการรัฐวิสาหกิจ”</span
        >
        ถือเป็นนโยบายหนึ่งของ การปฏิรูปรัฐวิสาหกิจ ภายใต้การนำของ พลเอกประยุทธ์
        จันทร์โอชา
      </div>
      <div
        id="middle"
        :class="{ middle: true, 'middle-animation': onSlidePlay }"
      >
        <div class="title">
          ปฏิรูปรัฐวิสาหกิจ
          <svg class="triangle-container" width="26px" height="26px">
            <polygon points="0,0 13,26 26,0" fill="white" />
          </svg>
        </div>
        <img :src="pravuthFaceImg" />
      </div>
      <div v-if="part === 2" class="box" style="font-size: 2rem;">
        ความน่าสนใจอยู่ที่ว่าการเปลี่ยนแปลง/แต่งตั้งกรรมการรัฐวิสาหกิจบาง
        องค์กรในครั้งนี้(เฉพาะส่วนที่เป็น อำนาจของคณะรัฐมนตรี)
        <span class="text-red"
          >กลับปรากฎว่ามี “นายพลคนทหาร”ได้เป็นกรรมการรัฐวิสาหกิจเป็น
          จำนวนที่น่าจับตามอง..</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import pravutFace from '~/components/assest/primaryFace/prayutIntro'
import { mapState } from 'vuex'
export default {
  props: {
    part: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pravuthFaceImg: require('~/assets/images/prayuth-intro.svg'),
      onSlidePlay: false
    }
  },
  components: {
    pravutFace
  },
  computed: {
    ...mapState('store', ['current_slide'])
  },
  watch: {
    current_slide() {
      if (this.current_slide === 2) {
        this.onSlidePlay = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 8rem);
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media #{$mq-mobile} {
    height: calc(100vh - 5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.middle {
  margin: 0 8rem 0 6.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media #{$mq-mobile} {
  }
}

.content-con {
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-size: 2.4rem;
  @media #{$mq-mobile} {
    padding: 0;
  }
}

.title {
  font-size: 3.6rem;
  color: #627493;
  background: #ffffff;
  border-radius: 1rem;
  text-align: center;
  position: absolute;
  top: -5.5rem;
  width: 32.2rem;
  @media #{$mq-mobile} {
    color: #e7384a;
    top: -10rem;
  }
}

.box {
  background: #ffffff;
  border-radius: 1rem;
  width: 34rem;
  padding: 2rem;
  font-size: 2.4rem;
  color: #000000;
  animation: fadeInAnimation ease 0.7s;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.middle-animation {
  animation: move ease 0.2s;
  transform: translateY(3rem);
  > .title {
    color: #e7384a;
  }
  @keyframes move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(2rem);
    }
  }
}

.triangle-container {
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%);
}

.text-red {
  color: #e7384a;
}
</style>
