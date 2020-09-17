<template>
  <div class="explore-wrap">
    <div class="header-mobile">
      <Navbar :path="'Explore'" :handleModalNavbar="handleModalNavbar" />
      <LabelHeader />
      <TitleHeader />
      <MenuHeader
        :handleModalInfo="handleModalInfo"
        :handleShowPillText="handleShowPillText"
      />
    </div>
    <div class="header">
      <Navbar :path="'Explore'" :handleModalNavbar="handleModalNavbar" />
      <MenuHeader
        :handleModalInfo="handleModalInfo"
        :handleShowPillText="handleShowPillText"
      />
      <LabelHeader />
    </div>
    <div class="content">
      <TitleHeader />
      <TimelineContent
        :setModalDetailData="setModalDetailData"
        :handleModalDetail="handleModalDetail"
        :showPillText="showPillText"
      />
      <div class="nav-container">
        <div class="nav-left">
          ลองสำรวจด้วยตนเอง
          <nuxt-link to="/" style="text-decoration: none;">
            <div class="btn-con">
              <img :src="homeIcon" class="icon" />
              Home
            </div>
          </nuxt-link>
        </div>
        <div class="nav-right">
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
    <ModalInfo v-if="modalInfo" :handleModalInfo="handleModalInfo" />
    <ModalDetail
      v-if="showModalDetail"
      :data="modalDetailData"
      :handleOpenModal="handleModalDetail"
    />
    <ModalNavbar
      v-if="showModalNavbar"
      :handleModalNavbar="handleModalNavbar"
    />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import MenuHeader from '~/components/explore/menuHeader'
import LabelHeader from '~/components/explore/labelHeader'
import TitleHeader from '~/components/explore/titleHeader'
import TimelineContent from '~/components/explore/timelineContent'
import ModalInfo from '~/components/modalInfo'
import ModalDetail from '~/components/explore/element/modal'
import ModalNavbar from '~/components/modalNavbar'

export default {
  components: {
    Navbar,
    MenuHeader,
    LabelHeader,
    TimelineContent,
    ModalInfo,
    ModalDetail
  },
  data() {
    return {
      summaryIcon: require('~/assets/images/Component/Button/ic-summary.svg'),
      homeIcon: require('~/assets/images/Component/Button/ic-home.svg'),
      modalInfo: false,
      showModalDetail: false,
      showModalNavbar: false,
      modalDetailData: {},
      showPillText: false
    }
  },
  methods: {
    handleModalInfo() {
      this.modalInfo = !this.modalInfo
    },
    handleModalDetail() {
      this.showModalDetail = !this.showModalDetail
    },
    setModalDetailData(newData) {
      this.modalDetailData = newData
    },
    handleModalNavbar() {
      this.showModalNavbar = !this.showModalNavbar
    },
    handleShowPillText() {
      this.showPillText = !this.showPillText
    }
  }
}
</script>

<style lang="scss" scoped>
.explore-wrap {
  display: flex;
  flex-direction: column;
}
.header {
  position: fixed;
  z-index: 4;
  @media #{$mq-mobile} {
    display: none;
  }
}
.header-mobile {
  position: fixed;
  z-index: 4;
  display: none;
  @media #{$mq-mobile} {
    display: inline;
  }
}
.content {
  position: relative;
  top: 202px;
  @media #{$mq-mobile} {
    top: 128px;
  }
}

.nav-container {
  width: 100vw;
  height: 32rem;
  position: relative;
  display: flex;
  @media #{$mq-mobile} {
    flex-direction: column;
  }
}

.nav-left {
  width: 50%;
  background-color: #000;
  grid-area: nav-left;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background-color: #384254;
  @media #{$mq-mobile} {
    font-size: 1.6rem;
    width: 100%;
    height: 50%;
  }
}

.nav-right {
  width: 50%;
  color: #384254;
  background-color: #f6efeb;
  grid-area: nav-right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  @media #{$mq-mobile} {
    font-size: 1.6rem;
    width: 100%;
    height: 50%;
  }
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

.icon {
  margin-right: 1rem;
}
</style>
