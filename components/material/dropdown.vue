<template>
  <div>
    <button class="dropdown-container">
      <svg class="hamberger" width="24" height="24">
        <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />
      </svg>
      {{ this.selectList }}
      <svg class="vector" width="12" height="8">
        <path d="M10.59 0L6 4.94467L1.41 0L0 1.52227L6 8L12 1.52227L10.59 0Z" />
      </svg>
    </button>
    <div class="option-container">
      <span
        class="option-list noto-thai"
        @click="handleListClick('เรียงตามประเภท')"
        >เรียงตามประเภท</span
      >
      <span
        class="option-list noto-thai"
        @click="handleListClick('เรียงตามอักษร (ก-ฮ)')"
        >เรียงตามอักษร (ก-ฮ)</span
      >
      <span
        class="option-list noto-thai"
        @click="handleListClick('เรียงตามอักษร (ฮ-ก)')"
        >เรียงตามอักษร (ฮ-ก)</span
      >
      <span
        class="option-list noto-thai"
        @click="handleListClick('เรียงตามปีทีก่อตั้ง (เก่าสุด)')"
        >เรียงตามปีทีก่อตั้ง (เก่าสุด)</span
      >
      <span
        class="option-list noto-thai"
        @click="handleListClick('เรียงตามปีทีก่อตั้ง (ใหม่สุด)')"
        >เรียงตามปีทีก่อตั้ง (ใหม่สุด)</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectList: 'เรียงตามประเภท'
    }
  },
  methods: {
    handleListClick() {
      console.log('newList')
      // this.selectList = newList
    }
  }
}
</script>

<style lang="scss" scoped>
.option-container {
  width: 21rem;
  background-color: #fff;
  border: 1px solid #000000;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  position: absolute;
  padding: 1.4rem 1.2rem 0 1.2rem;
  z-index: 5;
  display: none;
  flex-direction: column;
  margin-top: 0.8rem;
  .option-list {
    width: 100%;
    font-size: 1.4rem;
    color: #384254;
    margin-bottom: 1.2rem;
    cursor: pointer;
    &:hover {
      color: #e7384a;
    }
  }
}

.dropdown-container {
  height: 3.2rem;
  background-color: #fff;
  border: 0.1rem solid #000000;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 1.4rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
  padding: 0 1.2rem;
  fill: #000;
  &:focus {
    background-color: #000;
    color: #fff;
    border-color: #fff;
    ~ .option-container {
      display: flex;
    }
    .vector {
      transform: rotate(180deg);
      fill: #fff;
    }
    .hamberger {
      fill: #fff;
    }
  }
}

.hamberger {
  margin-right: 0.8rem;
}

.vector {
  margin-left: 0.8rem;
}
</style>
