<script>
export default {
  name: 'AppSideMenu',
  data() {
    return {
      open: [],
      products: [
        ['camera', ['arri', 'red', 'sony', 'canon']],
        [
          'lens',
          [
            'arri',
            'angenieux',
            'cooke',
            'canon',
            'leica',
            'sony',
            'zeiss'
          ]
        ],
        ['battery', ['sony', 'canon', 'fxlion']],
        [
          'storage',
          ['sony', 'sandisk', 'angelbird', 'wise', 'red']
        ],
        ['monitor', ['smallhd']],
        ['follow-focus', ['tilta', 'cmotion', 'arri']],
        ['wireless-signal', ['hollyland', 'swit']],
        ['tripod', ['teris', 'sachtler', 'oconnor']],
        ['matte-box', ['arri', 'tilta', 'smallrig']],
        ['filter', ['tiffen', 'schneider']]
      ]
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === 'product') this.open = []
    }
  }
}
</script>

<template>
  <div class="sideMenuBox">
    <v-card class="sidemenu">
      <v-list v-model:opened="open">
        <template
          v-for="[type, brands] in products"
          :key="type"
        >
          <v-list-group :value="type">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="type.toUpperCase()"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="(brand, i) in brands"
              :key="type + brand"
              :index="i"
              :title="brand.toUpperCase()"
              :prepend-icon="brand"
              :value="type + brand"
              :to="{
                name: 'category-brand',
                params: { type: type, brand: brand }
              }"
            >
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<style lang="scss" scoped></style>
