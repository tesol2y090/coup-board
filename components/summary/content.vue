<template>
  <div>
    <div class="container plastel">
      <h5>Summary</h5>
      <h2>
        ยกมือแน่แค่นั้นหรือ?<br />บทสรุปว่าด้วยตัวเลขของทหาร<br />
        ในกรรมการรัฐวิสาหกิจ
      </h2>
      <h5 class="top50">
        หลังรัฐประหาร 2557 ที่ผ่านมา นโยบายสำคัญของการปฏิรูปรัฐวิสาหกิจ
        ภายใต้การนำ ของพลเอกประยุทธ์ จันทร์โอชา นายกรัฐมนตรีในขณะนั้นคือการ
        เปลี่ยนแปลงหรือแต่งตั้งคณะกรรมการหน้าใหม่ๆ เข้าประจำรัฐวิสาหกิจต่างๆ
        ด้วยหวังใจว่าจะช่วย สังเกตการณ์มากกว่าจะไปยกมือถือมติตัดสินใจใดๆ
      </h5>
      <p class="top30">
        เป็นเพราะว่านี่คือหนึ่งของแผนการปฏิรูปรัฐวิสาหกิจหรือไม่
        ที่กลายเป็นเหตุให้สงสัยว่า ทหารเข้าไปยกมืออะไรในรัฐวิสาหกิจเยอะแยะ?
        แล้วมันจะเยอะแค่ไหนกันเชียว?
      </p>
      <h3 class="top50">
        และนี่ก็คือสิ่งที่เกิดขึ้นหลังรัฐประหารปี 2557
      </h3>
      <h4 class="top30">
        1. หลังรัฐประหาร 2557 สัดส่วนทหารเพิ่มขึ้นสูงสุด
      </h4>
      <div class="split-container top30">
        <div class="left">
          <img class="img-show" :src="chart1" />
        </div>
        <div class="right">
          <p class="noto-thai">
            หลังรัฐประหาร 2557 มีสัดส่วนทหารที่เป็น
            กรรมการรัฐวิสาหกิจเพิ่มขึ้นสูงที่สุดนับตั้งแต่หลังรัฐประหาร 2494
            ซึ่งยุค 2490 นั้น เป็นช่วงเวลาที่
            มีรัฐวิสาหกิจในกำกับของกระทรวงกลาโหมเกิดขึ้นมากมาย
          </p>
        </div>
      </div>
      <h4 class="top50">
        2. ครอง ‘ขนส่ง’ มากที่สุด<br />‘พลังงาน-สังคมเทคโนฯ’ สัดส่วนพุ่งทะยาน
      </h4>
      <div class="split-container top30">
        <div class="left">
          <img class="img-show" :src="chart2" />
        </div>
        <div class="right">
          <p class="noto-thai">
            ในบรรดารัฐวิสาหกิจ 9 ประเภท* ทุกประเภทมี สัดส่วนทหารเพิ่มขึ้น
            โดยเฉพาะประเภท สาธารณูปโภค พลังงาน และทรัพยากรธรรมชาติฯ
            ที่สัดส่วนเพิ่มขึ้นสูงกว่าประเภทอื่น และยังปรากฎว่า
            ทหารที่ได้รับแต่งตั้งส่วนมาก
            ได้เป็นกรรมการอยู่ในรัฐวิสาหกิจประเภทขนส่ง
            และเป็นสัดส่วนที่เพิ่มขึ้นมาก (เพิ่มขึ้นถึง 14.05%)
            เมื่อเปรียบเทียบกับช่วงก่อนรัฐประหาร นอกจากนี้
            รัฐวิสาหกิจประเภทสังคมและเทคโนโลยี
            และประเภทพลังงานมีทหารเป็นกรรมการหลังรัฐประหาร 2557
            แต่ก่อนรัฐประหารครั้งนั้น ไม่ปรากฎ
            ว่ามีการแต่งตั้งให้ดำรงตำแหน่งในประเภท ดังกล่าว
          </p>
          <div class="hint noto-thai">
            หมายเหตุ: การจัดประเภทนี้มีที่มาจากคณะกรรมการนโยบาย
            รัฐวิสาหกิจซึ่งมีหน้าที่กำกับดูแลรัฐวิสาหกิจทั้ง 56 แห่ง
          </div>
        </div>
      </div>
      <h4 class="top50">
        3. ‘การทาง-ประปาภูมิภาค-รถไฟฟ้า’<br />ขึ้นแท่น ‘ยอดทหารเพิ่มขึ้น สูงสุด’
      </h4>
      <p class="noto-thai top30">
        เมื่อจัดอันดับรัฐวิสาหกิจที่มีสัดส่วนทหารเพิ่มขึ้นสูงสุด 10 องค์กร
        ก็พบข้อมูลดังนี้
      </p>
      <div class="flex-column top30">
        <OrganCard
          v-for="data in organCardData"
          v-bind:key="data.name"
          :dataCard="data"
        />
        <div class="img-mobile">
          <img style="width: 280px" :src="organCardImg" />
        </div>
      </div>
      <p class="noto-thai top30">
        ที่น่าสนใจนั่นคือ ทุกรัฐวิสาหกิจที่ติดอันดับ
        ล้วนแต่เป็นรัฐวิสาหกิจที่ไม่มีการตั้งทหารเข้าเป็นกรรมการฯ
        ในชุดก่อนหน้าเลย (ซึ่งเป็นชุดสุดท้ายก่อนรัฐประหาร) และยังปรากฎอีกว่า
        รัฐวิสาหกิจในอันดับ 1, 2, 3 และ 10 มีทหารดำรงตำแหน่งประธานบอร์ด
        โดยได้รับการแต่งตั้งหลังเกิดรัฐประหาร
      </p>
      <h4 class="top50">
        4. 12 เก้าอี้ประธาน ทหารครอง
      </h4>
      <p class="noto-thai top30">
        เมื่อพูดถึงทหารดำรงตำแหน่งประธานบอร์ด ก็หลีกเลี่ยงไม่ได้ที่
        จะต้องเปิดเผยว่ามีถึง 12 องค์กรที่ทหารตบเท้าเข้าเป็น
        ประธานกรรมการรัฐวิสาหกิจ ในขณะที่ก่อนเกิดรัฐประหาร
        มีเพียงสถาบันการบินพลเรือนเท่านั้นที่มีทหาร เป็นประธานกรรมการฯ
        และรายชื่อรัฐวิสาหกิจทั้ง 12 แห่ง มีดังต่อไปนี้
      </p>
      <div class="flex-column top30">
        <ChairmanCard
          v-for="(data, index) in chairmanCardData"
          v-bind:key="index"
          :dataCard="data"
        />
        <div class="img-mobile">
          <img style="width: 280px" :scr="chairmanCardImg" />
        </div>
      </div>
      <h3 class="top50">
        และเมื่อถอยออกมาดูภาพรวม<br />ของรัฐประหารแต่ละครั้ง..
      </h3>
      <p class="noto-thai top30">
        แต่เมื่อถอยออกมาดูภาพรวมของการเปลี่ยนแปลงสัดส่วน
        ‘ทหารในบอร์ดรัฐวิสาหกิจ’ บวกกับพยานแวดล้อมด้วย ‘การเกิดรัฐประหาร’ แล้ว
        ข้อค้นพบเบื้องต้นปรากฎว่า
      </p>
      <h4>5. หลังรัฐประหารเกือบทุกครั้ง<br />มีสัดส่วนทหารเพิ่มขึ้น</h4>
      <div class="split-container top30">
        <div class="left">
          <img class="img-show" :src="chart3" />
        </div>
        <div class="right">
          <p class="noto-thai">
            8 ใน 11 ครั้งของรัฐประหารทั้งหมด
            มีสัดส่วนทหารที่เป็นกรรมการรัฐวิสาหกิจ
            เพิ่มขึ้นทุกครั้งหลังจากรัฐประหาร มีเพียง 2 ครั้งเท่านั้น
            ที่สัดส่วนทหารในบอร์ดกรรมการฯ ลดลงหลังรัฐประหาร ได้แก่ รัฐประหารปี
            2514 และ 2519
          </p>
        </div>
      </div>
      <h4 class="top90">
        6. ‘ขนส่ง-สื่อสาร-สถาบันการเงิน’<br />ทหารครองมากที่สุด
      </h4>
      <SwitchImg />
      <p class="top30 noto-thai">
        ไม่ว่าจะก่อนหรือหลังรัฐประหาร
        ในบรรดาทหารทั้งหมดที่ได้รับการแต่งตั้งให้เป็นกรรมการฯ
        รัฐวิสาหกิจประเภทขนส่ง การสื่อสาร และสถาบันการเงิน
        เป็นประเภทรัฐวิสาหกิจที่มีทหารเข้าเป็น กรรมการมากที่สุด
      </p>
      <h4 class="top50">
        7. ก่อน-หลังรัฐประหาร<br />ทหารครองเก้าอี้ประธานกรรมการ<br />ไปแล้ว 53
        ตัว
      </h4>
      <p class="top30 noto-thai">
        และจากการเก็บข้อมูลชุดกรรมการรัฐวิสาหกิจเฉพาะก่อนและหลังรัฐประหาร พบว่า
        คณะรัฐบาลไทยยังได้แต่งตั้งทหารเป็นประธานกรรมการรัฐวิสาหกิจต่างๆ
        ไปทั้งหมด 53 ครั้ง
        และมีการแต่งตั้งทหารให้ดำรงดังกล่าวมากที่สุดในช่วงหลังรัฐประหาร 2557 (12
        ครั้ง)
      </p>
      <h4 class="top50">
        8. บอร์ดรัฐวิสาหกิจ ‘ส่วนใหญ่จึงอ่อนไหว’ ต่อรัฐประหาร
      </h4>
      <p class="top30 noto-thai">
        ประการสุดท้าย
        บอร์ดรัฐวิสาหกิจส่วนใหญ่มักจะถูกเปลี่ยนแปลง/แต่งตั้งใหม่หลังเกิดรัฐประหาร
      </p>
      <br />
      <p class="noto-thai">
        โดยปกติ หากมีการเปลี่ยนรัฐบาล
        บอร์ดรัฐวิสาหกิจมักจะมีการเปลี่ยนแปลงอยู่แล้ว แต่สิ่งที่ชวนสังเกตคือ
        รัฐบาลทหาร (โดยเฉพาะรัฐบาลที่มาจากการทำรัฐประหาร)
        ก็ย่อมที่จะนำทหารเข้านั่งเป็นกรรมการฯ มากกว่ารัฐบาลพลเรือน
      </p>
      <br />
      <p class="noto-thai">
        ที่เป็นเช่นนี้ เพราะเมื่อนำสัดส่วนของทหารในบอร์ดฯ
        หลังรัฐประหารหักลบกับสัดส่วนดังกล่าวก่อนรัฐประหาร
        ก็ปรากฎว่ารัฐวิสาหกิจส่วนใหญ่ (35 องค์กร) ยังให้ผลต่างเป็นบวก
        นั่นหมายความว่า สัดส่วนทหารหลังรัฐประหารยังมากกว่าสัดส่วนฯ ก่อนรัฐประหาร
      </p>
      <div
        class="flourish-embed flourish-container"
        data-src="story/505141"
        data-url="https://flo.uri.sh/story/505141/embed"
      >
        <script src="https://public.flourish.studio/resources/embed.js"></script>
      </div>
      <p class="top30 noto-thai">
        และเมื่อลองนำผลต่างทั้งหมดมาจัดเรียงตามลำดับจากน้อยไปมาก
        ก็พบว่าบอร์ดรัฐวิสาหกิจส่วนใหญ่จึงอ่อนไหว’ ต่อรัฐประหาร
        (แต่ก็ยังมีบอร์ดรัฐวิสาหกิจถึง 10 แห่งที่ยังมั่นคง ไม่อ่อนไหว และ 6
        แห่งที่ทวนกระแสกลับ*)<br />
        รัฐวิสาหกิจ 6 แห่งดังกล่าว ได้แก่<br />
        • การท่องเที่ยวแห่งประเทศไทย<br />
        • การยางแห่งประเทศไทย<br />
        • ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร<br />
        • บริษัท อสมท จำกัด (มหาชน)<br />
        • องค์การตลาด<br />
        • องค์การส่งเสริมกิจการโคนมแห่งประเทศไทย
      </p>
      <h5 class="top30">
        เมื่อตัวเลขเดินทางมาเช่นนี้ นอกจากคำถามเรื่องธรรมาภิบาล<br />
        ความโปร่งใสในการบริหาร หรือการทับซ้อนของอำนาจและผลประโยชน์<br />
        ก็ย่อมมีเหตุให้สงสัยได้ว่า
        แท้ที่จริงแล้วที่ส่งทหารเข้าไปนั่งบอร์ดมากมายนั้น<br />
        คาดหวังแค่ให้ไปสังเกตการณ์เท่านั้นหรือ?
      </h5>
    </div>
    <div class="nav-container">
      <div class="nav-left">
        กลับหน้าแรก
        <nuxt-link to="/" style="text-decoration: none;">
          <div class="btn-con">
            <img :src="homeIcon" class="icon" />
            Home
          </div>
        </nuxt-link>
      </div>
      <div class="nav-right">
        ลองสำรวจด้วยตนเอง
        <nuxt-link to="/explore" style="text-decoration: none;">
          <div class="btn-con">
            <img :src="explorIcon" class="icon" />
            Explore
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import OrganCard from './organCard'
import ChairmanCard from './chairmanCard'
import SwitchImg from '~/components/summary/switchImg'
export default {
  components: {
    OrganCard,
    ChairmanCard,
    SwitchImg
  },
  data() {
    return {
      chart1: require('~/assets/images/chart-1.svg'),
      chart2: require('~/assets/images/chart-2.svg'),
      chart3: require('~/assets/images/chart-3.svg'),
      organCardImg: require('~/assets/images/organ-card.svg'),
      chairmanCardImg: require('~/assets/images/chair-man-card.svg'),
      explorIcon: require('~/assets/images/Component/Button/ic-explore.svg'),
      homeIcon: require('~/assets/images/Component/Button/ic-home.svg'),
      chairmanCardData: [
        {
          date: '1 กรกฎาคม 2557',
          name: 'พลเอก วิลาศ อรุณศรี',
          organName: 'การยาสูบแห่งประเทศไทย',
          profile: require('~/assets/images/profile-summary/wilas.png'),
          workDate: '78'
        },
        {
          date: '1 กรกฎาคม 2557',
          name: 'พลเรือเอก อภิวัฒน์ ศรีวรรธนะ',
          organName: 'การท่าเรือแห่งประเทศไทย',
          profile: require('~/assets/images/profile-summary/apiwat.png'),
          workDate: '1,095'
        },
        {
          date: '8 กรกฎาคม 2557',
          name: 'พลอากาศเอก สฤษดิ์พงษ์ โกมุทานนท์',
          organName: 'สถาบันการบินพลเรือน',
          profile: require('~/assets/images/profile-summary/salitpong.png'),
          workDate: '1,462'
        },
        {
          date: '21 กรกฎาคม 2557',
          name: 'พลเอก ปัฐมพงศ์ ประถมภัฏ',
          organName: 'การทางพิเศษแห่งประเทศไทย',
          profile: require('~/assets/images/profile-summary/patthamapong.png'),
          workDate: '51'
        },
        {
          date: '21 กรกฎาคม 2557',
          name: 'พลเอก ยอดยุทธ บุญญาธิการ',
          organName: 'การรถไฟฟ้าขนส่งมวลชนแห่ง ประเทศไทย',
          profile: require('~/assets/images/profile-summary/yodyuth.png'),
          workDate: '1,199'
        },
        {
          date: '22 กรกฎาคม 2557',
          name: 'พลเอก ภัทรินทร์ ลีลายุทธ',
          organName: 'องค์การสวนสัตว์',
          profile: require('~/assets/images/profile-summary/pattharin.png'),
          workDate: '873'
        },
        {
          date: '24 กรกฎาคม 2557',
          name: 'พลเอก จีระศักดิ์ ชมประสพ',
          organName: 'องค์การจัดการน้ำเสีย',
          profile: require('~/assets/images/profile-summary/jeerasak.png'),
          workDate: '68'
        },
        {
          date: '29 กรกฎาคม 2557',
          name: 'พลโท สุรเชษฐ์ ชัยวงศ์',
          organName: 'องค์การคลังสินค้า',
          profile: require('~/assets/images/profile-summary/surachate.png'),
          workDate: '36'
        },
        {
          date: '6 สิงหาคม 2557',
          name: 'พลเอก สุรพงษ์ สุวรรณอัตถ์',
          organName: 'บริษัท ทีโอที จำกัด (มหาชน)',
          profile: require('~/assets/images/profile-summary/surapong.png'),
          workDate: '1,735'
        },
        {
          date: '19 สิงหาคม 2557',
          name: 'พลโท ศุภกร สงวนชาติศรไกร',
          organName: 'องค์การเภสัชกรรม',
          profile: require('~/assets/images/profile-summary/supakorn.png'),
          workDate: '1,095'
        },
        {
          date: '25 สิงหาคม 2557',
          name: 'พลโท สาธิต พิธรัตน์',
          organName: 'บริษัท ไปรษณีย์ไทย จำกัด',
          profile: require('~/assets/images/profile-summary/satit.png'),
          workDate: '1,360'
        },
        {
          date: '17 มีนาคม 2558',
          name: 'พลเอก พิรุณ แผ้วพลสง',
          organName: 'การไฟฟ้านครหลวง',
          profile: require('~/assets/images/profile-summary/pirun.png'),
          workDate: '207'
        }
      ],
      organCardData: [
        {
          id: 1,
          name: 'การทางพิเศษแห่งประเทศไทย',
          beforeCoup: 5,
          afterCoupRed: 2,
          afterCoup: 2,
          change: '50.00'
        },
        {
          id: 2,
          name: 'การประปาส่วนภูมิภาค',
          beforeCoup: 8,
          afterCoupRed: 3,
          afterCoup: 4,
          change: '42.86'
        },
        {
          id: 3,
          name: 'การรถไฟฟ้าขนส่งมวลชนแห่งประเทศไทย',
          beforeCoup: 5,
          afterCoup: 2,
          afterCoupRed: 2,
          change: '40.00'
        },
        {
          id: 4,
          name: 'การกีฬาแห่งประเทศไทย',
          beforeCoup: 5,
          afterCoup: 3,
          afterCoupRed: 1,
          change: '33.33'
        },
        {
          id: 5,
          name: 'การเคหะแห่งชาติ',
          beforeCoup: 10,
          afterCoup: 2,
          afterCoupRed: 2,
          change: '30.00'
        },
        {
          id: 6,
          name: 'การไฟฟ้าส่วนภูมิภาค',
          beforeCoup: 5,
          afterCoup: 8,
          afterCoupRed: 3,
          change: '30.00'
        },
        {
          id: 7,
          name: 'การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย',
          beforeCoup: 11,
          afterCoup: 5,
          afterCoupRed: 2,
          change: '28.57'
        },
        {
          id: 8,
          name: 'การรถไฟแห่งประเทศไทย',
          beforeCoup: 7,
          afterCoup: 3,
          afterCoupRed: 1,
          change: '25.00'
        },
        {
          id: 9,
          name: 'บริษัท ขนส่ง จำกัด',
          beforeCoup: 3,
          afterCoup: 3,
          afterCoupRed: 1,
          change: '25.00'
        },
        {
          id: 10,
          name: 'องค์การจัดการน้ำเสีย',
          beforeCoup: 7,
          afterCoup: 3,
          afterCoupRed: 1,
          change: '25.00'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  padding: 3.8rem 23rem 12rem;
  @media #{$mq-tablet} {
    padding: 1.5rem 1.8rem 5.3rem;
  }
}

.img-mobile {
  display: none;
  @media #{$mq-mobile} {
    display: inline;
  }
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.top50 {
  margin-top: 5rem;
}

.top30 {
  margin-top: 3rem;
  @media #{$mq-tablet} {
    margin-top: 2.5rem;
  }
}

.top90 {
  margin-top: 9rem;
  @media #{$mq-tablet} {
    margin-top: 5rem;
  }
}

.left30 {
  margin-left: 3rem;
}

.split-container {
  display: flex;
  @media #{$mq-tablet} {
    flex-direction: column;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: #000;
}

h2 {
  line-height: 130%;
  @media #{$mq-tablet} {
    font-size: 2.4rem;
  }
}

