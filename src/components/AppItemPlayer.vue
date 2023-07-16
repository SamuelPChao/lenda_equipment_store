<script>
export default {
  name: "AppItemPlayer",
  data() {
    return {
      playerIndex: 0,
      item: ["A", "B", "C", "D", "E"],
    };
  },
  props: {
    productInfos: Array,
  },
  methods: {
    changeItem(param) {
      if (param === "right") this.playerIndex += 1;
      if (param === "left") this.playerIndex -= 1;
      if (this.playerIndex + 1 > this.productInfos.length) this.playerIndex = 0;
      if (this.playerIndex < 0) this.playerIndex = this.productInfos.length - 1;
    },
  },
};
</script>

<template>
  <div class="appItemPlayerBox">
    <div class="itemsBox">
      <div class="btnBox btnLeftBox" @click="changeItem('left')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-caret-left directionBtn"
          viewBox="0 0 16 16"
        >
          <path
            d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
          />
        </svg>
      </div>
      <div
        class="displayNone"
        v-for="(productInfo, i) in productInfos"
        :class="{ showItem: playerIndex === i }"
      >
        <div class="itemBox">
          <div class="imgBox">
            <img
              class="itemImage"
              :src="productInfo.productImg"
              alt="productInfoName"
            />
          </div>
          <div class="detailBox">
            <div class="nameBox">
              {{ productInfo.productName }}
            </div>
            <div class="detailInfoBox">
              <span
                class="info"
                v-for="(detailInfo, i) in productInfo.detailInfos"
                :index="i"
              >
                {{ detailInfo }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="btnBox btnRightBox" @click="changeItem('right')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-caret-right directionBtn"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appItemPlayerBox{
  width:90%;
  margin: 0 auto;
  box-shadow: 0 0 0.5rem 0.1rem $box-shadow-black;
  border:1px solid $border-color;
  border-radius: 1rem;
  .itemsBox{
    position: relative;
    width: 100%;
    margin: auto;
    .btnBox{
      display: flex;
      position: absolute !important;
      top:100%;
      transform: translateY(-50%);
      background-color: rgba(208, 208, 208, 0.5);
      border:1px solid $border-color;
      border-radius: 1rem;
      box-shadow: 0 0 1rem 0.05rem $box-shadow-black;
      .directionBtn{
        color:$font-black;
      }
      .directionBtn:hover{
        color:$font-grey;
        background-color: $btn-hover-bg-color;
      }
    }
    .btnLeftBox{
      left:40%;
    }
    .btnRightBox{
      right:40%;
    }
    .displayNone{
      .itemBox{
        width: 100%;
        height: 32rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .imgBox{
          width: 50%;
          display: flex;
          align-items: center;
          .itemImage{
            width: 100%;
          }
        }
        .detailBox{
          width: 50%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          font-size: 2rem;
          font-weight: 300;
          flex-direction: column;
          .nameBox{
            width: 100%;
            height: 3rem;
          }
          .detailInfoBox{
            width: 100%;
            height: auto;
            display:flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-around;
          }
          .info{
            width:100%;
            padding:1rem 0;
            font-size: 1rem;
          }
        }
      }
    }
  }
  .displayNone{
    display: none !important;
  }
  .showItem{
    display: block !important;
  }
}
@media(max-width:1024px) and (min-width:768px){
  .appItemPlayerBox{
    .itemsBox{
      .btnBox{
        transform: translateY(-20%);
        .directionBtn{
          width: 4rem !important;
          height: 4rem !important;
        }
      }
      .btnLeftBox{
        left:30%;
      }
      .btnRightBox{
        right:30%;
      }
      .displayNone{
        .itemBox{
          width: 100%;
          .imgBox{
            display: flex;
            justify-content: center;
            width: 100%;
            height: 50%;
            .itemImage{
              height: 100%;
              width: auto;
            }
          }
          .detailBox{
            width: 100%;
            height: 50%;
            padding:1rem 2rem;
            .nameBox{
              text-align: center;
              font-size: 2rem;
            }
            .detailInfoBox{
              height: 75%;
              .info{
                font-size: 1.25rem;
                text-align: center;
                padding:0.25rem 0;
              }
            }
          }
        }
      }
    }
  }
}
@media(max-width:768px){
.appItemPlayerBox{
  .itemsBox{
    .btnBox{
      transform: translateY(-40%);
    }
    .btnLeftBox{
      left:30%;
    }
    .btnRightBox{
      right:30%;
    }
    .displayNone{
      width: 100%;
      .itemBox{
        width: 100%;
        height: 40rem;
        padding:0.5rem;
        align-items: center;
        flex-direction: column;
        .imgBox{
          width: 100% !important;
        }
        .detailBox{
          width: 100% !important;
          .nameBox{
            height: 3rem;
            text-align: center;
          }
          .detailInfoBox{
            .info{
              padding:0.5rem 0.25rem;
            }
          }
        }
      }
    }
  }
}
}
</style>
