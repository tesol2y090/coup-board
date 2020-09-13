<template>
  <div class="container plastel">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Content from '~/components/summary/content'

export default {
  components: {
    Navbar,
    Content
  }
}
</script>

<style lang="scss" scoped></style>
