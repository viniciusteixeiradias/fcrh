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
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          label="CPF"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Estado civil"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <div class="container-switch">
          <p class="label-switch-address mr-3">Reside no exterior:</p>
          <v-switch hide-details="auto"/>
        </div>
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
.container-switch {
  display: inline-flex;
}

.label-switch-address {
  margin-bottom: 0;
  align-items: end;
  display: flex;
}
</style>
