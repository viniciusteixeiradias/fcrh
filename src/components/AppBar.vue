<template>
  <div>
    <v-app-bar
      class="app-bar"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="toolbar-title">SISAP</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="button-login">
        Login
      </v-btn>
    </v-app-bar>
  </div>
</template>

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

.button-login.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--dark.v-size--default:hover {
  background-color: #c82333;
}
</style>
