<template>
  <ExpansionPanel
    namePanel="Dados Pessoais"
    icon-name="fa-user"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Nome"
          value="Cláudia Freitas"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="CPF"
          value="019.456.789-70"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Estado civil"
          value="Casada"
          hide-details="auto"
        ></v-text-field>
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
