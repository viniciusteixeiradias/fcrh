<template>
  <div>
    <Recadastramento />
    <DadosPessoais />
    <Curatela />
    <DadosRecadastramento />
    <Endereco />
    <EnderecoExterior />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ExpansionPanel from '@/components/ExpansionPanel.vue'
import Recadastramento from '@/components/Curador/Recadastramento.vue'
import Curatela from '@/components/Curador/Curatela.vue'
import DadosRecadastramento from '@/components/Curador/DadosRecadastramento.vue'
import DadosPessoais from '@/components/Curador/DadosPessoais.vue'
import Endereco from '@/components/Curador/Endereco.vue'
import EnderecoExterior from '@/components/Curador/EnderecoExterior.vue'

export default defineComponent({
  components: {
    ExpansionPanel,
    Recadastramento,
    Curatela,
    DadosRecadastramento,
    DadosPessoais,
    Endereco,
    EnderecoExterior
  }
})
</script>
