<script>
import { Loader } from '@googlemaps/js-api-loader'
export default {
  name: 'AppGoogleMap.vue',
  created() {
    const loader = new Loader({
      apiKey: 'AIzaSyBTxkvRAY4d3bYuTcJf3Lh1PthikJ-5UWc',
      version: 'weekly'
    })
    loader.load().then(async () => {
      const myLatLng = { lat: 25.049, lng: 121.514 }
      const { Map } = await google.maps.importLibrary(
        'maps'
      )
      const map = new Map(document.getElementById('map'), {
        center: { lat: 25.049, lng: 121.514 },
        zoom: 20
      })
      new google.maps.Marker({
        position: myLatLng,
        map,
        title: 'Hello World!'
      })
    })
  }
}
</script>

<template>
  <div class="appGoogleMapBox"><div id="map"></div></div>
</template>

<style lang="scss" scoped>
#map{
  width: 80vw;
  height: 27rem;
  margin:0 auto;
}
</style>
