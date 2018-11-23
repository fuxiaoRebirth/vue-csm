<template id="app">
 <div class="app-container">
   <!-- 头部 -->
    <mt-header fixed title="高级项目"></mt-header>
  <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		<transition>
				 <router-view></router-view>
		</transition>
</div>
</template>

<script >
  export default {
    data(){
			return {
				
			}
    },
    methods:{
			  
    }
  }
</script>

<style  lang="less">
	.app-container{
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
		//动画
		.v-enter{
				transform:translateX(100%);
				opacity: 0;
		}
		.v-leave-to{
			transform: translateX(-100%);
			position: absolute;
			opacity: 0;
		}
		.v-enter-active,
		.v-leave-active{
			transition:all 0.5s ease;
		}
		.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
	.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
	}
</style>
