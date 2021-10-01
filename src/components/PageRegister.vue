<template>
  <floating-card
    :icon-name="($route.meta && $route.meta.icon) || 'fa-users'"
    class="v-page"
  >
    <div class="v-page__header">
      <div class="v-page__title">
        <p v-if="customTitle">{{ customTitle }}</p>
        <div class="v-page__required-fields">
          <!-- Os campos com * são de preenchimento obrigatório -->
        </div>
      </div>

      <div class="v-page__actions">
        <v-btn
          class="registration-cancel-button"
          outlined
          @click="$router.go(-1)"
        >
          cancelar
        </v-btn>
        <v-btn class="registration-save-button">
          salvar
        </v-btn>
      </div>
    </div>

    <slot />
  </floating-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import FloatingCard from '@/components/FloatingCard.vue'

export default defineComponent({
  components: {
    FloatingCard
  },

  props: {
    customTitle: {
      type: String,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.v-page {
  padding: 1rem;
  color: #007484;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  &__title{
    font-size: 1.5rem;
    font-weight: bold;
    color: #007484;
  }

  &__required-fields {
    font-size: 10pt;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .v-btn {
    font-size: 15px;
    font-weight: bold;
    text-transform: capitalize;

    margin: 0 !important;
    padding: 0 !important;
  }
}

.registration-save-button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  background-color: #007484;
  color: white;
  width: 100px !important;
}

.registration-cancel-button {
  color: #007484;
  width: 100px;
}

@media screen and (max-width: 520px) {
  .v-page {
    &__header {
      flex-direction: column-reverse;
      margin: 2rem 0 0 0;

      &__actions {
        flex: 1;
        align-self: stretch;
        justify-content: space-between;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }

      .v-btn {
        flex: 1;
        max-width: max-content;
      }
    }
  }
}

@media print {
  .v-page {
    &__header {
      margin: 0;
    }

    &__actions {
      display: none;
    }

    .container {
      width: 100%;
    }

    .content {
      padding: 0;
    }
  }
}
</style>

<style>
  @media print {
    header,
    .page-icon {
      display: none;
    }
  }
</style>
