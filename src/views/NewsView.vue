<script>
import AppNewsBox from "../components/AppNewsBox.vue";
import AppNewsTemplate from "../components/AppNewsTemplate.vue";
import AppNewsQueryPanel from "../components/AppNewsQueryPanel.vue";
export default {
  name: "NewsView",
  data() {
    return {
      newsBoxTotalPages: undefined,
    };
  },
  computed: {
    pagesSelector() {
      return Array.from(
        { length: this.newsBoxTotalPages },
        (_, index) => index + 1
      );
    },
  },
  components: { AppNewsTemplate, AppNewsBox, AppNewsQueryPanel },
  methods: {
    newsCategorySwitch(queryString) {
      this.$router.push({
        query: {
          category: queryString,
        },
      });
      console.log(this.$route);
    },
    updateTotalPage(value) {
      this.newsBoxTotalPages = value;
    },
  },
};
</script>
<template>
  <div class="newsView">
    <section class="panelSection">
      <div class="linkPanelBox">
        <router-link :to="{ name: 'home' }" class="linkPanel"
          ><h1>首頁</h1></router-link
        >
        <h1>></h1>
        <router-link :to="{ name: 'news' }" class="linkPanel"
          ><h1>最新消息</h1></router-link
        >
      </div>
      <app-news-query-panel class="queryPanel"></app-news-query-panel>
      <div class="pageSelectorBox">
        <router-link
          v-for="(pageNumber, i) in pagesSelector"
          :index="i"
          class="pageSelector"
          :to="{
            name: 'news',
            query: {
              category: this.$route.query.category
                ? this.$route.query.category
                : undefined,
              page: pageNumber,
            },
          }"
          >{{ pageNumber }}</router-link
        >
      </div>
    </section>
    <div class="newsBoxContainer">
      <app-news-template
        @totalPagesUpdate="updateTotalPage($event)"
        :newsPerPage="Number(6)"
      ></app-news-template>
    </div>
  </div>
</template>

<style lang="scss">
.newsView{
  .panelSection{
    margin-top: 4rem;
    .queryPanel{
      padding: 2rem;
    }
    .pageSelectorBox{
      width: 100%;
      display:flex;
      padding: 2rem;
      flex-wrap: wrap;
      justify-content: center;
      .pageSelector{
        font-size: 1.5rem;
        padding: 0 1rem;
      }
    }
  }
}
.linkPanelBox{
  width: 50%;
  display:flex;
  flex-wrap:wrap;
  h1{
    font-size: 1.5rem;
    font-weight: 400;
  }
    .linkPanel{
      padding: 0 1rem;
    }
  }
@media(max-width:768px){
  .newsView{
    .panelSection{
      .queryPanel{
        padding: 1rem 0.5rem;
      }
      .pageSelectorBox{
       .pageSelector{
        padding:0 0.5rem;
       } 
      }
    }
  }
}
</style>
