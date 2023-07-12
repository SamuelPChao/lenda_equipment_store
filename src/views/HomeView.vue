<script>
import AppSideMenu from "@/components/AppSideMenu.vue";
import AppGoogleMap from "../components/AppGoogleMap.vue";
import AppItemPlayer from "../components/AppItemPlayer.vue";
import AppNewsInfo from "../components/AppNewsInfo.vue";
import AppHomePageBanner from "../components/AppHomePageBanner.vue";
import AppStoreInfo from "../components/AppStoreInfo.vue";
export default {
  name: "HomeView",
  components: {
    AppHomePageBanner,
    AppSideMenu,
    AppStoreInfo,
    AppGoogleMap,
    AppItemPlayer,
    AppNewsInfo,
  },
  data() {
    return {
      productInfos: [
        {
          productName: "ARRI ALEXA MINI",
          productImg:
            "https://s3-ap-northeast-1.amazonaws.com/mgrwebstore/img/webimgs/thumbs/Arri Alexa Mini1.png",
          detailInfos: [
            "強大色彩控制 — Rec.709、Rec.2020、ARRI WideGamut",
            "高速拍攝 — 最高 200 幀高速拍攝",
            "多格式支持 — ProRes 4444、ProRes 422 以及ArriRAW",
            "內置ND — 內建 ND 0.6,1.2,2.1 控制光線及曝光快速調節",
          ],
        },
        {
          productName: "Red V-Raptor 8K",
          productImg:
            "https://s3-ap-northeast-1.amazonaws.com/mgrwebstore/img/webimgs/compress/RED V-Raptor 8K-2.png",
          detailInfos: [
            "7168 X 3780 Resolution",
            "高速拍攝 — 8K 60 幀、4K 240幀 高速拍攝",
            "高動態範圍 — 最高至 18 檔寬容度",
          ],
        },
        {
          productName: "Sony FX6",
          productImg:
            "https://s3-ap-northeast-1.amazonaws.com/mgrwebstore/img/webimgs/thumbs/FX6V_1.png",
          detailInfos: [
            "4K 120幀 6274點相位式偵測自動對焦 涵蓋 89% 影像區域",
            "S-Cinetone、S-Log3、S-Gamut3.Cine 色彩高動態表現",
            "ISO 800 - 12800 雙感光 搭配 15 檔高動態範圍",
          ],
        },
        // {
        //   productName: '',
        //   productImg: '',
        //   detailInfos: []
        // }
      ],
    };
  },
};
</script>

<template>
  <div class="homeView">
    <section class="bannerSection">
      <app-home-page-banner></app-home-page-banner>
    </section>
    <section class="productInfoSection">
      <div class="productInfoSectionTitle">攝影機</div>
      <app-item-player
        class="appItemPlayer"
        :productInfos="productInfos"
      ></app-item-player>
    </section>
    <section class="newsSection">
      <div class="newsSectionTitle">最新消息</div>
      <app-news-info :newsPerPage="6" class="appNewsBox"></app-news-info>
    </section>
    <section class="storeInfoSection">
      <div class="storeInfoSectionTitle">店家資訊</div>
      <app-store-info class="appStoreInfo"></app-store-info>
      <app-google-map class="appGoogleMap"></app-google-map>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section{
  border-bottom: 0.1rem solid $not-that-grey-blacker;
  margin-bottom: 2rem;
}
.productInfoSectionTitle{
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
}
.appItemPlayer{
  margin-bottom: 8rem;
}

.newsSectionTitle{
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
}
.appNewsBox{
  margin-bottom: 2rem;
}
.storeInfoSectionTitle{
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
}
.appGoogleMap{
  margin:2rem auto;
}
@media (max-width:768px) {
  .homeView{
    .bannerSection{
      margin-bottom:5rem;
    }
    .productInfoSection{
      .productInfoSectionTitle{
        font-size: 1.5rem;
      }
    }
    .newsSection{
      .appNewsBox{
        margin-bottom: 35rem;
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
      }
    }
  }
}
</style>
