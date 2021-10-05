<template>
  <ExpansionPanel
    namePanel="Dados do Curador ou Tutor"
    icon-name="fa-address-book"
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
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="CPF"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-menu
          ref="menu"
          v-model="state.menuStartDate"
          :close-on-content-click="false"
          :return-value.sync="state.startDate"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="state.startDateFormated"
              label="Data do último recadastramento"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              hide-details="auto"
              @blur="state.startDate = parseDate()"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="state.startDate"
            no-title
            scrollable
            locale="pt-BR"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="state.menuStartDate = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(state.startDate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </ExpansionPanel>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from '@vue/composition-api'
import ExpansionPanel from '@/components/ExpansionPanel.vue'

interface State {
  startDate: string;
  menuStartDate: boolean;
  startDateFormated: string;
  finalDate: string;
  menuFinalDate: boolean;
  finalDateFormated: string;
}

interface SetupReturn {
  state: State;
  parseDate:() => void;
}

export default defineComponent({
  components: {
    ExpansionPanel
  },

  setup (): SetupReturn {
    const state = reactive<State>({
      startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      startDateFormated: '',
      menuStartDate: false,
      finalDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      finalDateFormated: '',
      menuFinalDate: false
    })

    watch(() => state.startDate, () => {
      parseDate()
    })

    onMounted(() => {
      parseDate()
    })

    function parseDate () {
      if (!state.startDate) return
      const [year, month, day] = state.startDate.split('-')
      state.startDateFormated = `${day}/${month}/${year}`
    }

    return {
      state,
      parseDate
    }
  }
})
</script>
