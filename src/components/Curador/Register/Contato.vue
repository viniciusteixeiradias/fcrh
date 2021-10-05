<template>
  <ExpansionPanel
    namePanel="Contatos"
    icon-name="fa-phone-alt"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Email"
          placeholder="email@example.com"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Nome Contato Emergência"
          hide-details="auto"
        />
      </v-col>
      <!-- Validar com a paula o nome do campo-->
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          label="Telefone"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="2"
        class="d-flex align-center"
      >
        <v-btn
          class="add-contact"
          fab
          dark
          small
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
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
.add-contact.v-btn.v-btn--is-elevated.v-btn--fab.v-btn--has-bg.v-btn--round.theme--dark.v-size--small {
  font-size: 0.8rem;
  background-color: #006699;
  color: #fff;
}
</style>
