<template>
  <div>
    <h4>发表评论{{id}}</h4>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="box" v-for="(item ,i) in comm" :key="item.number">
      <div class="head">第{{i+1}}楼&nbsp;&nbsp;用户:{{item.name}}&nbsp;&nbsp;发表时间:{{item.time}}</div>
      <div class="cont">{{item.text === 'undefined'?'此用户很懒，什么也没留下':item.text}}</div>
    </div>

    <mt-button plain size="large" type="danger" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, //默认第一页数据\
      comm: [],
      msg: "" //评论输入的内容
    };
  },
  methods: {
    getComments() {
      this.$http
        .jsonp(
          "getComments/:id/:pageIndex?id=" +
            this.id +
            "&pageIndex=" +
            this.pageIndex
        )
        .then(res => {
          console.log(res.body);
          //   this.comm = res.body.comments;
          this.comm = this.comm.concat(res.body.comments);
        })
        .catch(res => {
          console.log(res);
          Toast("请求失败");
        });
    },
    getMore() {
      this.getComments();
    },
    postComment() {
        if(this.msg.trim().length == 0){
            return Toast("评论内容不能为空")
        }
      this.$http
        .jsonp("postComment")
        .then(res => {
          console.log(res.body);
          var obj = {
              name:res.body.postComment.name,
              time:res.body.postComment.time,
              text:this.msg
          }
          this.comm.unshift(obj)
          this.msg = ''
        })
        .catch(res => {
          console.log(res);
          Toast("请求失败");
        });
    }
  },
  props: ["id"],
  created() {
    this.getComments();
  }
};
</script>
<style lang="less" scoped>
.box {
  margin-top: 5px;
  .head {
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    background-color: lightblue;
  }
  .cont {
    height: 40px;
    line-height: 40px;
  }
}
</style>
