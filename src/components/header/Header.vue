<template>
  <header>
    <div class="app-center">
      <nav class="nav">
        <span>
          <img :src="$imgUrls.images.logo" alt />
        </span>
        <a
          :class="{'nav-index': item.text === tabName}"
          v-for="item in nav"
          :key="item.herf"
          @click="changeTab(item.herf)"
        >{{item.text}}</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'top-header',
  data () {
    return {
      nav: [
        {  text: 'Top', herf: '/top' },
        {  text: 'New', herf: '/new' },
      ]
    }
  },
  created () { 
  },
  beforeMount () { },
  mounted () {
  },
  computed: {
    tabName () {
      return this.$route.name
    }
  },
  methods: {
    changeTab (herf) {
      this.$router.push(herf)
      console.log(this.$route.name)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
