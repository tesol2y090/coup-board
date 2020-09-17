<template>
  <div>
    <div class="container">
      <div v-if="showDefault">
        <div
          class="organ-container"
          v-for="[key, value] of Object.entries(this.cleanData)"
          v-bind:key="key"
        >
          <div class="big-label-container">
            <Organ35Label :cat="key" />
          </div>
          <div class="border">
            <div class="dash" />
          </div>
          <div class="content">
            <div
              class="organ-row-container"
              v-for="(data, index) in value"
              v-bind:key="index"
            >
              <div class="left">
                <Organ20Label :cat="key" />
                {{ data.org_name }}
              </div>
              <div class="right">
                <div class="right-dash" />
                <Pill
                  :percent="data.diff_57"
                  @click.native="handleShowModal(data.org_name, '57')"
                />
                <Pill
                  :percent="data.diff_49"
                  @click.native="handleShowModal(data.org_name, '49')"
                />
                <Pill
                  :percent="data.diff_34"
                  @click.native="handleShowModal(data.org_name, '34')"
                />
                <Pill
                  :percent="data.diff_19"
                  @click.native="handleShowModal(data.org_name, '19')"
                />
                <Pill
                  :percent="data.diff_14"
                  @click.native="handleShowModal(data.org_name, '14')"
                />
                <Pill
                  :percent="data.diff_20"
                  @click.native="handleShowModal(data.org_name, '20')"
                />
                <Pill
                  :percent="data.diff_01"
                  @click.native="handleShowModal(data.org_name, '01')"
                />
                <Pill
                  :percent="data.diff_00"
                  @click.native="handleShowModal(data.org_name, '00')"
                />
                <Pill
                  :percent="data.diff_90"
                  @click.native="handleShowModal(data.org_name, '90')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          class="organ-row-container"
          v-for="(data, index) in data"
          v-bind:key="`${index} + ${data.org_name}`"
        >
          <div class="left">
            <Organ20Label :cat="data.cat" />
            {{ data.org_name }}
          </div>
          <div class="right">
            <div class="right-dash" />
            <Pill
              :percent="data.diff_57"
              @click.native="handleShowModal(data.org_name, '57')"
            />
            <Pill
              :percent="data.diff_49"
              @click.native="handleShowModal(data.org_name, '49')"
            />
            <Pill
              :percent="data.diff_34"
              @click.native="handleShowModal(data.org_name, '34')"
            />
            <Pill
              :percent="data.diff_19"
              @click.native="handleShowModal(data.org_name, '19')"
            />
            <Pill
              :percent="data.diff_14"
              @click.native="handleShowModal(data.org_name, '14')"
            />
            <Pill
              :percent="data.diff_20"
              @click.native="handleShowModal(data.org_name, '20')"
            />
            <Pill
              :percent="data.diff_01"
              @click.native="handleShowModal(data.org_name, '01')"
            />
            <Pill
              :percent="data.diff_00"
              @click.native="handleShowModal(data.org_name, '00')"
            />
            <Pill
              :percent="data.diff_90"
              @click.native="handleShowModal(data.org_name, '90')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import data from '~/assets/data/elect-coup-data.json'
