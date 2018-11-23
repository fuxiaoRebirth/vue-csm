<template>
    <div class="news-list-container">
        <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
            <router-link :to="'/home/newsInfo/'+item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <p class="title">{{item.title}}</p>
                    <span class="mui-ellipsis mui-pull-left">发表时间:{{item.add_time | dateFormat("YYYY-MM-DD")}}</span>
                    <span class="mui-ellipsis mui-pull-right">点击:{{item.click}}次</span>
                </div>
            </router-link>
        </li>
        </ul>
    </div>
</template>   
<script>
 export default {
     data(){
         return {
             newsList:[]
         }
     },
     created(){
         this.getNewsList()
     },
     methods:{
        getNewsList(){
             this.$http.get('api/getnewslist').then(result=>{
                 if(result.body.status===0){
                     this.newsList = result.body.message
                 }
             })
        }
     }
 }
</script>

<style lang="less">
.news-list-container{
    .mui-media{
        p{
            color: black;
            font-weight: bold;
        }
        span{
            color: #226aff;
            font-size: 12px;
        }
    }
}
</style>