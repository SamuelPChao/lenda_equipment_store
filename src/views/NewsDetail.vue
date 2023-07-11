<script>
import axios from 'axios'
export default {
  name: 'NewsDetail',
  data() {
    return {
      newsDetail: {}
    }
  },
  methods: {
    async getNewsDetail() {
      try {
        const res = await axios.get(
          `https://lenda-server.onrender.com/api/v1/news/${this.$route.params.newsId}`
        )
        if (res.status === 404) return false
        this.newsDetail = res.data.data.doc
      } catch (err) {
        console.log(err)
      }
    },
    dateToLocaleString(date) {
      return new Date(date).toLocaleString('ch-tw', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit'
      })
    }
  },
  beforeMount() {
    this.getNewsDetail()
  }
}
</script>

<template>
  <div class="contentBox">
    <div class="newsHeaderBox">
      <div class="newsCategoryBox">
        <router-link :to="{ name: 'news' }"
          >最新消息</router-link
        >
        >
        <router-link
          :to="{
            name: 'news',
            query: {
              category: newsDetail.newsQueryCategory
            }
          }"
          >{{ newsDetail.newsCategory }}</router-link
        >
      </div>
      <div class="newsTitleBox">
        <h1>{{ newsDetail.newsTitle }}</h1>
      </div>
      <div class="newsIssueDateBox">
        {{ dateToLocaleString(newsDetail.newsIssueDate) }}
      </div>
    </div>
    <div class="newsContainer">
      <div class="newsBannerImgBox">
        <img
          class="newsBannerImg"
          :src="newsDetail.newsBannerImg"
          :alt="newsDetail.newsTitle"
        />
      </div>
      <div class="newsContentContainer">
        <div class="newsContentBox">
          <ul class="newsContentList">
            <li
              class="newsContent"
              v-for="(content, i) in newsDetail.newsContent"
              :index="i"
            >
              {{ content }}
            </li>
          </ul>
        </div>
        <div
          class="newsContentImgBox"
          v-if="newsDetail.newsContentImg"
        >
          <img
            v-for="(img, i) in newsDetail.newsContentImg"
            :src="img"
            alt=""
            :index="i"
            class="newsContentImg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contentBox{
  .newsHeaderBox{
    margin-top: 4rem;
    .newsTitleBox{
      h1{
        font-size: 3rem;
      }
    }
    .newsIssueDateBox{
      font-size: 1.5rem;
    }
    .newsCategoryBox{
      font-size: 1.5rem;
    }
  }
  .newsContainer{
    width: 80%;
    margin:5rem auto 0 auto;
    .newsBannerImgBox{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 2rem;
      .newsBannerImg{
        width: 100%;
      }
    }
    .newsContentContainer{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .newsContentBox{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 2rem;
        .newsContentList{
          width: 100%;

          .newsContent{
            width: 100%;
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }
        }
      }
      .newsContentImgBox{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .newsContentImg{
          width:75%;
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
