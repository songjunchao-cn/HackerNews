<template>
  <div id="root" class="root">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header'

export default {
  name: 'root',
  components: {
    Header,
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
