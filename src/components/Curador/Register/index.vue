<template>
  <div>
    <Recadastramento />
    <DadosPessoais />
    <Curatela />
    <DadosRecadastramento />
    <Endereco />
    <EnderecoExterior />
    <Contato />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@vue/composition-api'
import ExpansionPanel from '@/components/ExpansionPanel.vue'
import Recadastramento from '@/components/Curador/Register/Recadastramento.vue'
import Curatela from '@/components/Curador/Register/Curatela.vue'
import DadosRecadastramento from '@/components/Curador/Register/DadosRecadastramento.vue'
import DadosPessoais from '@/components/Curador/Register/DadosPessoais.vue'
import Endereco from '@/components/Curador/Register/Endereco.vue'
import EnderecoExterior from '@/components/Curador/Register/EnderecoExterior.vue'
import Contato from '@/components/Curador/Register/Contato.vue'
import { Items } from '@/types/data_table'
import router from '@/router'

interface State {
  person: Items;
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
    Contato
  },

  setup (): SetupReturn {
    const state = reactive<State>({
      person: {} as Items
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
