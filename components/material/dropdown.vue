<template>
  <div>
    <button class="dropdown-container noto-thai" @click="handleOpen">
      <svg class="hamberger" width="24" height="24">
        <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />
      </svg>
      {{ this.selectedOption }}
      <svg class="vector" width="12" height="8">
        <path d="M10.59 0L6 4.94467L1.41 0L0 1.52227L6 8L12 1.52227L10.59 0Z" />
      </svg>
    </button>
    <div class="option-container" v-show="isOpen">
      <div
        class="option-list noto-thai"
        v-for="option in optionList"
        v-bind:key="option"
        @click="handleListClick(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selectList: 'เรียงตามประเภท',
      optionList: [
        'เรียงตามประเภท',
        'เรียงตามอักษร (ก-ฮ)',
        'เรียงตามอักษร (ฮ-ก)',
        'เรียงตามปีทีก่อตั้ง (เก่าสุด)',
        'เรียงตามปีทีก่อตั้ง (ใหม่สุด)'
      ],
      isOpen: false
    }
  },
  computed: {
    ...mapState('store', ['selectedOption'])
  },
  methods: {
    handleListClick(newList) {
      this.$store.dispatch('store/setSelectedOption', newList)
      // this.selectList = newList
      this.handleOpen()
    },
    handleOpen() {
      this.isOpen = !this.isOpen
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
  font-size: 1.2rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
  padding: 0 1.2rem;
  fill: #000;
  outline: none;
  @media #{$mq-tablet} {
    font-size: 1rem;
  }
  @media #{$mq-mobile} {
    height: 3rem;
    line-height: 110%;
  }
  &:focus {
    background-color: #000;
    color: #fff;
    border-color: #fff;
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
