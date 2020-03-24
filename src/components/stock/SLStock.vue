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
        return {code:'',url:"",items:[],timer:''}
    },
    methods:{
        handle:function(){
            alert("dsd");
        },
        getData:function(code){
            const that = this;
            return new Promise(resolve=>{
            Axios.get(that.url,{
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
                console.log(res[0].Price);
                this.items =res;
            });
        }
    },
    created(){
        this.code = "600036";
        const that = this;
        this.url = "http://www.zx017.net/api/GetStockInfo";
        this.timer = setInterval(function(){
            that.requestData(that.code);
        }, 1000);
    },
    mounted(){
        console.log("html加载完成后执行。执行顺序：子组件-父组件");
    },
    beforeDestory(){
       clearInterval(this.timer);
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
