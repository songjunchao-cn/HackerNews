<template>
  <div id="root" class="root">
    <Header @changeTab="changeTab" />
    <div class="tip"><span>{{tipValue}}</span></div>
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
      tipValue: 'top'
    }
  },
  methods: {
    changeTab (name) {
      this.tipValue = name
    }
  }
}
</script>

<style lang="scss" scoped>
.tip {
  height: 58px;
  background: #ffffff;
  width: calc(100% - 9.4%);
  margin: 24px auto 1px;
  border-radius: 5px 5px 0 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 58px;
  color: #222222;
  text-align: left;
  span{
    padding-left: 32px;
  }
}
</style>
