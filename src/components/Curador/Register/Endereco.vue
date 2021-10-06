<template>
  <ExpansionPanel
    namePanel="Endereço"
    icon-name="fa-location-arrow"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="1"
      >
        <v-text-field
          label="CEP"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
        class="d-flex align-center"
      >
        <v-btn
          class="search-button"
        >
          Buscar
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Logradouro"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Bairro"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          label="Número"
          hide-details="auto"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Complemento"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="UF"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          label="Municipio"
          hide-details="auto"
        />
      </v-col>
    </v-row>
  </ExpansionPanel>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ExpansionPanel from '@/components/ExpansionPanel.vue'

export default defineComponent({
  components: {
    ExpansionPanel
  }
})
</script>

<style scoped>
.search-button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  font-size: 0.8rem;
  background-color: #006699;
  color: #fff;
}
</style>
