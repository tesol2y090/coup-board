<template>
  <div class="nav-con">
    <div class="logo">
      <img :src="electLogo" alt="" />
    </div>
    <div class="menu">
      <div class="button">
        Home
      </div>
      <div class="button">
        Explore
      </div>
      <div class="button">
        Summary
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      electLogo: require('~/assets/images/Navbar/elect-logo.png')
    }
  }
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
  font-size: 2.4rem;
  color: #384254;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 0.5rem solid #e7384a;
  padding-bottom: 3rem;
  text-transform: uppercase;
  &:not(:last-child) {
    margin-right: 5rem;
  }
}
</style>
