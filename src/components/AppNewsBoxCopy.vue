<script>
import axios from "axios";
export default {
  name: "AppNewsBoxCopy",
  data() {
    return {
      allNews: [],
      newsData: [],
      outputNews: [],
      currentNews: 0,
    };
  },
  props: {
    queryString: {
      type: String,
      default: undefined,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    newsPerPage: {
      type: Number,
      default: 6,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.newsData.length / this.newsPerPage);
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
        if (this.queryString) return this.filterNews(this.queryString);
        this.newsData = this.allNews;
        this.dividePage();
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
    filterNews(queryString) {
      if (!queryString) {
        this.newsData = this.allNews;
        this.dividePage();
        return;
      }
      this.newsData = this.allNews.filter(
        (news) => news.newsQueryCategory === queryString
      );
      this.dividePage();
    },
    dividePage() {
      const startIndex = (this.currentPage - 1) * this.newsPerPage;
      const endIndex = startIndex + this.newsPerPage;
      this.outputNews = this.newsData.slice(startIndex, endIndex);
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
  watch: {
    queryString: {
      immediate: true,
      handler(newValue, oldValue) {
        this.filterNews(newValue);
      },
    },
    currentPage: {
      handler(newValue, oldValue) {
        this.dividePage();
      },
    },
    totalPages: {
      handler(newValue, oldValue) {
        this.$emit("totalPagesUpdate", newValue);
      },
    },
  },
};
</script>

<template>
  <div class="appNewsBox">
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
          <img :src="news.newsBannerImg" alt="Zeiss CP3" class="newsImg" />
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
.appNewsBox{

  .newsBoxContainer{
    width: 90%;
    margin: 0 auto;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
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
          width: 50%;
          padding:1rem;
        }
        .newsIssueDateBox{
          position: absolute;
          width: 50%;
          bottom: 0;
          right:0;
          padding:1rem;
          text-align: right;
        }
      }
    }
  }
}

@media(max-width:768px){
.appNewsBox{
  overflow: hidden;
  .newsBoxContainer{
      width: 100%;
      display: flex;
      height: auto;
      overflow: hidden;
      flex-wrap: nowrap;
      justify-content: center;
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
