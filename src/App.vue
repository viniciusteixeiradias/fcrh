<template>
  <v-app>
    <App-Bar/>

    <v-main>
      <div class="container_app">
        <v-img
          alt="logo sisap"
          class="image-sisap"
          src="@/assets/sisap.png"
        >
          <router-view :style="root"/>
        </v-img>
      </div>
    </v-main>
    <v-footer class="footer" app>
      <p class="text-footer">Prodemge</p>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from '@vue/composition-api'
import { VuetifyThemeItem } from 'vuetify/types/services/theme'
import AppBar from '@/components/AppBar.vue'
import router from '@/router'

type RootStyle = {
  '--primary-color': VuetifyThemeItem;
}

interface State {
  valor: number;
  texto: string;
}

interface SetupReturn {
  root: Ref<RootStyle>;
  state: State;
}

export default defineComponent({
  components: {
    AppBar
  },

  setup (): SetupReturn {
    const root = ref<RootStyle>({
      '--primary-color': router.app.$vuetify.theme.themes.dark.primary
    })
    const state = reactive<State>({
      valor: 0,
      texto: 'foi'
    })

    return {
      root,
      state
    }
  }
})
</script>

<style lang="scss">
html,
body,
.v-application {
  height: 100%;
  overflow-y: auto !important;
  overflow-x: hidden !important;
}

.v-main {
  overflow: hidden !important;
  background-color: #efefef;
}

.container_app {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-image__image.v-image__image--cover {
  background-size: auto;
}

.text-footer {
  color: #dc3545;
  font-weight: bold;
}
.v-footer.footer.v-sheet.theme--light {
  position: relative;
  width:100%;
  background-color: white;
  height: 30px;
  display: flex;
  justify-content: flex-end;
}

@media only screen and (min-height: 979px) {
  .v-footer.footer.v-sheet.theme--light {
    // background-color: black;
  }
}

</style>
