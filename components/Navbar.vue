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
    <div v-if="canClose">
      <div class="hamberger-icon" @click="handleModalNavbar">
        <svg width="30" height="30">
          <path
            d="M23.75 3.75H6.25C5.58696 3.75 4.95107 4.01339 4.48223 4.48223C4.01339 4.95107 3.75 5.58696 3.75 6.25V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V6.25C26.25 5.58696 25.9866 4.95107 25.5178 4.48223C25.0489 4.01339 24.413 3.75 23.75 3.75ZM23.75 23.75H6.25V6.25H23.75V23.75ZM21.25 10.5L16.75 15L21.25 19.5L19.5 21.25L15 16.75L10.5 21.25L8.75 19.5L13.25 15L8.75 10.5L10.5 8.75L15 13.25L19.5 8.75L21.25 10.5Z"
            fill="#384254"
          />
        </svg>
      </div>
    </div>
    <div v-else class="hamberger-icon" @click="handleModalNavbar">
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
  props: ['path', 'can-close', 'handleModalNavbar']
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
  cursor: pointer;
  @media #{$mq-mobile} {
    display: flex;
  }
}
</style>
