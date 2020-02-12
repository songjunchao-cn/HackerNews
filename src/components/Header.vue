<template>
  <header>
    <div class="app-center">
      <nav class="nav">
        <span>
          <img :src="$imgUrls.homeImg.logo" alt />
        </span>
        <a
          :class="{'nav-index': item.name === tabName}"
          v-for="item in nav"
          :key="item.herf"
          @click="changeTab(item.herf)"
        >{{item.text}}</a>
      </nav>
      <div class="times">
        <div class="container">
          <div class="sunny"></div>
        </div>
        <!-- <a target="_blank" href="https://github.com/songjunchao-cn">
          <img :src="$imgUrls.homeImg.git" alt />
        </a> -->
        <time>{{formatTime}}</time>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'top-header',
  data () {
    return {
      nav: [
        { indent: true, name: 'home', text: 'HOME', herf: '/home' },
        { indent: false, name: 'blog', text: 'BLOG', herf: '/blog' },
        { indent: false, name: 'work', text: 'WORK', herf: '/work' },
        { indent: false, name: 'about', text: 'ABOUT', herf: 'about' }
      ],
      time: new Date()
    }
  },
  created () { },
  beforeMount () { },
  mounted () {
    setInterval(this.getTimeNow, 1000)
  },
  computed: {
    formatTime () {
      return `${this.pollyTime(this.time.getHours())}:${this.pollyTime(
        this.time.getMinutes()
      )}:${this.pollyTime(this.time.getSeconds())}`
    },
    tabName () {
      return this.$route.name
    }
  },
  methods: {
    getTimeNow () {
      this.time = new Date()
    },
    pollyTime (t) {
      let _t = +t < 10 ? `0${t}` : t
      return _t
    },
    changeTab (herf) {
      this.$router.push(herf)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
