<template>
  <div class="container">
    <span class="title">องค์กรรัฐวิสาหกิจ</span>
    <div class="right">
      <div class="pill-container">
        <div class="hint">2557</div>
        <div class="leader-face-desktop">
          <Face57 />
        </div>
        <div class="leader-face-mobile">
          <Face57Mobile />
        </div>
      </div>
      <div class="pill-container">
        <div class="hint">2549</div>
        <div class="leader-face-desktop">
          <Face49 />
        </div>
        <div class="leader-face-mobile">
          <Face49Mobile />
        </div>
      </div>
      <div class="pill-container">
        <div class="hint">2534</div>
        <div class="leader-face-desktop">
          <Face34 />
        </div>
        <div class="leader-face-mobile">
          <Face34Mobile />
        </div>
      </div>
      <div class="pill-container">
        <div class="hint">2520</div>
        <div class="leader-face-desktop">
          <Face20 />
        </div>
        <div class="leader-face-mobile">
          <Face20Mobile />
        </div>
      </div>
      <div class="pill-container">
        <div class="hint">2519</div>
        <div class="leader-face-desktop">
          <Face19 />
        </div>
        <div class="leader-face-mobile">
          <Face19Mobile />
        </div>
      </div>
      <div class="pill-container">
        <div class="hint">2514</div>
        <div class="leader-face-desktop">
          <Face14 />
        </div>
        <div class="leader-face-mobile">
          <Face14Mobile />
        </div>
      </div>
      <div class="pill-container">
        <div class="hint">2501</div>
        <div class="leader-face-desktop">
          <Face01 />
        </div>
        <div class="leader-face-mobile">
          <Face01Mobile />
        </div>
      </div>
      <div class="pill-container">
        <div class="hint">2500</div>
        <div class="leader-face-desktop">
          <Face00 />
        </div>
        <div class="leader-face-mobile">
          <Face00Mobile />
        </div>
      </div>
      <div class="pill-container">
        <div class="hint-desktop">2490 - 94</div>
        <div class="hint-mobile">90 - 94</div>
        <div class="leader-face-desktop">
          <Face94 />
        </div>
        <div class="leader-face-mobile">
          <Face94Mobile />
        </div>
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

import Face57Mobile from '~/components/assest/leaderFace/face57Mobile'
import Face49Mobile from '~/components/assest/leaderFace/face49Mobile'
import Face34Mobile from '~/components/assest/leaderFace/face34Mobile'
import Face20Mobile from '~/components/assest/leaderFace/face20Mobile'
import Face19Mobile from '~/components/assest/leaderFace/face19Mobile'
import Face14Mobile from '~/components/assest/leaderFace/face14Mobile'
import Face01Mobile from '~/components/assest/leaderFace/face01Mobile'
import Face00Mobile from '~/components/assest/leaderFace/face00Mobile'
import Face94Mobile from '~/components/assest/leaderFace/face94Mobile'

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
    Face94,
    Face57Mobile,
    Face49Mobile,
    Face34Mobile,
    Face20Mobile,
    Face19Mobile,
    Face14Mobile,
    Face01Mobile,
    Face00Mobile,
    Face94Mobile
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
  @media #{$mq-mobile} {
    padding: 0.4rem 0.8rem 0.4rem 1rem;
    height: 3.6rem;
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
  @media #{$mq-mobile} {
    width: 2rem;
    margin-left: 0.4rem;
  }
}

.hint {
  color: #fff;
  @media #{$mq-mobile} {
    font-size: 0.8rem;
  }
}

.hint-desktop {
  color: #fff;
  display: inline;
  font-size: 1.4rem;
  @media #{$mq-mobile} {
    display: none;
  }
}

.hint-mobile {
  display: none;
  @media #{$mq-mobile} {
    font-size: 0.8rem;
    color: #fff;
    display: inline;
  }
}

.leader-face-desktop {
  display: inline;
  @media #{$mq-mobile} {
    display: none;
  }
}

.leader-face-mobile {
  display: none;
  @media #{$mq-mobile} {
    display: inline;
  }
}
</style>
