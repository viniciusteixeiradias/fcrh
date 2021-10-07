<template>
  <ExpansionPanel
    namePanel="Recadastramento"
    icon-name="fa-user-plus"
    :open="true"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-container
          class="container-radio-group px-0"
          fluid
        >
          <v-radio-group
            row
            hide-details="auto"
          >
            <p class="label-radio-group mr-3">Tipo:</p>
            <v-radio
              label="presencial"
              value="radio-1"
            />
            <v-radio
              label="remoto"
              value="radio-2"
            />
          </v-radio-group>
        </v-container>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-file-input
          label="Anexar Documento"
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
.container-radio-group {
  padding: 0;
  margin: 0;
}

.label-radio-group {
  color: #005965;
  font-weight: 500;
  margin-bottom: 0;
}
</style>
