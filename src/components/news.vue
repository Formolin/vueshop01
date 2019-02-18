<template>
  <div>
    
    <!-- 资讯 -->
    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        v-for="item in newsList"
        :key="item.id"
      >
        <router-link :to="'/news/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.image">
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">{{item.text}}</p>
            <p class="pub">
              <span>发表时间：{{item.time}}</span>
              <span>点击次数：{{item.number}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    getNews() {
      this.$http
        .jsonp("getNewsList")
        .then(res => {
          //   console.log(res.body.news)
          this.newsList = res.body.news;
        })
        .catch(res => {
          Toast("请求失败");
        });
    },
  },
  created() {
    this.getNews(); //进入页面就请求数据
  }
};
</script>

<style lang="less">
.mui-table-view {
  .pub {
    display: flex;
    justify-content: space-between;
    span {
      color: blue;
      font-size: 12px;
    }
  }
}
</style>