<template>
  <div class="modal-container">
    <Navbar
      :path="'Explore'"
      :canClose="true"
      :handleModalNavbar="handleModalNavbar"
    />
    <div class="nav-container">
      <div class="nav-menu-container" id="home">
        กลับหน้าแรก
        <nuxt-link to="/" style="text-decoration: none;">
          <div class="btn-con">
            <img :src="homeIcon" class="icon" />
            Home
          </div>
        </nuxt-link>
      </div>
      <div class="nav-menu-container" id="explore">
        ลองสำรวจด้วยตนเอง
        <nuxt-link to="/explore" style="text-decoration: none;">
          <div class="btn-con">
            <img :src="explorIcon" class="icon" />
            Explore
          </div>
        </nuxt-link>
      </div>
      <div class="nav-menu-container" id="summary">
        อ่านบทสรุป
        <nuxt-link to="/summary" style="text-decoration: none;">
          <div class="btn-con">
            <img :src="summaryIcon" class="icon" />
            Summary
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      explorIcon: require('~/assets/images/Component/Button/ic-explore.svg'),
      homeIcon: require('~/assets/images/Component/Button/ic-home.svg'),
      summaryIcon: require('~/assets/images/Component/Button/ic-summary.svg')
    }
  },
  props: ['handleModalNavbar']
}
</script>
<style lang="scss" scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #fff;
  position: fixed;
  z-index: 7;
}

.nav-container {
  height: calc(100vh - 5rem);
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.nav-menu-container {
  height: 33.33%;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  font-size: 1.6rem;
}

.btn-con {
  background: #fff;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  padding: 1.7rem 1.5rem;
  font-size: 2.4rem;
  cursor: pointer;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  @media #{$mq-mobile} {
    font-size: 1.6rem;
    padding: 0.8rem;
  }
}

#explore {
  background: #384254;
}

#summary {
  background: #f6efeb;
  color: #384254;
}

.icon {
  margin-right: 1rem;
}
</style>
