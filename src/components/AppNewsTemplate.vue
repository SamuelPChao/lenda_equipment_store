<script>
import axios from "axios";
import AppNewsBox from "./AppNewsBox.vue";
export default {
  name: "AppNewsTemplate",
  data() {
    return {
      allNews: [],
      newsData: [],
      outputNews: [],
    };
  },
  components: {
    AppNewsBox,
  },
  props: {
    newsPerPage: {
      type: Number,
      default: 6,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.newsData.length / this.newsPerPage);
    },
    queryString() {
      return this.$route.query.category
        ? this.$route.query.category
        : undefined;
    },
    currentPage() {
      return this.$route.query.page ? Number(this.$route.query.page) : 1;
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
  },
  beforeMount() {
    this.getAllNews();
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
  <div class="appNewsTemplate">
    <div class="newsBoxContainer">
      <app-news-box
        v-for="(news, i) in outputNews"
        :index="i"
        @click="navigateNews(news._id)"
        :news="news"
      ></app-news-box>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appNewsTemplate{

  .newsBoxContainer{
    width: 90%;
    margin: 0 auto;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
@media(max-width:1024px) and (min-width:768px){
  .appNewsTemplate{
    .newsBoxContainer{
      width: 100%;
    }
  }
}

@media(max-width:768px){
.appNewsTemplate{
  .newsBoxContainer{
      width: 100%;
      display: flex;
      height: auto;
    }
}
}
</style>
