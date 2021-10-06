<template>
  <v-col cols="auto">
    <v-dialog
      transition="dialog-bottom-transition"
      max-width="600"
      v-model="object.modal"
    >
      <v-card class="style_card_pop_up">
        <div v-if="!state.isFinished">
          <v-card-title class="style-card-title">Confirmação de recadastramento</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Responsável"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="12"
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
                    />
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
                sm="12"
                md="4"
              >
                <v-text-field
                  label="Hora"
                  hide-details="auto"
                />
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field
                  label="Masp"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Servidor Inativo ou Pensionista"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
              >
                <p>*Estes dados serão registrados em auditoria para futuras consultas</p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="container_pop_up_buttons mb-10px">
            <v-btn
              class="confirm"
              @click="state.isFinished = true"
            >
              Confirmar
            </v-btn>
          </v-card-actions>
        </div>
        <div v-else>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="d-flex align-center justify-center">
                <i class="far fa-check-circle fa-10x mt-10 mb-10 icon-check"></i>
              </v-col>
              <v-col cols="12" class="d-flex align-center justify-center">
                <p class="text-finished">Recadastramento concluído com sucesso!</p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="container_pop_up_buttons mt-5">
            <v-btn
              class="confirm"
              @click="object.modal = false"
            >
              Ok
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive, watch } from '@vue/composition-api'

interface PopUpAssinatura {
  modal: boolean;
}

interface State {
  date: string;
  menu: boolean;
  dateFormated: string;
  isFinished: boolean;
}

interface SetupReturn {
  state: State;
  parseDate:() => void;
}

export default defineComponent({
  props: {
    object: {
      type: Object as PropType<PopUpAssinatura>,
      required: true
    }
  },

  setup (): SetupReturn {
    const state = reactive<State>({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormated: '',
      menu: false,
      isFinished: false
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

<style lang="scss" scoped>
.style_card_pop_up {
  height: auto;
  background-color: #efefef;
  min-height: 403px;
}

.icon-check {
  color: #48de57;
}

.confirm.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  font-size: 0.8rem;
  background-color: #006699;
  color: #fff;
  text-transform: capitalize;
}

.container_pop_up_buttons {
  display: flex;
  justify-content: center;
}

.style-card-title {
  color: #005965;
}

.text-finished {
  font-size: 1.6rem;
  color: black;
  margin: 0;
}

/* Small */
@media only screen and (max-width: 375px) {
  .style_card_pop_up {
    padding-top: 10px;
  }
}
</style>
