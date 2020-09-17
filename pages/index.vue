<template>
  <div>
    <ModalNavbar
      v-if="showModalNavbar"
      :handleModalNavbar="handleModalNavbar"
    />
    <Navbar :path="'Home'" :handleModalNavbar="handleModalNavbar" />
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      @slideChange="changeSwiperIndex()"
    >
      <swiper-slide class="dark-blue">
        <intro1 :handleGotoSlide="handleGotoSlide" />
      </swiper-slide>
      <swiper-slide> </swiper-slide>
      <swiper-slide v-if="!isTablet"> </swiper-slide>
      <swiper-slide class="dark-blue">
        <intro3 />
      </swiper-slide>
      <swiper-slide> </swiper-slide>
      <swiper-slide> </swiper-slide>
      <swiper-slide> </swiper-slide>
      <swiper-slide> </swiper-slide>
      <swiper-slide class="light-red">
        <intro7 />
      </swiper-slide>
    </swiper>

    <div v-if="current_slide === 1">
      <intro2 :part="1" />
    </div>
    <div v-if="current_slide === 2">
      <intro2 :part="2" />
    </div>
    <div
      v-if="
        (current_slide === 4 && !isTablet) || (current_slide === 3 && isTablet)
      "
    >
      <intro4 :part="1" />
    </div>
    <div
      v-if="
        (current_slide === 5 && !isTablet) || (current_slide === 4 && isTablet)
      "
    >
      <intro4 :part="2" />
    </div>
    <div
      v-if="
        (current_slide === 6 && !isTablet) || (current_slide === 5 && isTablet)
      "
    >
      <intro6 :part="1" />
    </div>
    <div
      v-if="
        (current_slide === 7 && !isTablet) || (current_slide === 6 && isTablet)
      "
    >
      <intro6 :part="2" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Navbar from '~/components/Navbar'
import Intro1 from '~/components/intro/Intro1'
import Intro2 from '~/components/intro/Intro2'
import Intro3 from '~/components/intro/Intro3'
import Intro4 from '~/components/intro/Intro4'
import Intro6 from '~/components/intro/Intro6'
import Intro7 from '~/components/intro/Intro7'
import ModalNavbar from '~/components/modalNavbar'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Navbar,
    Intro1,
    Intro2,
    Intro3,
    Intro4,
    Intro6,
    Intro7
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        direction: 'vertical',
        slidesToShow: 1,
        mousewheel: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false
        }
      },
      current_slide: 0,
      navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev'
      },
      showModalNavbar: false,
      isTablet: window.innerWidth <= 1024 && window.innerWidth > 768
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    ...mapState('store', [])
  },
  methods: {
    changeSwiperIndex(index) {
      this.current_slide = this.$refs.mySwiper.$swiper.activeIndex
      this.$store.dispatch('store/setCurrentSlide', this.current_slide)
      return this.current_slide
    },
    handleGotoSlide(page) {
      this.$refs.mySwiper.$swiper.slideTo(1, 1000)
    },
    handleModalNavbar() {
      this.showModalNavbar = !this.showModalNavbar
    }
  },
  watch: {
    current_slide() {
      console.log(this.current_slide)
      console.log(this.isTablet)
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
