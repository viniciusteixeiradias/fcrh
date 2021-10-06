<template>
  <v-col
    cols="12"
    xl="12"
    lg="12"
    md="12"
    sm="12"
  >
    <v-expansion-panels v-model="state.panel">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <div class="title-content">
            <div class="page-icon">
              <i :class="`fas ${iconName} fa-sm`" class="icon"></i>
            </div>
            {{ namePanel }}
          </div>
        </v-expansion-panel-header>
        <v-divider></v-divider>
        <v-expansion-panel-content class="panel-content">
          <slot />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

interface State {
  panel: number;
}

interface SetupReturn {
  state: State;
}

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true
    },
    namePanel: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  setup (props): SetupReturn {
    const state = reactive<State>({
      panel: props.open ? 0 : 1
    })
    return {
      state
    }
  }
})
</script>

<style lang="scss" scoped>
.title-content {
  font-size: 1.2rem;
  color: #005965;
  font-weight: 500;
}

.panel-content {
  margin-top: 10px;
}

.page-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #007484, #005965);
  border-radius: 6px;
  height: 2.5rem;
  width: 2.5rem;
}

.v-expansion-panel-header {
  padding: 8px 12px;
}

.icon {
  color: white;
}

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
}
</style>
