<template>
  <div class="">
    <div class="content-con ">
      <div class="mid-con">
        <div class="left noto-thai">
          เพื่อวิเคราะห์การเปลี่ยนแปลงชุดบอร์ดรัฐวิสาหกิจภาย
          ใต้บริบทของรัฐประหาร เราจึงรวบรวมข้อมูลทั้งหมด
          มาจากแหล่งข้อมูลที่เกี่ยวข้องกับรัฐวิสาหกิจนั้นๆ อันได้แก่
          ประกาศสำนักนายกรัฐมนตรี เอกสารมติ คณะรัฐมนตรี
          รายงานการประชุมผู้ถือหุ้น และรายงานประจำปี
          <br />
          <br />
          โดยสาเหตุการเปลี่ยนแปลงที่ว่า เราหมายถึง 2 สาเหตุได้แก่
          <br />
          <br />
          1. เปลี่ยนเพราะหมดอายุตามวาระ
          <br />
          2. เปลี่ยนเพราะคณะรัฐมนตรีให้ออก
          <div class="bot-con">
            * หมายเหตุ: คำว่า ‘ทหาร’ ในที่นี้หมายถึง
            ข้าราชการทหาร/อดีตข้าราชการทหารที่มียศตำแหน่งหน้าชื่อ
          </div>
        </div>
        <div class="right">
          <div class="right-top noto-thai">
            เลือกข้อมูลด้วยการใช้ประกาศแต่งตั้งที่เกิดขึ้น<br />ด้วยการใช้อำนาจของคณะรัฐมนตรี/ผู้ถือหุ้น<br />เป็นหลัก
            โดยเลือก 2 ชุด ได้แก่
          </div>
          <div class="right-bottom ">
            <div class="right-bottom-box">
              <groupPeopleBlack />
              กรรมการชุดสุดท้าย
              <span class="text-red">ก่อนเกิดรัฐประหาร</span>
            </div>
            <div class="arrow">
              <arrowRed />
            </div>
            <div class="right-bottom-box">
              <groupPeopleRed />
              กรรมการชุดแรก
              <span class="text-red">หลังเกิดรัฐประหาร</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import groupPeopleBlack from '~/components/assest/group-people-black'
import groupPeopleRed from '~/components/assest/group-people-red'
import arrowRed from '~/components/assest/arrow-red'
export default {
  components: {
    groupPeopleBlack,
    groupPeopleRed,
    arrowRed
  },
  data() {
    return {
      tv: require('~/assets/images/tv.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.content-con {
  padding: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1280px;
  margin: 0 auto;
  margin-top: 7.8rem;
  @media #{$mq-tablet} {
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 4.8rem;
    padding-top: 9rem;
    background-color: #384254;
    height: 100vh;
  }
  @media #{$mq-mobile} {
    background: #f6efeb;
    margin-top: 0;
    padding: 10rem 2rem;
    height: calc(100vh - 5rem);
    margin-top: 5rem;
  }
}
.left {
  color: #fff;
  width: 50%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  @media #{$mq-tablet} {
    width: 100%;
  }
  @media #{$mq-mobile} {
    font-size: 1.4rem;
    color: #384254;
  }
}

.right {
  margin-left: 5rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #f6efeb;
  border-radius: 1rem;
  height: 44.8rem;
  padding: 3.7rem 3.5rem 6.3rem;
  font-size: 2rem;
  text-align: center;
  @media #{$mq-tablet} {
    margin-left: 0;
    margin-top: 5rem;
    width: 51.6rem;
    height: 41.2rem;
  }
  @media #{$mq-mobile} {
    top: 0;
    font-size: 1.4rem;
    color: #384254;
    display: none;
  }
}

.right-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
}

.right-bottom-box {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  color: #000;
  justify-content: center;
  width: 19.6rem;
}

.arrow {
  top: 0;
  margin: 0 2.6rem;
}

.mid-con {
  width: 100%;
  display: flex;
  @media #{$mq-tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
}

.bot-con {
  margin-top: 11.6rem;
  padding-top: 1rem;
  border-top: 0.2rem solid #fff;
  font-size: 1.4rem;
  color: #fff;
  @media #{$mq-tablet} {
    margin-top: 2.5rem;
  }
  @media #{$mq-mobile} {
    font-size: 1.4rem;
    color: #384254;
  }
}

.text-red {
  color: #e7384a;
}
</style>
