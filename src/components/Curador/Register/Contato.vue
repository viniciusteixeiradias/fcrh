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
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          v-model="state.phoneMain"
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
          @click="addNewContact()"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="state.listContact.length >= 2">
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          v-model="state.phone1"
          label="Telefone"
          hide-details="auto"
        />
      </v-col>
    </v-row>
    <v-row v-if="state.listContact.length === 3">
      <v-col
        cols="12"
        sm="6"
        md="2"
      >
        <v-text-field
          v-model="state.phone2"
          label="Telefone"
          hide-details="auto"
        />
      </v-col>
    </v-row>
  </ExpansionPanel>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@vue/composition-api'
import ExpansionPanel from '@/components/ExpansionPanel.vue'

interface Contact {
  valor: string;
}

interface State {
  listContact: Array<Contact>;
  phoneMain: string;
  phone1: string;
  phone2: string;
}

interface SetupReturn {
  state: State;
  addNewContact: () => void;
}

export default defineComponent({
  components: {
    ExpansionPanel
  },

  setup (): SetupReturn {
    const state = reactive<State>({
      listContact: [
        { valor: '' }
      ],
      phoneMain: '',
      phone1: '',
      phone2: ''
    })

    watch(() => state.listContact, list => {
      console.log(list)
    })

    function addNewContact () {
      if (state.listContact.length === 3) {
        alert('Não é possivel adicionar mais contatos')
        return
      }
      state.listContact.push({} as Contact)
    }

    return {
      state,
      addNewContact
    }
  }
})
</script>

<style scoped>
.add-contact.v-btn.v-btn--is-elevated.v-btn--fab.v-btn--has-bg.v-btn--round.theme--dark.v-size--small {
  font-size: 0.8rem;
  background-color: #006699;
  color: #fff;
}

.remove-contact.v-btn.v-btn--is-elevated.v-btn--fab.v-btn--has-bg.v-btn--round.theme--dark.v-size--small {
  font-size: 0.8rem;
  background-color: #ff0000;
  color: #fff;
}
</style>
