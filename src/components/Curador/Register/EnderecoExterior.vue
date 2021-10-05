<template>
  <ExpansionPanel
    namePanel="Endereço Exterior"
    icon-name="fa-location-arrow"
  >
    <v-row>
      <v-col
        class="container-address-outside"
        cols="12"
        sm="6"
        md="12"
      >
        <i class="fas fa-exclamation-triangle fa-lg alert-icon mr-2"></i>
        <p class="mb-0">Atenção: A seleção 'Reside no exterior', implicará em <strong>desconto automático de 25%</strong> sobre o salário do servidor.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          label="Etiqueta SEI"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          label="Caixa Postal"
          hide-details="auto"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-text-field
          label="Logradouro"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          label="Cidade"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-autocomplete
          label="Pais"
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
.alert-icon {
  color: orange;
}

.container-address-outside {
  display: inline-flex;
  align-items: center;
}
</style>
