<template>
  <div>
    <v-app-bar
      class="app-bar"
      dense
      dark
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="toolbar-title">SISAP</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="!state.isLogged" class="button-login">
        Login
      </v-btn>
      <div v-else class="logged">
        <p class="mb-0 mr-2 name-user">{{ state.nameUser }}</p>
        <v-menu
          bottom
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              @click="state.dataUser = !state.dataUser"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
            >
              <i class="fas fa-user-circle fa-2x"></i>
            </v-btn>
          </template>
          <div class="dataUser">
            <v-list>
              <v-list-item @click="() => {}">
                <v-list-item-title>
                  <div class="container-user d-flex justify-center align-center">
                    <p class="id-user">00001</p>
                  </div>
                  <p class="container-name-user d-flex align-center mt-2">
                    Vinicius Teixeira Dias
                  </p>
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="() => {}">
                <v-list-item-title><i class="fas fa-home mr-2 icon-home"></i>Alterar Unidade</v-list-item-title>
              </v-list-item>
              <v-list-item @click="() => {}">
                <v-list-item-title><i class="fas fa-power-off mr-2 icon-power"></i>Sair</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

interface State {
  isLogged: boolean;
  dataUser: boolean;
  nameUser: string;
}

interface SetupReturn {
  state: State;
}

export default defineComponent({
  setup (): SetupReturn {
    const state = reactive<State>({
      isLogged: true,
      dataUser: false,
      nameUser: 'vinicius teixeira dias'
    })
    return {
      state
    }
  }
})
</script>

<style scoped>
.app-bar {
  background: #007484;
  background-image: linear-gradient(to bottom, #007484, #005965);
}

.toolbar-title {
  padding: 0 !important;
}

.button-login.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--dark.v-size--default {
  font-size: 0.8rem;
  background-color: #dc3545;
  width: 61.56px;
  height: 35.63px;
  color: #fff;
}

.button-login.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--dark.v-size--default:active {
  background-color: #c82333;
}

.logged {
  display: inline-flex;
  align-items: center;
  margin: 0;
}

.dataUser {
  width: 250px;
  height: auto;
  overflow: hidden;
  background-color: #ffffff;
  /* background-color: #efefef; */
}

.icon-power {
  color: red;
}

.icon-home {
 color: #007484;
}

.container-user {
  border-radius: 0.25rem;
  background: #e2e3e5;
  background-image: linear-gradient(to bottom, #e2e3e5, #d5d6d9);
  background-repeat: repeat-x;
  border: 1px solid transparent;
  border-color: #d2d3d7;
  color: #383d41;
  height: 35px;
}

.name-user {
  text-transform: capitalize;
}

.container-name-user {
  text-transform: capitalize;
  margin: 0;
}

.id-user {
  color: #383d41;
  font-weight: 600;
  margin: 0;
  font-size: 0.9rem;
}
</style>
