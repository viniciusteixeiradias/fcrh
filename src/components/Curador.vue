<template>
  <div>
    <ExpansionPanel
      namePanel="Recadastramento Inativos e Pensionistas Especiais"
      icon-name="fa-user-plus"
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
              ></v-radio>
              <v-radio
                label="remoto"
                value="radio-2"
              ></v-radio>
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
          Dados...
        </v-col>
      </v-row>
    </ExpansionPanel>
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
    <ExpansionPanel
      namePanel="Endereço"
      icon-name="fa-location-arrow"
    >
      <v-row>
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
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="2"
        >
          <v-text-field
            label="CEP"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
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
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Bairro"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
        >
          <v-text-field
            label="Número"
            hide-details="auto"
          ></v-text-field>
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
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="UF"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
        >
          <v-text-field
            label="Municipio"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
    </ExpansionPanel>
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
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
        >
          <v-text-field
            label="Caixa Postal"
            hide-details="auto"
          ></v-text-field>
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
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
        >
          <v-text-field
            label="Cidade"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="2"
        >
          <v-autocomplete
            label="Pais"
            hide-details="auto"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </ExpansionPanel>
  </div>
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

.container-switch {
  display: inline-flex;
}

.label-switch-address {
  margin-bottom: 0;
  align-items: end;
  display: flex;
}

.search-button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  font-size: 0.8rem;
  background-color: #006699;
  color: #fff;
}

.alert-icon {
  color: orange;
}

.container-address-outside {
  display: inline-flex;
  align-items: center;
}
</style>
