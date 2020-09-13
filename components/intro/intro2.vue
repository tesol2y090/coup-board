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
      <div id="middle" class="middle">
        <div class="title">ปฏิรูปรัฐวิสาหกิจ</div>
        <pravutFace />
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
  components: {
    pravutFace
  },
  computed: {
    ...mapState('store', ['current_slide'])
  },
  watch: {
    current_slide() {
      if (this.current_slide === 2) {
        const middleCon = document.getElementById('middle')
      }
    }
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
}

.middle {
  margin: 0 8rem 0 6.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-con {
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-size: 2.4rem;
}

.title {
  font-size: 3.6rem;
  color: #627493;
  background: #ffffff;
  border-radius: 1rem;
  text-align: center;
  position: absolute;
  top: 0;
  width: 32.2rem;
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

.text-red {
  color: #e7384a;
}
</style>
