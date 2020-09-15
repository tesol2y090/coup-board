<template>
  <div class="container">
    <span class="title">องค์กรรัฐวิสาหกิจ</span>
    <div class="right">
      <div class="pill-container">
        <div class="hint">2557</div>
        <Face57 />
      </div>
      <div class="pill-container">
        <div class="hint">2549</div>
        <Face49 />
      </div>
      <div class="pill-container">
        <div class="hint">2534</div>
        <Face34 />
      </div>
      <div class="pill-container">
        <div class="hint">2520</div>
        <Face20 />
      </div>
      <div class="pill-container">
        <div class="hint">2519</div>
        <Face19 />
      </div>
      <div class="pill-container">
        <div class="hint">2514</div>
        <Face14 />
      </div>
      <div class="pill-container">
        <div class="hint">2501</div>
        <Face01 />
      </div>
      <div class="pill-container">
        <div class="hint">2500</div>
        <Face00 />
      </div>
      <div class="pill-container">
        <div class="hint">2490 - 94</div>
        <Face49 />
      </div>
    </div>
  </div>
</template>

<script>
import Face57 from '~/components/assest/leaderFace/face57'
import Face49 from '~/components/assest/leaderFace/face49'
import Face34 from '~/components/assest/leaderFace/face34'
import Face20 from '~/components/assest/leaderFace/face20'
import Face19 from '~/components/assest/leaderFace/face19'
import Face14 from '~/components/assest/leaderFace/face14'
import Face01 from '~/components/assest/leaderFace/face01'
import Face00 from '~/components/assest/leaderFace/face00'
import Face94 from '~/components/assest/leaderFace/face94'
export default {
  components: {
    Face57,
    Face49,
    Face34,
    Face20,
    Face19,
    Face14,
    Face01,
    Face00,
    Face94
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 8rem;
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 0 8.3rem 0 8.3rem;
  position: relative;
  color: #fff;
  @media #{$mq-tablet} {
    padding-left: 1.6rem;
    padding-right: 1.5rem;
  }
}

.title {
  font-size: 2.4rem;
  color: #fff;
  flex: 1;
  @media #{$mq-mobile} {
    font-size: 1.2rem;
  }
}

.right {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.pill-container {
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2.5rem;
  &:last-child {
    width: auto;
  }
  @media #{$mq-tablet} {
    width: 3.6rem;
    margin-left: 1rem;
  }
}

.hint {
  color: #fff;
}
</style>
