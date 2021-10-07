<template>
  <div>
    <div>
      <TitlePage titlePage="Recadastramento Inativos e Pensionistas Especiais"/>
      <Recadastramento />
      <DadosPessoais />
      <Curatela />
      <DadosRecadastramento />
      <Endereco />
      <EnderecoExterior />
      <Contato />
      <v-row class="mt-2">
        <v-col
          cols="12"
          sm="12"
          md="12"
          class="d-flex align-center justify-center"
        >
          <v-btn
            class="button-save"
            @click="state.popUp.modal = true"
          >
            Confirmar Dados
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <PopUpAssinatura v-if="state.popUp.modal" :object="state.popUp"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from '@vue/composition-api'
import ExpansionPanel from '@/components/ExpansionPanel.vue'
import Recadastramento from '@/components/Curador/Register/Recadastramento.vue'
import Curatela from '@/components/Curador/Register/Curatela.vue'
import DadosRecadastramento from '@/components/Curador/Register/DadosRecadastramento.vue'
import DadosPessoais from '@/components/Curador/Register/DadosPessoais.vue'
import Endereco from '@/components/Curador/Register/Endereco.vue'
import EnderecoExterior from '@/components/Curador/Register/EnderecoExterior.vue'
import Contato from '@/components/Curador/Register/Contato.vue'
import PopUpAssinatura from '@/components/Curador/Register/PopUpAssinatura.vue'
import TitlePage from '@/components/TitlePage.vue'
import { Items } from '@/types/data_table'
import router from '@/router'

interface ObjectPopUpAssinatura {
  modal: boolean;
}

interface State {
  person: Items;
  popUp: ObjectPopUpAssinatura;
}

interface SetupReturn {
  state: State;
}

export default defineComponent({
  components: {
    ExpansionPanel,
    Recadastramento,
    Curatela,
    DadosRecadastramento,
    DadosPessoais,
    Endereco,
    EnderecoExterior,
    Contato,
    PopUpAssinatura,
    TitlePage
  },

  setup (): SetupReturn {
    const state = reactive<State>({
      person: {} as Items,
      popUp: {
        modal: false
      }
    })

    watch(() => state.popUp.modal, () => {
      console.log(state.popUp.modal)
    })

    onMounted(() => {
      if (router.app.$route.params.person) {
        state.person = JSON.parse(router.app.$route.params.person)
        console.log(state.person)
      }
    })

    return {
      state
    }
  }
})
</script>

<style scoped>
.button-save.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  font-size: 0.8rem;
  background-color: #006699;
  color: #fff;
  text-transform: capitalize;
}
</style>
