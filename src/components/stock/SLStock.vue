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
        getData:function(code){
            return new Promise(resolve=>{
            Axios.get("http://www.zx017.net/api/GetStockInfo",{
                params:{code:code}
            }).then(function(res){
                resolve(res.data.data);
            }).catch(function(error){
                reject(error);
            });
           });
        },
        async requestData(code){
           await this.getData(code).then(res=>{
                console.log("");
                this.items =res;
            });
        }
    },
    created(){
        var code = "600036";
         this.requestData(code);
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
