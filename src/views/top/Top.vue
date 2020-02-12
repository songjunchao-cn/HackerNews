<template>
  <div class="top">
    <List/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/list/List.vue'

export default {
  name: 'Top',
  components: {
    List
  },
  created(){
    this.getList()
  },
  mounted(){
  },
  methods:{
   async getList(){
      let params = {query:"{stories(type: new) {id title time url by score descendants}}"}
      let { data } = await this.$api.getListApi(params)
      this.listData = data.data.stories
    }
  }
}
</script>
