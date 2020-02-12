<template>
  <header>
    <nav class="nav">
        <span>
          <img :src="$imgUrls.Images.logo" alt />
        </span>
        <a
          :class="{'nav-index': item.name === tabName}"
          v-for="item in nav"
          :key="item.herf"
          @click="changeTab(item.herf)"
        >{{item.text}}</a>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'top-header',
  data () {
    return {
      nav: [
        {  name: 'news', text: 'Top', herf: '/top' },
        {  name: 'blog', text: 'News', herf: '/news' },
      ],
    }
  },
  created () { },
  beforeMount () { },
  mounted () {
  },
  methods: {
    changeTab (herf) {
      this.$router.push(herf)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
