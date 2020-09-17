<template>
  <div class="container">
    <h5>Explore</h5>
    <h2>สำรวจทหารในกรรมการรัฐวิสาหกิจ</h2>
    <h5>กดเพื่อดูเหตุการณ์</h5>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 30.4rem;
  padding-top: 6.3rem;
  background-color: #384254;
  text-align: center;
  @media #{$mq-mobile} {
    height: 14.6rem;
    padding: 1.6rem 2.6rem 0 2.6rem;
  }
}

h5 {
  @media #{$mq-mobile} {
    font-size: 1.4rem;
  }
}

h2 {
  @media #{$mq-mobile} {
    font-size: 2.4rem;
  }
}

h2,
h5 {
  color: #fff;
}
</style>
