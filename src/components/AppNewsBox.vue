<script>
export default {
  name: "AppNewsBox",
  props: {
    news: {
      type: Object,
    },
  },
  methods: {
    dateToLocaleString(date) {
      return new Date(date).toLocaleString("ch-tw", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
      });
    },
  },
};
</script>

<template>
  <div class="appNewsBox">
    <div class="newsImgBox">
      <img :src="news.newsBannerImg" :alt="news.newsTitle" class="newsImg" />
    </div>
    <div class="newsTitleBox">
      <h3>{{ news.newsTitle }}</h3>
    </div>
    <div class="newsSummaryBox">
      <p>
        {{ news.newsSummary }}
      </p>
    </div>
    <div class="newsSortBox">
      <div class="newsCategoryBox">
        {{ news.newsCategory }}
      </div>
      <div class="newsIssueDateBox">
        {{ dateToLocaleString(news.newsIssueDate) }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appNewsBox{
  position: relative;
  width: 30%;
  border: 0.05rem solid $not-that-grey;
  border-radius: 0.5rem;
  margin:0 1rem 1rem 1rem;
  box-shadow: 0 0 1rem 0.1rem $not-that-black-shadow;
  cursor: pointer;

  .newsImgBox{
    width: 100%;
    .newsImg{
      width: 100%;
      height: 15rem;
      border: 0.1rem solid $not-that-grey;
      border-radius: 0.5rem;
    }
  }
  .newsTitleBox{
    width: 100%;
    h3{
      text-align: center;
    }
  }
  .newsSummaryBox{
    padding:1rem;
  }
  .newsSortBox{
    padding:2rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .newsCategoryBox{
      position: absolute;
      bottom: 0;
      left:0;
      width: 35%;
      padding:1rem;
    }
    .newsIssueDateBox{
      position: absolute;
      width: 65%;
      bottom: 0;
      right:0;
      padding:1rem;
      text-align: right;
    }
  }
}
@media(max-width:768px){
  .appNewsBox{
    width: 100%;
  }
}
</style>
