<template>
  <div>
    <div class="card-container">
      <div class="label-con">
        {{ dataCard.id }}
      </div>
      <div class="title-container">
        <div class="label noto-thai">หน่วยงาน</div>
        <div class="organ-name">{{ dataCard.name }}</div>
      </div>
      <div class="before-container">
        <div class="label noto-thai">ก่อนรัฐประหาร</div>
        <div class="waffle-container">
          <div class="waffle" v-for="i in dataCard.beforeCoup" v-bind:key="i" />
        </div>
      </div>
      <div class="after-container">
        <div class="label noto-thai">หลังรัฐประหาร</div>
        <div class="waffle-container">
          <div
            class="waffle-red"
            v-for="i in dataCard.afterCoupRed"
            v-bind:key="i"
          />
          <div class="waffle" v-for="i in dataCard.afterCoup" v-bind:key="i" />
        </div>
      </div>
      <div class="change-container">
        <div class="label noto-thai">ความเปลี่ยนแปลง</div>
        <div class="change-percent">+ {{ dataCard.change }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataCard']
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 82rem;
  height: 5.5rem;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding-left: 1.8rem;
  margin: 0.5rem 0;
  @media #{$mq-tablet} {
    width: 60rem;
  }
  @media #{$mq-mobile} {
    display: none;
  }
}

.label-con {
  border: 0.1rem solid #384254;
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media #{$mq-tablet} {
    flex-direction: column;
  }
}

.title-container {
  text-align: left;
  margin-left: 1.2rem;
  width: 35.4rem;
  @media #{$mq-tablet} {
    width: 24rem;
  }
  @media #{$mq-mobile} {
    width: 50%;
  }
}

.label {
  font-size: 1rem;
  @media #{$mq-tablet} {
    font-size: 0.8rem;
  }
  @media #{$mq-mobile} {
    font-size: 0.6rem;
  }
}

.organ-name {
  font-size: 1.8rem;
  @media #{$mq-tablet} {
    font-size: 1.2rem;
  }
  @media #{$mq-mobile} {
    font-size: 0.8rem;
  }
}

.before-container {
  text-align: left;
  @media #{$mq-mobile} {
    width: 16.66%;
  }
}

.after-container {
  text-align: left;
  margin-left: 4.6rem;
  @media #{$mq-mobile} {
    width: 16.66%;
    margin-left: 0rem;
  }
}

.waffle-container {
  display: flex;
  flex-wrap: wrap;
  width: 10.8rem;
  @media #{$mq-tablet} {
    width: 8rem;
  }
}

.waffle {
  background-color: #d8d8d8;
  border-radius: 0.3rem;
  width: 1rem;
  height: 1rem;
  margin: 0.1rem;
}

.waffle-red {
  background-color: #e7384a;
  border-radius: 0.3rem;
  width: 1rem;
  height: 1rem;
  margin: 0.1rem;
}

.change-container {
  text-align: left;
  margin-left: 3.4rem;
  @media #{$mq-tablet} {
    margin-left: 1.4rem;
  }
  @media #{$mq-mobile} {
    width: 16.66%;
  }
}

.change-percent {
  font-size: 1.9rem;
  color: #e7384a;
  @media #{$mq-tablet} {
    font-size: 1.5rem;
  }
}
</style>
