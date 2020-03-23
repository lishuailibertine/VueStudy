<template>
    <div>
      <ul v-if="true">
      <li v-for="item in items" :key="item.Code">
          {{item.Name+'  当前价格为:  '+item.Price}}
      </li>
     </ul>
     <!-- <button @click="handle()" v-show="true" type="text"></button> -->
    </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import Axios from "axios";
export default {
    name: 'SLStock',
    data(){
        return {items:[]}
    },
    methods:{
        handle:function(){
            alert("dsd");
        },
        getData:function(data){
             this.items =data;
        }
    },
    created(){
        const that = this;
        Axios.get("http://www.zx017.net/api/GetStockInfo",{
            params:{
            code:'600036'
        }
        }).then(function(res){
            that.getData(res.data.data);

      }).catch(function (error) {
        console.log(error);
    });
    }
}
</script>
<style scoped>
button {
  font-weight: normal;
}
button,li {
  color: #42b983;
}
</style>
