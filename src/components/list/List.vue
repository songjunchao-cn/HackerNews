<template>
  <div>
    <article class="wrap" v-for="(item, index) in $attrs.listData" :key="item.id">
      <div class="flex-content">
        <div class="left">
          <div class="score-img">
            <img :src="$imgUrls.images.up" alt />
          </div>
          <div class="score">{{item.score}}</div>
        </div>
        <div class="middle">
          <div class="title">
            {{item.title}}
            <span class="time">{{$dateFormat(item.time,'yyyy:MM:dd hh:mm:ss') }}</span>
          </div>
          <div class="url">{{item.url}}</div>
          <div class="comment">
            <!-- <div class="comment-wrap"> -->
            <div>
              <img :src="$imgUrls.images.user" alt />
              <span class="user">{{item.by}}</span>
            </div>
            <div>
              <img :src="$imgUrls.images.msg" alt />
              <span class="msg">{{item.descendants}}</span>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div class="line" v-if="$attrs.listData.length!==index + 1"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
    };
  },
  mounted () {
    console.log(this.$attrs)
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
@import "./list.scss";
</style>
