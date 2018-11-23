<template>
<div class="news-list-info">
    <h3>{{newsInfo.title}}</h3>
    <div class="min-title">
        <div class="ctime">发表时间：{{newsInfo.add_time}}</div>
        <div class="click">点击：{{newsInfo.click}}次</div>
    </div>
    <hr>
    <div class="content" v-html="newsInfo.content">
    </div>
    <comment :id="id"></comment>
</div>
</template>

<script>
import comment from '../../components/comment/'

export default {
  data() {
    return {
        id:this.$route.params.id,
        newsInfo:{}
    }
  },
  created() {
     this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/"+this.id).then(result => {

        this.newsInfo = result.body.message[0]
      });
    }
  },
 components:{
     comment
 }
};
</script>

<style lang="less">
.news-list-info {
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
    
    width: 100%;
    img{
        width: 100%;
    }
  }
}
</style>