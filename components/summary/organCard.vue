<template>
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
}

.label-con {
  border: 0.1rem solid #384254;
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-container {
  text-align: left;
  margin-left: 1.2rem;
  width: 35.4rem;
}

.label {
  font-size: 1rem;
}

.organ-name {
  font-size: 1.8rem;
}

.before-container {
  text-align: left;
}

.after-container {
  text-align: left;
  margin-left: 4.6rem;
}

.waffle-container {
  display: flex;
  flex-wrap: wrap;
  width: 10.8rem;
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
}

.change-percent {
  font-size: 1.9rem;
  color: #e7384a;
}
</style>
