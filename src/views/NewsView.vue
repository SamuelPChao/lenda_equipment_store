<script>
import AppNewsBox from '../components/AppNewsBox.vue'
import AppNewsQueryPanel from '../components/AppNewsQueryPanel.vue'
export default {
  name: 'NewsView',
  data() {
    return {
      newsBoxTotalPages: undefined
    }
  },
  computed: {
    pagesSelector() {
      return Array.from(
        { length: this.newsBoxTotalPages },
        (_, index) => index + 1
      )
    }
  },
  components: { AppNewsBox, AppNewsQueryPanel },
  methods: {
    newsCategorySwitch(queryString) {
      this.$router.push({
        query: {
          category: queryString
        }
      })
      console.log(this.$route)
    },
    updateTotalPage(value) {
      this.newsBoxTotalPages = value
    }
  }
}
</script>
<template>
  <div class="newsView">
    <section class="panelSection">
      <div class="linkPanelBox">
        <router-link
          :to="{ name: 'home' }"
          class="linkPanel"
          ><h1>首頁</h1></router-link
        >
        <h1>></h1>
        <router-link
          :to="{ name: 'news' }"
          class="linkPanel"
          ><h1>最新消息</h1></router-link
        >
      </div>
      <app-news-query-panel
        class="queryPanel"
      ></app-news-query-panel>
      <div class="pageSelectorBox">
        <router-link
          v-for="(pageNumber, i) in pagesSelector"
          class="pageSelector"
          :to="{
            name: 'news',
            query: {
              category: this.$route.query.category
                ? this.$route.query.category
                : undefined,
              page: pageNumber
            }
          }"
          >{{ pageNumber }}</router-link
        >
      </div>
    </section>
    <div class="newsBoxContainer">
      <app-news-box
        @totalPagesUpdate="updateTotalPage($event)"
        :newsPerPage="Number(6)"
        :currentPage="
          this.$route.query.page
            ? Number(this.$route.query.page)
            : 1
        "
        :queryString="
          this.$route.query.category
            ? this.$route.query.category
            : undefined
        "
      ></app-news-box>
    </div>
  </div>
</template>

<style lang="scss">
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
</style>
