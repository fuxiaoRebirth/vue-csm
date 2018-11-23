<template>
    <div class="comment-container">
        <h1>发表评论</h1>
        <textarea placeholder="最多吐槽120字" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item,i) in commentList" :key="i">
                <div class="comment-title">    
                    第{{i+1}}楼  用户：{{item.user_name}}  发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="comment-body">
                    {{item.content === 'undefined'?"用户比较懒,什么也没输出":item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" plain size="large" @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      commentList: [],
      pageIndex: 1,
      msg:""
    }
  },
  props: ["id"],
  created() {
    this.getCommentList();
  },
  methods: {
    getCommentList() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
            if(result.body.status===0){
                this.commentList = this.commentList.concat(result.body.message);
            }else{
                Toast('获取数据列表失败')
            }
          
        })
    },
    loadMore() {
      // 加载更多
      this.pageIndex++;
      this.getCommentList()
    },
    addComment() {
        if(this.msg.trim().length===0){
            return Toast('请输入内容')
        }
      this.$http.post("api/postcomment/"+this.id,{content:this.msg}).then(result => {
        console.log(result)
          if(result.body.status===0){
              let addCom = {user_name:"匿名用户",add_ctime:Date.now(),content:this.msg.trim()}
              this.commentList.unshift(addCom)
              this.msg =""
          }
      })
    }
  }
}
</script>

<style lang="less">
.comment-container {
  padding: 5px;
  textarea {
    height: 85px;
    padding: 10px;
    margin: 10px 3px 5px 3px;
    box-sizing: border-box;
    border-radius: 3px;
    outline: none;
  }
  .comment-list {
    width: 100%;
    margin-top: 5px;
    .comment-title {
      width: 100%;
      background-color: #e7e5e5;
      font-size: 13px;
      height: 30px;
      line-height: 30px;
    }
    .comment-body {
      height: 35px;
      line-height: 35px;
      text-indent: 2em;
      font-size: 12px;
    }
  }
}
</style>