import Organ35Label from '~/components/explore/element/bigOrganLabel'
import Organ20Label from '~/components/explore/element/smallOrganLabel'
import Pill from '~/components/explore/element/pill'
import Modal from '~/components/explore/element/modal'
export default {
  components: {
    Organ35Label,
    Organ20Label,
    Pill,
    Modal
  },
  props: ['setModalDetailData', 'handleModalDetail'],
  data() {
    return {
      data,
      cleanData: {},
      modal: false,
      modalData: {},
      showDefault: true
    }
  },
  beforeMount() {
    this.cleanData = data.reduce(function(r, a) {
      r[a.cat] = r[a.cat] || []
      r[a.cat].push(a)
      return r
    }, {})
  },
  computed: {
    ...mapState('store', ['selectedOption'])
  },
  watch: {
    selectedOption() {
      this.showDefault = this.selectedOption === 'เรียงตามประเภท'
      switch (this.selectedOption) {
        case 'เรียงตามอักษร (ก-ฮ)':
          this.data = this.data.sort(this.compareValues('org_name'))
          break

        case 'เรียงตามอักษร (ฮ-ก)':
          this.data = this.data.sort(this.compareValues('org_name', 'desc'))
          break

        case 'เรียงตามปีทีก่อตั้ง (เก่าสุด)':
          this.data = this.data.sort(this.compareValues('y'))
          break

        case 'เรียงตามปีทีก่อตั้ง (ใหม่สุด)':
          this.data = this.data.sort(this.compareValues('y', 'desc'))
          break

        default:
          break
      }
    }
  },
  methods: {
    handleShowModal(name, id) {
      this.handleModalDetail()
      const coupYear = id == '90' ? '2490' : `25${id}`
      const top = event.pageY + 30
      const currentOrgan = this.data.find((organ) => organ.org_name === name)
      const { org_name: orgName, y: year, logo, cat, minis } = currentOrgan
      const b4Mili = currentOrgan[`${id}_b4_mili`]
      const b4Total = currentOrgan[`${id}_b4_total`]
      const aftMili = currentOrgan[`${id}_aft_mili`]
      const aftTotal = currentOrgan[`${id}_aft_total`]
      const percentChange =
        (aftMili / aftTotal) * 100 - (b4Mili / b4Total) * 100
      const b4Percent = (b4Mili / b4Total) * 100
      const aftPercent = (aftMili / aftTotal) * 100
      this.setModalDetailData({
        coupYear,
        orgName,
        year,
        logo,
        cat,
        minis,
        b4Mili,
        b4Total: b4Total - b4Mili,
        aftMili,
        aftTotal: aftTotal - aftMili,
        b4Percent: b4Percent.toFixed(2),
        aftPercent: aftPercent.toFixed(2),
        percentChange: percentChange.toFixed(2),
        top
      })
    },
    handleOpenModal() {
      this.modal = !this.modal
    },
    compareValues(key, order = 'asc') {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0
        }
        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]
        let comparison = 0
        if (varA > varB) {
          comparison = 1
        } else if (varA < varB) {
          comparison = -1
        }
        return order === 'desc' ? comparison * -1 : comparison
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  padding: 3.5rem 8.3rem 5.8rem 4.5rem;
  text-align: center;
  position: relative;
  @media #{$mq-tablet} {
    padding-left: 1rem;
    padding-right: 1.5rem;
  }
  @media #{$mq-mobile} {
    padding-right: 0.8rem;
    padding-top: 3.2rem;
  }
}

.organ-container {
  display: flex;
  margin-bottom: 1.6rem;
  @media #{$mq-mobile} {
    margin-bottom: 1.3rem;
  }
}

.big-label-container {
  display: flex;
  align-items: center;
  @media #{$mq-tablet} {
    display: none;
  }
}

.content {
  margin-left: 1.2rem;
  width: 100%;
  @media #{$mq-mobile} {
    margin-left: 0rem;
  }
}

.border {
  margin: 1rem 0;
  border: 1px solid #384254;
  border-radius: 3px 0 0 3px;
  width: 1rem;
  border-right: none;
  position: relative;
  @media #{$mq-tablet} {
    display: none;
  }
}

.dash {
  width: 1rem;
  height: 0.1rem;
  background: #384254;
  position: absolute;
  top: 50%;
  left: -1rem;
  transform: translateY(-50%);
}

.left {
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 1.6rem;
  @media #{$mq-mobile} {
    font-size: 0.8rem;
    text-align: left;
  }
}

.organ-row-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.6rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media #{$mq-mobile} {
    margin-bottom: 1.3rem;
  }
}

.right {
  display: flex;
  width: auto;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
}

.right-dash {
  width: 100%;
  height: 0.2rem;
  border-top: 2px dashed #384254;
  position: absolute;
}

h2,
h5 {
  color: #000;
}
</style>
