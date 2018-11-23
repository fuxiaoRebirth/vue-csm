<template>
<div class="photo-list-container">
    <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a  @click="getCate(item.id)" v-for="item in photoList" :key="item.id"  :class="{'mui-control-item':'true', 'mui-active':item.id==0}" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                    {{item.title}}
                </a>
            </div>
        </div>
    </div>
       <ul class="photo-container">
            <router-link :to="'/home/photoInfo/'+item.id"  v-for="item in cate" :key="item.id" tag="li">
                 <img v-lazy="item.img_url">
                 <div class="photo-des">
                    <h1>{{item.title}}</h1>
                    <div class="photo-content">
                      {{item.zhaiyao}}
                    </div>
               </div>
            </router-link>
      </ul>
    </div>
  
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      photoList: [],
      cate: []
    };
  },

  created() {
    this.getPhotoList();
    this.getCate(0) 
  },
  methods: {
    getPhotoList() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          this.photoList = result.body.message;
          this.photoList.unshift({ title: "全部", id: 0 });
        } else {
          Toast("获取图片列表失败");
        }
      });
    },
    getCate(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status === 0) {
          this.cate = result.body.message;
        }
      });
    }
  },
   mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
}
</script>

<style lang="less">
.photo-list-container {
  padding: 0 7px;
  * {
  touch-action: pan-y;
}
  img[lazy=loading] {
    width: 100%;
    height: 300px;
    margin: auto;
    background-color: red;
  };
  img{
      width: 100%;
      height: 300px;
      background-color: yellow;
  }
  .photo-container{
   
    li{
         position: relative;
         margin-bottom: 9px;
         box-shadow: 0 0 9px red;
    }
    .photo-des{
  background-color: rgba(233,0,0,.5);
  color: #fff;
  max-height: 85px;
  position: absolute;
  bottom:0px;
  
  h1{
    font-size: 14px;
    font-weight: bold;
    padding: 5px 0;
    text-align: left;
  }
  .photo-content{
    font-size: 14px;
    text-align: left;
  }
}
  }

}

</style>