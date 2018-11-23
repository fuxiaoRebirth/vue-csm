<template>
    <div class="photo-info-container">
         <h3>{{info.title}}</h3>
        <div class="min-title">
            <div class="ctime">发表时间：{{info.add_time|dateFormat}}</div>
            <div class="click">点击：{{info.click}}次</div>
        </div>
    <hr>
    <div class="minMaxPhoto">
        <img class="preview-img" v-for="(item, index) in MinMaxPhoto" :src="'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1045168275,4237832889&fm=200&gp=0.jpg'" height="100" @click="$preview.open(index, MinMaxPhoto)" :key="item.src">
  </div>
    <div class="content" v-html="info.content">
    </div>
    <comment :id="id"></comment>
    </div>
</template>

<script>
    import comment from '../../components/comment/'
    export default {
        data(){
            return {
                id:this.$route.params.imgid,
                info:[],
                MinMaxPhoto:[]
            }
        },
        created(){
             this.getPhotoInfo()
             this.getMinMaxPhoto()
        },
        methods:{
            getPhotoInfo(){
                this.$http.get("api/getimageInfo/"+this.id).then(result => {
                    console.log(result)
                    if(result.body.status===0){
                        this.info = result.body.message[0]
                    }
                })
            },
            getMinMaxPhoto(){
                this.$http.get('api/getthumimages/'+this.id).then(result => {  
                    result.body.message.forEach((item,index)=>{
                        item.w=600
                        item.h=400
                    })
                    this.MinMaxPhoto = result.body.message
                })
            }
        },
        components:{
            comment
        }
    }

</script>


<style lang="less">


.photo-info-container{
     h3 {
    padding: 15px 0;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: red;
  }
  .min-title {
    display: flex;
    padding: 0 5px;
    justify-content: space-between;
    font-size: 13px;
    color: #226aff;
  }
  h1 {
    border-bottom: 2px solid #ccc;
    height: 45px;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    padding: 0 3px;
    box-sizing: border-box;
  }

  .content {
      font-size: 14px;
      line-height: 27px;
  }
}
   
</style>