<template>
  <div class="nav-con">
    <div class="logo">
      <img class="logo" :src="electLogo" alt="" />
    </div>
    <div class="menu">
      <nuxt-link to="/" style="text-decoration: none;">
        <div :class="path === 'Home' ? 'button-active' : 'button'">
          Home
        </div>
      </nuxt-link>
      <nuxt-link to="/explore" style="text-decoration: none;">
        <div :class="path === 'Explore' ? 'button-active' : 'button'">
          Explore
        </div>
      </nuxt-link>
      <nuxt-link to="/summary" style="text-decoration: none;">
        <div :class="path === 'Summary' ? 'button-active' : 'button'">
          Summary
        </div>
      </nuxt-link>
    </div>
    <div class="hamberger-icon">
      <svg width="40" height="40">
        <path
          d="M5 10H35V13.3333H5V10ZM5 18.3333H35V21.6667H5V18.3333ZM5 26.6667H35V30H5V26.6667Z"
          fill="#E7384A"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      electLogo: require('~/assets/images/Navbar/elect-logo.png')
    }
  },
  props: ['path']
}
</script>

<style lang="scss" scoped>
.nav-con {
  background-color: #fff;
  padding: 2.5rem 4.5rem 2.5rem 2.5rem;
  width: 100vw;
  height: 8rem;
  z-index: 2;
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  @media #{$mq-tablet} {
    padding-right: 0rem;
  }
  @media #{$mq-mobile} {
    height: 5rem;
    padding: 0.5rem 1.5rem;
  }
}

.logo {
  flex: 1;
  width: 15.5rem;
  height: 3rem;
  @media #{$mq-mobile} {
    width: 10.3rem;
    height: 2rem;
  }
}

.menu {
  display: flex;
  @media #{$mq-mobile} {
    display: none;
  }
}

.button {
  margin-right: 3rem;
  font-size: 2.4rem;
  color: #384254;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
}

.button-active {
  font-size: 2.4rem;
  color: #384254;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 0.5rem solid #e7384a;
  text-transform: uppercase;
  margin-right: 3rem;
  &:not(:last-child) {
    margin-right: 5rem;
  }
}

.hamberger-icon {
  display: none;
  @media #{$mq-mobile} {
    display: flex;
  }
}
</style>
