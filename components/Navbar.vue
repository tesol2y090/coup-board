<template>
  <div class="nav-con">
    <div class="logo">
      <img :src="electLogo" alt="" />
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
}

.logo {
  flex: 1;
}

.menu {
  display: flex;
}

.button {
  margin-right: 3rem;
  font-size: 2.4rem;
  color: #384254;
  font-weight: bold;
  cursor: pointer;
  padding-bottom: 3rem;
  text-transform: uppercase;
  &:not(:last-child) {
    margin-right: 5rem;
  }
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
</style>
