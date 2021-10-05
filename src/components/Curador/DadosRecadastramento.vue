<template>
  <ExpansionPanel
    namePanel="Dados do Recadastramento"
    icon-name="fa-address-card"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-menu
          ref="menu"
          v-model="state.menu"
          :close-on-content-click="false"
          :return-value.sync="state.date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="state.dateFormated"
              label="Data do último recadastramento"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              hide-details="auto"
              @blur="state.date = parseDate()"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="state.date"
            no-title
            scrollable
            locale="pt-BR"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="state.menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(state.date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Tipo do último recadastramento"
          value="Bancário"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          label="Status do pagamento"
          value="Regular"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
  </ExpansionPanel>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from '@vue/composition-api'
import ExpansionPanel from '@/components/ExpansionPanel.vue'

interface State {
  date: string;
  menu: boolean;
  dateFormated: string;
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
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormated: '',
      menu: false
    })

    watch(() => state.date, () => {
      parseDate()
    })

    onMounted(() => {
      parseDate()
    })

    function parseDate () {
      if (!state.date) return
      const [year, month, day] = state.date.split('-')
      state.dateFormated = `${day}/${month}/${year}`
    }

    return {
      state,
      parseDate
    }
  }
})
</script>
