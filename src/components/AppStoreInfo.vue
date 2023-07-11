<script>
export default {
  name: 'AppStoreInfo'
}
</script>

<template>
  <div class="appStoreInfoBox">
    <div class="storeInfoBoxs">
      <div class="storeInfoBox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-geo-alt-fill locationIcon"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
          />
        </svg>
        <h3 class="storeInfo">
          100台灣台北市中正區市民大道一段100號
        </h3>
      </div>
      <div class="storeInfoBox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-telephone"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
        <h3 class="storeInfo">02 - 6666 - 6666</h3>
      </div>
      <div class="storeInfoBox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-clock-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
          />
        </svg>
        <h3 class="storeInfo">
          營業時間: 12:00 A.M. - 12:00 P.M.
        </h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.storeInfoBoxs{
    width:100%;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .storeInfoBox{
      width: 30%;
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      .storeInfo{
        font-size: 1rem;
        margin-top: 2rem;
        width: 100%;
        text-align: center;
      }
    }  
}
.storeInfoBoxs> :nth-child(2){
    border-left:0.1rem solid $not-that-grey-blacker;
    border-right:0.1rem solid $not-that-grey-blacker;
}
</style>
