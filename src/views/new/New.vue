<template>
  <div class="new">
    <List :listData = 'listData'/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/list/List.vue'

export default {
  name: 'New',
  components: {
    List
  },
  data(){
    return{
      listData:[]
    }
  },
  created(){
   this.getList()
  },
  mounted(){
  },
  methods:{
    async getList(){
      let params = {query:"{stories(type: new, first: 10) {id title time url by score descendants}}"}
      let { data } = await this.$api.getListApi(params)
      this.listData = data.data.stories
    }
  }
}
</script>