h3,
h4 {
  line-height: 120%;
  @media #{$mq-tablet} {
    font-size: 1.8rem;
  }
}

h5 {
  @media #{$mq-tablet} {
    font-size: 1.4rem;
  }
}

p {
  @media #{$mq-tablet} {
    font-size: 1.4rem;
  }
}

.right {
  text-align: left;
  margin-left: 3rem;
  width: 40rem;
  @media #{$mq-tablet} {
    text-align: center;
    width: 28rem;
  }
}

.nav-container {
  width: 100vw;
  height: 32rem;
  display: flex;
}

.nav-left {
  width: 50%;
  background-color: #000;
  grid-area: nav-left;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  @media #{$mq-mobile} {
    font-size: 1.6rem;
  }
}

.nav-right {
  width: 50%;
  color: #fff;
  background-color: #384254;
  grid-area: nav-right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  @media #{$mq-mobile} {
    font-size: 1.6rem;
  }
}

.btn-con {
  background: #fff;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  padding: 1.7rem 1.5rem;
  font-size: 2.4rem;
  cursor: pointer;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  @media #{$mq-mobile} {
    font-size: 1.6rem;
    padding: 0.8rem;
  }
}

.icon {
  margin-right: 1rem;
}

.flourish-container {
  width: 820px;
  margin: 3rem 0;
  position: relative;
  @media #{$mq-tablet} {
    width: 600px;
  }
  @media #{$mq-mobile} {
    width: 28rem;
  }
}

.img-show {
  @media #{$mq-mobile} {
    width: 28rem;
  }
}
</style>
