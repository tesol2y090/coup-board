<template>
  <div class="modal" :style="`top: ${data.top}px`">
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
      <h3 v-if="data.percentChange < 0" class="font-light-blue">
        {{ data.percentChange }} %
      </h3>
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
  props: ['data']
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
  }
}

.mid {
  width: 33.33%;
  padding: 2.3rem 5.5rem 0 3.5rem;
  text-align: left;
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
</style>
