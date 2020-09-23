<template>
  <div class="intro-con">
    <div class="content-con">
      <div class="left">
        <div class="title">ทหารบนบอร์ด รัฐวิสาหกิจ:</div>
        <div class="subtitle">อ่อนไหวแค่ไหน ต่อรัฐประหาร</div>
      </div>
      <div class="right-desktop">
        <img :src="soliderGroup" class="img-group" />
      </div>
      <div class="right-mobile">
        <img :src="soliderGroupMobile" class="img-group" />
      </div>
    </div>
    <button class="learn-btn" @click="handleGotoSlide">
      Learn More
      <svg width="24" height="24" style="margin-left: 1.2rem">
        <path
          d="M11.0001 4H13.0001V16L18.5001 10.5L19.9201 11.92L12.0001 19.84L4.08008 11.92L5.50008 10.5L11.0001 16V4Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ["handleGotoSlide"],
  data() {
    return {
      soliderGroup: require("~/assets/images/solider-group.svg"),
      soliderGroupMobile: require("~/assets/images/group-people-mobile.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.content-con {
  color: #fff;
  font-size: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
  margin: 0 auto;

  @media #{$mq-tablet} {
    width: 1024px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 4.8rem;
  }
}

.left {
  width: 640px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media #{$mq-tablet} {
    width: 100%;
    align-items: center;
  }
}

.title {
  font-size: 6rem;
  text-align: left;
  color: $red;
  margin-left: 10.2rem;
  line-height: 120%;
  @media #{$mq-tablet} {
    font-size: 4.8rem;
    margin-left: 0;
    width: 42.4rem;
    text-align: center;
  }
  @media #{$mq-mobile} {
    font-size: 3.2rem;
    width: 26.9rem;
  }
}

.subtitle {
  font-size: 4rem;
  color: #fff;
  margin-left: 10.2rem;
  text-align: left;
  margin-top: 4rem;
  @media #{$mq-tablet} {
    font-size: 4.8rem;
    width: 42.4rem;
    margin-left: 0;
    text-align: center;
  }
  @media #{$mq-mobile} {
    font-size: 3.2rem;
    width: 24.9rem;
  }
}

.right-desktop {
  width: 640px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media #{$mq-tablet} {
    width: 100%;
  }
  @media #{$mq-mobile} {
    display: none;
  }
}

.right-mobile {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  @media #{$mq-tablet} {
    display: none;
  }
  @media #{$mq-mobile} {
    display: flex;
  }
}

.img-group {
  margin: 0 auto;
  @media #{$mq-tablet} {
    margin-top: 11.4rem;
  }
}

.learn-btn {
  outline: none;
  width: 17.6rem;
  height: 5.2rem;
  border-radius: 1rem;
  border: 0.2rem solid #ffffff;
  background-color: $dark-blue;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 2.4rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
