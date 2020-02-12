<template>
  <div class="new">
    <List :listData = 'listData'/>
    <Paging v-show="this.listData.length>0" :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange" />
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/list/List.vue'
import Paging from '@/components/paging/Paging.vue'

export default {
  name: 'New',
  components: {
    List,
    Paging
  },
  data(){
    return{
      listData:[],
      pageSize: 10, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 1, //总记录数
    }
  },
  created(){
   this.getList()
  },
  mounted(){
  },
  methods:{
   async getList () {
      let args = { query: `{stories(type: new) {id title time url by score descendants}}` }
      let res = await this.$api.getListApi(args)
      this.count = res.data.data.stories.length
      let params = { query: `{stories(type: new, first: 10, skip: ${this.currentPage} ) {id title time url by score descendants}}` }
      let { data } = await this.$api.getListApi(params)
      this.listData = data.data.stories
    },
    pageChange (page) {
      this.currentPage = page
      this.getList()
    }
  }
}
</script>
