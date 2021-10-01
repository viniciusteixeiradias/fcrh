<template>
  <PageRegister customTitle="Gestão de Curador ou Tutor">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          filled
          label="Nome"
        ></v-text-field>
      </v-col>
       <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          filled
          label="Masp sem Dv"
        ></v-text-field>
      </v-col>
       <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          filled
          label="CPF"
        ></v-text-field>
      </v-col>
    </v-row>
  </PageRegister>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageRegister from '@/components/PageRegister.vue'

export default defineComponent({
  components: {
    PageRegister
  }
})
</script>
