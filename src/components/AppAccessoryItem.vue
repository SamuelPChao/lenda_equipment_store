<script>
export default {
  name: 'AppAccessoryItem',
  props: {
    accessory: {
      type: Object
    }
  }
}
</script>
<template>
  <div class="AppAccessoryItem">
    <div class="accessoryItemBox">
      <div class="accessoryImgBox">
        <img
          class="accessoryImg"
          :src="accessory.imageSRC"
          :alt="accessory.name"
        />
      </div>
      <div class="accessoryInfoBox">
        <span class="accessoryName">{{
          accessory.name.toUpperCase()
        }}</span>
        <span class="accessoryPrice">
          $NT {{ accessory.price }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accessoryItemBox{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 0.05rem solid $not-that-grey-blacker;
  .accessoryImgBox{
    width:30%;
    .accessoryImg{
      width:80%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
  .accessoryInfoBox{
    width:60%;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    padding:1.5rem 0;
    span{
      width:100%
    }
  }
}
</style>
