<script>
import { mapActions } from 'pinia'
import useShoppingCartStore from '../stores/shoppingCart'
import useProductStore from '@/stores/product'
import AppAccessoryItem from './AppAccessoryItem.vue'

export default {
  name: 'AppProductModal',
  data() {
    return {
      showIntro: 'spec'
    }
  },
  props: {
    product: {
      type: Object
    }
  },
  components: {
    AppAccessoryItem
  },
  methods: {
    ...mapActions(useShoppingCartStore, {
      addToCart: 'addToCart'
    }),
    ...mapActions(useProductStore, {
      toggleProductModal: 'toggleProductModal'
    })
  }
}
</script>

<template>
  <div class="appProductModal" @click.stop>
    <div class="closeBtnBox">
      <svg
        @click.prevent="toggleProductModal"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        style="fill: lightgray"
        class="bi bi-x-circle closeBtn"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div class="productBox">
      <div class="productImgBox">
        <img
          class="productImg"
          :src="product.imageSRC"
          :alt="product.name"
        />
      </div>
      <div class="productInfoBox">
        <div class="productNameBox">
          {{
            product.name
              ? product.name.toUpperCase()
              : undefined
          }}
        </div>
        <div class="productPriceBox">
          NT$ {{ product.price }}
        </div>
      </div>
      <div class="actionBtnsBox">
        <svg
          @click.prevent="addToCart(product)"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-cart carticon actionBtn"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
      </div>
    </div>
    <div class="productIntroBox">
      <ul class="productIntroList">
        <li
          class="productIntro"
          @click="showIntro = 'spec'"
          :style="{
            borderBottom:
              showIntro === 'spec'
                ? '0.075rem solid black'
                : ''
          }"
        >
          規格
        </li>
        <li
          class="productIntro"
          @click="showIntro = 'accessory'"
          :style="{
            borderBottom:
              showIntro === 'accessory'
                ? '0.075rem solid black'
                : ''
          }"
          v-show="product.accessory"
        >
          配件
        </li>
      </ul>
      <div class="productIntroContentBox">
        <div
          class="productIntroContent"
          v-show="showIntro === 'spec'"
        >
          <span class="productName"
            >器材名稱:
            {{
              product.name ? product.name.toUpperCase() : ''
            }}</span
          >
          <span class="productType"
            >器材類型:
            {{
              product.productTypeSpec
                ? product.productTypeSpec.toUpperCase()
                : ''
            }}

            {{
              product.productType
                ? product.productType.toUpperCase()
                : ''
            }}</span
          >

          <span
            class="productSensorSize"
            v-if="product.sensorSize"
          >
            感光片幅:
            {{
              product.sensorSize
                ? product.sensorSize.toUpperCase()
                : ''
            }}
          </span>
          <span
            class="productLensMount"
            v-if="product.lensMount"
            >鏡頭接口:
            {{
              product.lensMount
                ? product.lensMount.toUpperCase()
                : ''
            }}
            Mount</span
          >
          <span
            class="productStorageSize"
            v-if="product.storageSize"
            >儲存容量:
            {{
              product.storageSize
                ? product.storageSize
                : ''
            }}GB
          </span>
          <span
            class="productMonitorSize"
            v-if="product.monitorSize"
            >螢幕尺寸:
            {{
              product.monitorSize
                ? product.monitorSize
                : ''
            }}"</span
          >
          <span
            class="productSignal"
            v-if="product.signalType"
          >
            訊號類型:
            <a v-for="signalType in product.signalType"
              >{{
                signalType ? signalType.toUpperCase() : ''
              }}
            </a>
          </span>
          <div
            class="productTripodSize"
            v-if="product.tripodSize"
          >
            油壓頭尺寸:
            {{
              product.tripodSize ? product.tripodSize : ''
            }}mm
          </div>
          <span
            class="productFilterSize"
            v-if="product.filterSize"
          >
            濾鏡尺寸:
            {{ product.filterSize === 5.65 ? 4 : 6.6 }}mm x
            {{
              product.filterSize ? product.filterSize : ''
            }}mm
          </span>
          <span
            class="productFilterQuantity"
            v-if="product.filterQuantity"
          >
            濾鏡數量:
            {{
              product.filterQuantity
                ? product.filterQuantity
                : ''
            }}枚
          </span>
        </div>
        <div
          class="productIntroContent"
          v-show="showIntro === 'accessory'"
        >
          <div class="accessoryItemsBox">
            <app-accessory-item
              v-for="(accessory, i) in product.accessory"
              :index="i"
              :accessory="accessory.accessoryId"
            ></app-accessory-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appProductModal{
  position: fixed;
  top:15vh;
  left:50vw;
  transform:translateX(-50%);
  width: 32rem;
  height: auto;
  background-color: $not-that-white;
  border: solid 1px $not-that-grey;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem 0.1rem $not-that-black-shadow;
  .closeBtnBox{
    .closeBtn{
      position: fixed;
      background-color: $not-that-white;
      border-radius: 1rem;
      right:-0.9rem;
      top:-1.2rem;
    }
  }
  .productBox{
    display: flex;
    flex-wrap:wrap ;
    .productImgBox{
    width: 100%;
    display: flex;
    justify-content: center;
      .productImg{
        width: 24rem;
        height: 16rem;
      }
    }
    .productInfoBox{
      width: 80%;
      .productNameBox, .productPriceBox{
        width: 100%;
        padding:0.25rem 0.50rem;
        font-size:1.25rem;
        font-weight: 300;
      }
    }
    .actionBtnsBox{
      width: 15%;
      display:flex;
      justify-content: right;
      align-items: flex-end;
      .actionBtn{
        cursor: pointer;
        color:$not-that-black
      }
    }
  }
  .productIntroBox{
    padding: 0.5rem 0.5rem;
    .productIntroList{
      width: 100%;
      display:flex;
      flex-wrap: wrap;
      padding: 0 0.5rem;
      border-bottom: 0.05rem solid $not-that-grey-blacker;
      .productIntro{
        list-style: none;
        width:25%;
        text-align:center;
        cursor: pointer;
      }
    }
    .productIntroContentBox{
      .productIntroContent{
        display: flex;
        flex-wrap: wrap;
        span{
          width:100%;
          padding: 0.25rem 0;
          border-bottom: 0.05rem solid $not-that-grey-blacker;
          a{
            padding: 0 0.5rem 0 0;
          }
        }
      }
    }
  }
}
</style>
