<script>
export default {
  name: "AppHomePageBanner",
};
</script>

<template>
  <div class="appHomePageBannerBox">
    <div class="bannerBox">
      <div class="bannerSectionBox">
        <div class="sectionContentBox">
          <div class="sectionIdBox">#1</div>
          <div class="sectionTitleBox">攝影器材</div>
          <div class="sectionLinkBox">
            <router-link :to="{ name: 'product' }" class="sectionLink"
              ><v-btn class="linkBtn">去裝車</v-btn></router-link
            >
          </div>
        </div>
      </div>
      <div class="bannerSectionBox">
        <div class="sectionContentBox">
          <div class="sectionIdBox">#2</div>
          <div class="sectionTitleBox">最新消息</div>
          <div class="sectionLinkBox">
            <router-link :to="{ name: 'news' }" class="sectionLink"
              ><v-btn class="linkBtn">探風聲</v-btn></router-link
            >
          </div>
        </div>
      </div>
      <div class="bannerSectionBox">
        <div class="sectionContentBox">
          <div class="sectionIdBox">#3</div>
          <div class="sectionTitleBox">租借須知</div>
          <div class="sectionLinkBox">
            <router-link :to="{ name: 'must-know' }" class="sectionLink"
              ><v-btn class="linkBtn">弄清楚</v-btn></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appHomePageBannerBox{
  .bannerBox{
    width: 100%;
    height: 42rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-image: url('https://new.mgrstore.net/uploads/photography_banner/dd226aa9e2d8b9f273b529a8433b4d55.jpeg');
    background-position: center center;
    .bannerSectionBox{
      position: relative;
      width: 33.33%;
      border:0.1rem $font-white solid;
      color:transparent;
      padding: 1rem;
      cursor: pointer;
      .sectionContentBox{
        position: absolute;
        bottom:0;
        transition:all 0.5s ease;
        .sectionIdBox{
            font-size: 8rem;
            font-style: italic;
            -webkit-text-stroke: 0.15rem $font-white;
        }
        .sectionTitleBox{
          font-size: 5rem;
          -webkit-text-stroke: 0.1rem $font-white;
        }
        .sectionLinkBox{
          transition: all 0.5 linear;
          display: none;
          .linkBtn{
            width: 16rem;
            height: 2.5rem;
            font-size: 1.5rem;
            color:$font-white;
            background-color: $btn-hover-bg-color;
            border-radius: 0.5rem;
          }
        }
      }
    }
    .bannerSectionBox:hover{
      .sectionContentBox{
        transform: translateY(-10rem);
        .sectionLinkBox{
            display:block;
        }
      }
    }
  }
}

@media(max-width:1024px) and (min-width:768px){
  .appHomePageBannerBox{
    .bannerBox{
      width: 95%;
      margin: 0 auto;
      .bannerSectionBox{
        .sectionContentBox{
          .sectionIdBox{
            font-size:6rem;
          }
          .sectionTitleBox{
            font-size:3.5rem;
          }
          .sectionLinkBox{
            .linkBtn{
              width: 12rem;
            }
          }
        }
      }
    }
  }
}
@media(max-width:768px){
  .appHomePageBannerBox{
    .bannerBox{
      flex-direction: column;
      background-position:60% 50%;
      flex-wrap: wrap;
      .bannerSectionBox{
        width:100%;
        height: 33.33%;
        .sectionContentBox{
          left:0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          .sectionIdBox{
            font-size:6rem;
          }
          .sectionTitleBox{
            width: 100%;
            font-size: 3.75rem;
            text-align: center;
          }
          .sectionLinkBox{
            width:60%;
          }
        }
      }
      .bannerSectionBox:hover{
        .sectionIdBox{
          display: none;
        }
        .sectionContentBox{
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
