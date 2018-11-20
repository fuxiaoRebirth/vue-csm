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
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
 </div>
</template>

<script>
import { Toast } from "mint-ui";

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
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
        } else {
          Toast("获取轮播图数据失败,请重试");
        }
      });
    }
  }
};
</script>

<style lang="less">
.home-container {
    // 轮播图
  .banner-container {
    height: 200px;
    a {
      width: 100%;
      img {
        height: 200px;
        width: 100%;
      }
    }
  }
    //网格
    .mui-grid-view{
        width: 100%;
        background-color: #fff;
        .mui-table-view-cell{
            border: none;
            background-color: #fff;
            img{
                width: 60px;
                height: 60px;
            }
            .mui-media-body{
                font-size: 13px;
            }
        }
    }
}
</style>