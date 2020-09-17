<template>
  <div class="container">
    <div class="left">
      <Dropdown />
      <RatioBtn />
    </div>
    <div class="right">
      <Label :handleModalInfo="handleModalInfo" />
    </div>
  </div>
</template>

<script>
import Dropdown from '~/components/material/dropdown'
import RatioBtn from '~/components/material/ratioBtn'
import Label from '~/components/explore/label'
export default {
  components: {
    Dropdown,
    RatioBtn,
    Label
  },
  data() {
    return {}
  },
  props: ['handleModalInfo']
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 6rem;
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 0 1.2rem 0 6.8rem;
  position: relative;
  color: #fff;
  @media #{$mq-tablet} {
    padding-left: 1.6rem;
    padding-right: 1.1rem;
  }
  @media #{$mq-mobile} {
    flex-direction: column-reverse;
    background-color: #384254;
  }
}

.left {
  display: flex;
  align-items: center;
  flex: 1;
}

.right {
  display: flex;
  align-items: center;
}
</style>
