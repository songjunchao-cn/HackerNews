<template>
  <ul class="paging">
    <!-- prev -->
    <li
      :class="['paging-item', 'paging-item-prev', {'paging-item-disabled' : index === 1}]"
      @click="prev"
    >
      <img :src="$imgUrls.images.left" alt />
    </li>
    <li :class="['paging-item', 'paging-item-more']" v-if="showPrevMore">
      <span></span>
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="['paging-item', {'paging-item-current' : index == pager}]"
      @click="go(pager)"
    >{{ pager }}</li>
    <li :class="['paging-item', 'paging-item-more']" v-if="showNextMore">
      <span></span>
    </li>
    <!-- next -->
    <li
      :class="['paging-item', 'paging-item-next', {'paging-item-disabled' : index === pages}]"
      @click="next"
    >
      <img :src="$imgUrls.images.right" alt />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Paging',
  props: {
    perPages: {
      type: Number,
      default: 5
    },
    //当前页码
    pageIndex: {
      type: Number,
      default: 1
    },
    //每页显示条数
    pageSize: {
      type: Number,
      default: 10
    },
    //总记录数
    total: {
      type: Number,
      default: 1
    },

  },
  data () {
    return {
      index: this.pageIndex, //当前页码
      limit: this.pageSize, //每页显示条数
      size: this.total || 1, //总记录数
      showPrevMore: false,
      showNextMore: false
    }
  },
  computed: {
    //计算总页码
    pages () {
      return Math.ceil(this.size / this.limit)
    },
    pagers () {
      const array = []
      const perPages = this.perPages
      const pageCount = this.pages
      let current = this.index
      const _offset = (perPages - 1) / 2
      const offset = {
        start: current - _offset,
        end: current + _offset
      }
      //-1, 3
      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start)
        offset.start = 1
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount)
        offset.end = pageCount
      }
      if (offset.start < 1) offset.start = 1
      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i)
      }

      return array
    }
  },
  methods: {
    prev () {
      if (this.index > 1) {
        this.go(this.index - 1)
      }
    },
    next () {
      if (this.index < this.pages) {
        this.go(this.index + 1)
      }
    },
    first () {
      if (this.index !== 1) {
        this.go(1)
      }
    },
    last () {
      if (this.index != this.pages) {
        this.go(this.pages)
      }
    },
    go (page) {
      if (this.index !== page) {
        this.index = page
        this.$emit('change', this.index)
      }
    }
  },
  watch: {
    pageIndex (val) {
      this.index = val || 1
    },
    pageSize (val) {
      this.limit = val || 10
    },
    total (val) {
      this.size = val || 1
    },
    pagers () {
      const perPages = this.perPages
      const pageCount = this.pages
      let current = this.index
      const _offset = (perPages - 1) / 2
      const offset = {
        start: current - _offset,
        end: current + _offset
      }
      this.showPrevMore = (offset.start > 1)
      this.showNextMore = (offset.end < pageCount)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./paging.scss";
</style>
