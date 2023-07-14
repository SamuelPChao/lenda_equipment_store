<script>
import axios from "axios";
import AppNewsBox from "./AppNewsBox.vue";
export default {
  name: "AppNewsInfo",
  data() {
    return {
      allNews: [],
      outputNews: [],
      currentNews: 0,
    };
  },
  props: {
    newsPerPage: {
      type: Number,
      default: 6,
    },
  },
  methods: {
    async getAllNews() {
      try {
        const res = await axios.get(
          `https://lenda-server.onrender.com/api/v1/news`
        );
        if (res.status === 404) return false;
        this.allNews = res.data.data.doc;
        this.outputNews = this.allNews.slice(0, this.newsPerPage);
      } catch (err) {
        console.log(err);
      }
    },
    dateToLocaleString(date) {
      return new Date(date).toLocaleString("ch-tw", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
      });
    },
    navigateNews(id) {
      this.$router.push({
        name: "news-detail",
        params: { newsId: id },
      });
    },
    autoPlayNews() {
      const autoPlayInterval = setInterval(() => {
        if (this.currentNews === this.outputNews.length - 1) {
          this.currentNews = 0;
        } else {
          this.currentNews++;
        }
      }, 3000);
    },
  },
  beforeMount() {
    this.getAllNews();
    this.autoPlayNews();
  },
};
</script>

<template>
  <div class="appNewsInfo">
    <div class="newsBoxContainer">
      <div
        class="newsBox"
        :class="{
          newsBoxNow: currentNews === i,
          newsBoxPrior:
            currentNews - 1 === i ||
            (currentNews === 0 && i === outputNews.length - 1),
          newsBoxAfter:
            currentNews + 1 === i ||
            (currentNews === outputNews.length - 1 && i === 0),
        }"
        v-for="(news, i) in outputNews"
        :index="i"
        @click="navigateNews(news._id)"
      >
        <div class="newsImgBox">
          <img
            :src="news.newsBannerImg"
            :alt="news.newsTitle"
            class="newsImg"
          />
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appNewsInfo{

  .newsBoxContainer{
    width: 90%;
    display:flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    .newsBox{
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
          width: 30%;
          padding:1rem;
        }
        .newsIssueDateBox{
          position: absolute;
          width: 70%;
          bottom: 0;
          right:0;
          padding:1rem;
          text-align: right;
        }
      }
    }
  }
}
@media(max-width:1024px) and (min-width:768px){
  .appNewsInfo{
    .newsBoxContainer{
      width: 100%;
      justify-content: space-evenly;
      .newsBox{
        width: 40%;
        margin:0 0 1rem 0;
      }
    }
  }
}
@media(max-width:768px){
.appNewsInfo{
  overflow: hidden;
  .newsBoxContainer{
      width: 100%;
      flex-wrap: nowrap;
      height: auto;
      overflow: hidden;
      .newsBox{
        display: none;
        width: 90%;
        transition: all 1s ease;
        position: absolute;
      }
      .newsBoxNow{
        display:block;
        margin: 0 auto;
      }
      .newsBoxPrior{
        display:block;
        transform: translateX(-125vw);
      }
      .newsBoxAfter{
        display:block;
        transform: translateX(-125vw);
      }
    } 
}
}
</style>
