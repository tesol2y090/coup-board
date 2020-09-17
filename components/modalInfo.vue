<template>
  <div class="modal-container">
    <Navbar :path="'Explore'" />
    <div class="close-container">
      ปิด
      <svg width="30" height="30" @click="handleModalInfo" class="close-icon">
        <path
          d="M23.75 3.75H6.25C5.58696 3.75 4.95107 4.01339 4.48223 4.48223C4.01339 4.95107 3.75 5.58696 3.75 6.25V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V6.25C26.25 5.58696 25.9866 4.95107 25.5178 4.48223C25.0489 4.01339 24.413 3.75 23.75 3.75ZM23.75 23.75H6.25V6.25H23.75V23.75ZM21.25 10.5L16.75 15L21.25 19.5L19.5 21.25L15 16.75L10.5 21.25L8.75 19.5L13.25 15L8.75 10.5L10.5 8.75L15 13.25L19.5 8.75L21.25 10.5Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="content-container">
      <div class="content-container-left">
        <h4>วิธีการเก็บข้อมูล</h4>
        <div class="hint noto-thai">
          เพื่อวิเคราะห์การเปลี่ยนแปลงชุดบอร์ดรัฐวิสาหกิจภายใต้บริบทของรัฐประหาร<br />
          <br />
          <strong class="noto-thai"
            >เราจึงรวบรวมข้อมูลทั้งหมดมาจากแหล่งข้อมูล
            ที่เกี่ยวข้องกับรัฐวิสาหกิจนั้นๆ อันได้แก่<br
          /></strong>
          • ประกาศสำนักนายกรัฐมนตรี • เอกสารมติคณะรัฐมนตรี
          รายงานการประชุมผู้ถือหุ้น • รายงานประจำปี<br />
          <br />
          <strong class="noto-thai"
            >เลือกข้อมูลด้วยการใช้ประกาศแต่งตั้งที่เกิดขึ้นด้วยการใช้อำนาจของคณะรัฐมนตรี/ผู้ถือหุ้นเป็นหลัก
            โดยเลือก 2 ชุด ได้แก่</strong
          ><br />
          1. ชุดสุดท้ายก่อนเกิดรัฐประหาร 2. ชุดแรกหลังเกิดรัฐประหาร<br />
          <br />
          <strong class="noto-thai"
            >โดยสาเหตุการเปลี่ยนแปลงที่ว่า เราหมายถึง 2 สาเหตุ ได้แก่</strong
          ><br />
          1. เปลี่ยนเพราะหมดอายุตามวาระ 2.เปลี่ยนเพราะคณะรัฐมนตรีให้ออก
        </div>
        <h4>วิธีคำนวณ</h4>
        <div class="hint noto-thai">
          ตัวเลขในรูปร้อยละที่ปรากฎคือผลต่างของสัดส่วนทหารระหว่างหลังและก่อนรัฐประหาร
        </div>
      </div>
      <div class="content-container-right">
        <h4>ข้อจำกัด</h4>
        <div class="hint noto-thai">
          <strong class="noto-thai"
            >มีรัฐวิสาหกิจ 6 แห่งที่ไม่สามารถเข้าถึงข้อมูล ได้แก่ </strong
          ><br />• บริษัท สหโรงแรมไทยและการท่องเที่ยว จำกัด<br />
          • บริษัท อู่กรุงเทพ จำกัด<br />
          • บริษัทบริหารสินทรัพย์ธนาคารอิสลามแห่งประเทศไทย<br />
          • โรงงานไพ่ กรมสรรพสามิต<br />
          • โรงพิมพ์ตำรวจ สำนักงานตำรวจแห่งชาติ<br />
          • สำนักงานธนานุเคราะห์ กรมพัฒนาสังคมและสวัสดิการ<br />
          <br />
          <strong class="noto-thai"
            >ประกาศแต่งตั้งบางฉบับไม่ระบุชื่อ
            เนื่องจากเป็นการแต่งตั้งโดยตำแหน่ง</strong
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  },
  props: ['handleModalInfo']
}
</script>
<style lang="scss" scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #fff;
  position: fixed;
  z-index: 7;
}

.close-container {
  width: 100vw;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #384254;
  font-size: 2.4rem;
  color: #fff;
}

.content-container {
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  text-align: left;
  overflow-y: scroll;
  &-left {
    color: #000;
    width: 41.4rem;
    @media #{$mq-mobile} {
      width: 100%;
    }
  }
  &-right {
    color: #000;
    width: 41.4rem;
    margin-left: 6rem;
    @media #{$mq-mobile} {
      margin-left: 0rem;
      width: 100%;
    }
  }
  @media #{$mq-mobile} {
    flex-direction: column;
    padding: 0 2rem 3rem 2rem;
    margin-top: 1.5rem;
  }
}

h4 {
  @media #{$mq-mobile} {
    text-align: center;
  }
}

.close-icon {
  margin-left: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;
}
</style>
