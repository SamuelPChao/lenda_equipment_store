<script>
export default {
  name: "AppAccessoryItem",
  props: {
    accessory: {
      type: Object,
    },
  },
};
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
        <span class="accessoryName">{{ accessory.name.toUpperCase() }}</span>
        <span class="accessoryPrice"> $NT {{ accessory.price }} </span>
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
  padding:0.5rem 0.5rem;
  border-bottom: 0.05rem solid $border-color;
  .accessoryImgBox{
    width:30%;
    display: flex;
    justify-content: center;
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span{
      width:100%;
      font-size: 0.8rem;
    }
  }
}
</style>
