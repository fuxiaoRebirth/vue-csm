<template>
<div class="home-container">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="banner-container">
        <mt-swipe-item v-for="item in bannerList" :key="item.img">
            <a :href="item.url">
                 <img :src="item.img" alt="">
            </a>
        </mt-swipe-item>
    </mt-swipe>

    <!-- 网格导航 -->

 </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getbannerData();
  },
  methods: {
    getbannerData() {
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
          if(result.body.status===0){
              this.bannerList = result.body.message;
          }else{
              Toast('获取轮播图数据失败,请重试');
          }   
      });
    }
  }
};
</script>

<style lang="less">
.home-container {
  .banner-container {
    height: 200px;
    a{
        width: 100%;
        img{
            height: 200px;
            width: 100%;
        }
    }
  }
}
</style>