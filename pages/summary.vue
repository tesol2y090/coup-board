<template>
  <div class="container plastel">
    <ModalNavbar
      v-if="showModalNavbar"
      :handleModalNavbar="handleModalNavbar"
    />
    <Navbar :path="'Summary'" :handleModalNavbar="handleModalNavbar" />
    <Content />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Content from '~/components/summary/content'
import ModalNavbar from '~/components/modalNavbar'

export default {
  components: {
    Navbar,
    Content
  },
  data() {
    return {
      showModalNavbar: false
    }
  },
  methods: {
    handleModalNavbar() {
      this.showModalNavbar = !this.showModalNavbar
    }
  }
}
</script>

<style lang="scss" scoped></style>
