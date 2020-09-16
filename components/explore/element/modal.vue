<template>
  <div class="modal" :style="`top: ${data.top}px`">
    <div class="close-container" @click="handleOpenModal">
      <svg width="31" height="31">
        <path
          d="M23.9809 4.36719H6.64715C5.9904 4.36719 5.36056 4.62882 4.89617 5.09454C4.43179 5.56025 4.1709 6.1919 4.1709 6.85052V24.2339C4.1709 24.8925 4.43179 25.5241 4.89617 25.9898C5.36056 26.4556 5.9904 26.7172 6.64715 26.7172H23.9809C24.6376 26.7172 25.2675 26.4556 25.7318 25.9898C26.1962 25.5241 26.4571 24.8925 26.4571 24.2339V6.85052C26.4571 6.1919 26.1962 5.56025 25.7318 5.09454C25.2675 4.62882 24.6376 4.36719 23.9809 4.36719ZM23.9809 24.2339H6.64715V6.85052H23.9809V24.2339ZM21.5046 11.0722L17.0474 15.5422L21.5046 20.0122L19.7713 21.7505L15.314 17.2805L10.8568 21.7505L9.12339 20.0122L13.5806 15.5422L9.12339 11.0722L10.8568 9.33385L15.314 13.8039L19.7713 9.33385L21.5046 11.0722Z"
          fill="#E7384A"
        />
      </svg>
    </div>
    <div class="left">
      <img :src="data.logo" />
      <div class="sub-hint noto-thai">ชื่อหน่วยงาน</div>
      <div class="organ-name">{{ data.orgName }}</div>
      <div class="flex-row top16">
        <div class="flex-row-left">
          <div class="sub-hint noto-thai">ปีที่ก่อตั้ง</div>
          <div class="value">{{ data.year }}</div>
        </div>
        <div class="flex-row-right">
          <div class="sub-hint noto-thai">ประเภท</div>
          <div class="value flex-row">
            <Organ20Label :cat="data.cat" />
            {{ data.cat }}
          </div>
        </div>
      </div>
      <div class="sub-hint noto-thai top16">กระทรวงที่สังกัด</div>
      <div class="value">{{ data.minis }}</div>
    </div>
    <div class="mid">
      <div class="value">
        สัดส่วนของทหารในคณะกรรมการ<br />
        <span class="font-red">ก่อนรัฐประหาร ปี {{ data.coupYear }}</span>
      </div>
      <div class="waffle-container">
        <div
          v-for="(i, index) in data.b4Mili"
          class="waffle-red"
          v-bind:key="`${index} g`"
        />
        <div
          v-for="(i, index) in data.b4Total"
          class="waffle"
          v-bind:key="`${index} b`"
        />
      </div>
      <div class="value" style="margin-top: 2.4rem">
        สัดส่วนของทหารในคณะกรรมการ<br />
        <span class="font-red">หลังรัฐประหาร ปี {{ data.coupYear }}</span>
      </div>
      <div class="waffle-container">
        <div
          v-for="(i, index) in data.aftMili"
          class="waffle-red"
          v-bind:key="`${index} z`"
        />
        <div
          v-for="(i, index) in data.aftTotal"
          class="waffle"
          v-bind:key="`${index} x`"
        />
      </div>
    </div>
    <div class="right">
      <div class="value">
        สัดส่วนที่เปลี่ยนแปลง
      </div>
      <h3 v-if="data.percentChange > 0" class="font-red">
        + {{ data.percentChange }} %
      </h3>
      <h3 v-else-if="data.percentChange < 0" class="font-light-blue">
        {{ data.percentChange }} %
      </h3>
      <h3 v-else>{{ data.percentChange }} %</h3>
      <div class="bar-contanier">
        <div class="bar-container-label">
          <div class="hint noto-thai" style="flex: 1">ก่อน</div>
          <div class="hint noto-thai">{{ data.b4Percent }}%</div>
        </div>
        <div class="bar-bg">
          <div class="bar-bg-red" :style="`width: ${data.b4Percent}%`" />
        </div>
      </div>
      <div class="bar-contanier top26">
        <div class="bar-container-label">
          <div class="hint noto-thai" style="flex: 1">หลัง</div>
          <div class="hint noto-thai">{{ data.aftPercent }}%</div>
        </div>
        <div class="bar-bg">
          <div class="bar-bg-red" :style="`width: ${data.aftPercent}%`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Organ20Label from '~/components/explore/element/smallOrganLabel'
export default {
  components: {
    Organ20Label
  },
  props: ['data', 'handleOpenModal'],
  methods: {}
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 23.8rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  position: absolute;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  @media #{$mq-mobile} {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
}

.flex-row {
  display: flex;
  align-items: center;
  .flex-row-left,
  .flex-row-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .flex-row-right {
    margin-left: 4.8rem;
  }
}

.value {
  font-size: 1.6rem;
  line-height: 120%;
  @media #{$mq-tablet} {
    font-size: 1.4rem;
  }
}

.top16 {
  margin-top: 1.6rem;
}

.top26 {
  margin-top: 2.6rem;
}

.left {
  padding: 1.5rem 0 0 2.2rem;
  width: 33.33%;
  background-color: #384254;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  * {
    color: #fff;
  }
  img {
    height: 4rem;
    margin-bottom: 1.2rem;
  }
  .organ-name {
    font-size: 1.8rem;
    @media #{$mq-tablet} {
      font-size: 1.4rem;
      text-align: left;
    }
  }
  @media #{$mq-mobile} {
    width: 100%;
    padding-bottom: 2rem;
  }
}

.mid {
  width: 33.33%;
  padding: 2.3rem 5.5rem 0 3.5rem;
  text-align: left;
  @media #{$mq-tablet} {
    padding: 1.5rem 1.5rem 0 2.1rem;
  }
  @media #{$mq-mobile} {
    width: 100%;
  }
  .waffle-container {
    display: flex;
    flex-wrap: wrap;
    width: 23rem;
  }
  .waffle {
    background: #e3e9f4;
    border-radius: 3px;
    width: 2rem;
    height: 2rem;
    margin: 0.25rem 0.15rem;
  }
  .waffle-red {
    background: #e7384a;
    border-radius: 3px;
    width: 2rem;
    height: 2rem;
    margin: 0.25rem 0.15rem;
  }
}

.right {
  width: 33.33%;
  margin: 1.1rem 0;
  padding-top: 1.2rem;
  padding-left: 3.2rem;
  padding-right: 6.7rem;
  border-left: 1px solid #d8d8d8;
  text-align: left;
  @media #{$mq-tablet} {
    padding-top: 0.4rem;
    padding-left: 1.5rem;
  }
  @media #{$mq-mobile} {
    width: 100%;
  }
}
.bar-container {
  width: 23.2rem;
}
.bar-container-label {
  display: flex;
  align-items: center;
}
.bar-bg {
  position: relative;
  height: 0.8rem;
  background: #eeeeee;
  border-radius: 0.4rem;
}
.bar-bg-red {
  height: 0.8rem;
  background: #e7384a;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
}

.close-container {
  cursor: pointer;
  position: absolute;
  right: 1.6rem;
  top: 0.4rem;
}
</style>
