<template>
  <div class="intro-con">
    <div class="content-con">
      <div class="title">
        แล้วช่วงก่อน-หลังรัฐประหาร<br />
        แต่ละรัฐวิสาหกิจมีทหารเป็นกรรมการมากแค่ไหน?<br />
        รัฐวิสาหกิจใดมีสัดส่วนทหารเพิ่มขึ้นลดลงบ้าง?<br />
        ร่วมค้นหาได้ที่นี่
      </div>
      <div class="nav-left">
        ลองสำรวจด้วยตนเอง
        <div class="btn-con">
          <img :src="explorIcon" class="icon" />
          Explore
        </div>
      </div>
      <div class="nav-right">
        อ่านบทสรุป
        <div class="btn-con">
          <img :src="summaryIcon" class="icon" />
          Summary
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      explorIcon: require('~/assets/images/Component/Button/ic-explore.svg'),
      summaryIcon: require('~/assets/images/Component/Button/ic-summary.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.content-con {
  color: #fff;
  font-size: 3rem;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    'title title'
    'nav-left nav-right';
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media #{$mq-tablet} {
    grid-template-areas:
      'title'
      'nav-left'
      'nav-right';
    grid-template-rows: 1.5fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
}

.title {
  background-color: $red;
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}

.nav-left {
  background-color: $dark-blue;
  grid-area: nav-left;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-right {
  background-color: $pastel;
  grid-area: nav-right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
}

.icon {
  margin-right: 1rem;
}
</style>
