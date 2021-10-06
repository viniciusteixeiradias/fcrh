<template>
  <div>
    <ExpansionPanel
      namePanel="Filtro de Pesquisa"
      icon-name="fa-search"
      :open="true"
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
          md="2"
          class="d-flex align-center"
        >
          <v-btn
            class="search-button"
            @click="search()"
          >
            Buscar
          </v-btn>
        </v-col>
      </v-row>
    </ExpansionPanel>
    <ExpansionPanel
      namePanel="Resultado"
      icon-name="fa-file-alt"
      :open="true"
    >
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="3"
        >
          <v-text-field
            v-model="state.search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <v-data-table
            :headers="state.headers"
            :items="state.itens"
            :search="state.search"
            :loading="state.loading"
            class="elevation-1"
            loading-text="Carregando... Por favor aguarde"
          >
            <template v-slot:[`item.recadastrar`]="{ item }">
              <v-btn
                @click="routerPush(item)"
                class="edit-button"
              >
                <i class="fas fa-edit"></i>
              </v-btn>
            </template>
            <template v-slot:[`item.situacao`]="{ item }">
              <v-chip
                :color="getColor(item.situacao)"
                dark
              >
                {{ item.situacao }}
              </v-chip>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </ExpansionPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import ExpansionPanel from '@/components/ExpansionPanel.vue'
import { Header, Items } from '@/types/data_table'
import router from '@/router'

interface State {
  search: string;
  headers: Array<Header>;
  itens: Array<Items>;
  itensApi: Array<Items>;
  loading: boolean;
}

interface SetupReturn {
  state: State;
  getColor: (situacao: string) => string;
  routerPush: (item: Items) => void;
  search: () => void;
}

export default defineComponent({
  components: {
    ExpansionPanel
  },

  setup (): SetupReturn {
    const app = router.app
    const state = reactive<State>({
      search: '',
      headers: [
        { text: 'Recadastrar', value: 'recadastrar' },
        { text: 'Situação Recadastramento', align: 'center', value: 'situacao' },
        { text: 'Nome', sortable: true, value: 'nome' },
        { text: 'CPF', value: 'cpf' },
        { text: 'MASP', value: 'masp' },
        { text: 'Admissão', value: 'admissao' },
        { text: 'Data de Nascimento', value: 'dataNascimento' },
        { text: 'Situação Funcional', value: 'situacaoFuncional' },
        { text: 'Órgão Exercício', value: 'orgaoExercicio' },
        { text: 'Data do Último Recadastramento', value: 'dataUltimoRecadastramento' },
        { text: 'Tipo do Recadastramento', value: 'tipoRecadastramento' }
      ],
      itens: [],
      itensApi: [
        {
          recadastrar: 'Botao',
          situacao: 'Pendente',
          nome: 'Cláudia Freitas',
          cpf: '019.456.789-70',
          masp: '8888888-8',
          admissao: '1',
          dataNascimento: 'DD/MM/AAAA',
          situacaoFuncional: 'Aposentado',
          orgaoExercicio: 'SEE',
          dataUltimoRecadastramento: '13/05/2021',
          tipoRecadastramento: 'Bancário'
        },
        {
          recadastrar: 'Botao',
          situacao: 'Regular',
          nome: 'Cláudia Freitas',
          cpf: '019.456.789-70',
          masp: '8888888-8',
          admissao: '1',
          dataNascimento: 'DD/MM/AAAA',
          situacaoFuncional: 'Aposentado',
          orgaoExercicio: 'SEE',
          dataUltimoRecadastramento: '13/05/2021',
          tipoRecadastramento: 'Bancário'
        },
        {
          recadastrar: 'Botao',
          situacao: 'Pendente',
          nome: 'Vinicius Freitas',
          cpf: '019.456.789-70',
          masp: '8888888-8',
          admissao: '1',
          dataNascimento: 'DD/MM/AAAA',
          situacaoFuncional: 'Aposentado',
          orgaoExercicio: 'SEE',
          dataUltimoRecadastramento: '13/05/2021',
          tipoRecadastramento: 'Bancário'
        },
        {
          recadastrar: 'Botao',
          situacao: 'Regular',
          nome: 'Cláudia Freitas',
          cpf: '019.456.789-70',
          masp: '8888888-8',
          admissao: '1',
          dataNascimento: 'DD/MM/AAAA',
          situacaoFuncional: 'Aposentado',
          orgaoExercicio: 'SEE',
          dataUltimoRecadastramento: '13/05/2021',
          tipoRecadastramento: 'Bancário'
        },
        {
          recadastrar: 'Botao',
          situacao: 'Pendente',
          nome: 'Cláudia Freitas',
          cpf: '019.456.789-70',
          masp: '8888888-8',
          admissao: '1',
          dataNascimento: 'DD/MM/AAAA',
          situacaoFuncional: 'Aposentado',
          orgaoExercicio: 'SEE',
          dataUltimoRecadastramento: '13/05/2021',
          tipoRecadastramento: 'Bancário'
        }
      ],
      loading: false
    })

    function sleep (ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function search () {
      state.loading = true
      await sleep(1000)
      state.loading = false
      state.itens = state.itensApi
    }

    function routerPush (item: Items) {
      app.$router.push({
        name: 'Curador',
        params: {
          person: JSON.stringify(item)
        }
      })
    }

    function getColor (situacao: string) {
      if (situacao.trim() === 'Pendente') return 'red'
      else return 'green'
    }

    return {
      state,
      getColor,
      routerPush,
      search
    }
  }
})
</script>

<style scoped>
.search-button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  font-size: 0.8rem;
  background-color: #006699;
  color: #fff;
}

.teste {
  color: violet;
}

.edit-button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  background-color: #006699;
  color: #fff;
}
</style>
