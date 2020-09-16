<template>
  <div class="card-container">
    <div class="date-container">
      <svg width="14" height="13">
        <path
          d="M5.375 5.77787H4.29167V6.80961H5.375V5.77787ZM7.54167 5.77787H6.45833V6.80961H7.54167V5.77787ZM9.70833 5.77787H8.625V6.80961H9.70833V5.77787ZM10.7917 2.16676H10.25V1.13501H9.16667V2.16676H4.83333V1.13501H3.75V2.16676H3.20833C2.60708 2.16676 2.125 2.63104 2.125 3.1985V10.4207C2.125 10.6944 2.23914 10.9568 2.4423 11.1503C2.64547 11.3438 2.92102 11.4525 3.20833 11.4525H10.7917C11.079 11.4525 11.3545 11.3438 11.5577 11.1503C11.7609 10.9568 11.875 10.6944 11.875 10.4207V3.1985C11.875 2.92487 11.7609 2.66244 11.5577 2.46895C11.3545 2.27546 11.079 2.16676 10.7917 2.16676ZM10.7917 10.4207H3.20833V4.74612H10.7917V10.4207Z"
          fill="#E7384A"
        />
      </svg>
      <span class="noto-thai date">{{ dataCard.date }}</span>
    </div>
    <div class="name-container">
      <img class="img-name" :src="dataCard.profile" />
      <div class="text-name">
        {{ dataCard.name }}
      </div>
    </div>
    <div class="detail">
      <div class="hint noto-thai">
        เริ่มดำรงตำแหน่งประธานกรรมการ
      </div>
      <div class="hint font-red">
        {{ dataCard.organName }}
      </div>
    </div>
    <div class="detail" style="margin-left:1.6rem;">
      <div class="hint noto-thai">
        ระยะเวลาดำรงตำแหน่ง
      </div>
      <div class="hint font-red">{{ dataCard.workDate }} วัน</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataCard'],
  data() {
    return {
      testimg: require('~/assets/images/profile-summary/apiwat.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 82rem;
  height: 8rem;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 1.3rem 0 1rem 2rem;
  margin: 0.5rem 0;
  @media #{$mq-tablet} {
    width: 60rem;
  }
  @media #{$mq-mobile} {
    display: none;
  }
}

.date-container {
  border-right: 0.1rem solid #e7384a;
  padding-right: 0.8rem;
  height: 100%;
  width: 13rem;
  text-align: left;
  display: flex;
  font-size: 1.4rem;
  @media #{$mq-tablet} {
    font-size: 0.8rem;
  }
}

.date {
  margin: 0;
  padding: 0;
  margin-left: 0.4rem;
}

.name-container {
  display: flex;
  align-items: center;
  @media #{$mq-tablet} {
    max-width: 20rem;
  }
}

.img-name {
  width: 5rem;
  height: 4.8rem;
  margin: 0 1.3rem 0 2.2rem;
  @media #{$mq-tablet} {
    width: 4rem;
    height: 3.8rem;
  }
}

.text-name {
  font-size: 1.8rem;
  color: #384254;
  width: 21rem;
  text-align: left;
  @media #{$mq-tablet} {
    font-size: 1.2rem;
  }
}

.detail {
  text-align: left;
  max-width: 20.8rem;
  @media #{$mq-tablet} {
    width: 18.2rem;
    margin-left: 0.8rem;
  }
}

.hint {
  @media #{$mq-tablet} {
    font-size: 0.8rem;
  }
}
</style>
