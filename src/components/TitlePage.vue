<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        xl="12"
        lg="12"
        md="12"
        sm="12"
      >
        <h1 class="tilte-name-page">{{ titlePage }}</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    titlePage: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.tilte-name-page {
  margin-top: 10px;
  font-size: 1.6rem;
  margin-left: 15px;
  font-weight: 300;
}
</style>
