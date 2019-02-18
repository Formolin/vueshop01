<template>
  <div class="newsinfo">
    <h3 class="title">{{newsinfo.title}}</h3>
    <hr>
    <div class="content">
        <p>{{id}}</p>
      <p>{{newsinfo.text}}</p>
      <img :src="newsinfo.image" alt>
      <p>{{newsinfo.text}}</p>
    </div>
  </div>
</template>
<script>
// 导入评论组件
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: []
    };
  },
  methods: {
    getNewsInfo() {
      this.$http
        .jsonp("getNewsInfo/:id")
        .then(res => {
          console.log(res.body);
          this.newsinfo = res.body.newsinfo;
        })
        .catch(res => {
          console.log(失败);
        });
    }
  },
  created() {
    this.getNewsInfo();
  },
  components:{
  }
};
</script>
<style lang="less" >
.newsinfo {
  padding: 0 5px;
  .title {
    font-size: 18px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 14px;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
