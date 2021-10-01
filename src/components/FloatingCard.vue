<template>
  <v-col
    cols="12"
    xl="12"
    lg="12"
    md="12"
    sm="12"
  >
    <div class="content">
      <div class="page-content">
        <div>
          <div class="page-icon">
            <v-icon
              color="white"
              class="icon"
            >
              {{ iconName }}
            </v-icon>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 2000px;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}

.content {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  max-height: 100%;
  color: #000000;
}

.page-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 1rem 2.5rem 2.5rem 2.5rem;
  box-shadow: 0 5px 15px 0 var(--shadow);
  margin-bottom: 4rem;

  .page-icon {
    top: 0.75rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, #007484, #005965);
    border-radius: 8px;
    height: 3.40rem;
    width: 3.40rem;
  }
}

@media print {
  .page-content {
    box-shadow: none;
    padding: 0;

    .page-icon {
      display: none;
    }
  }

  .content {
    padding-top: 0;
  }
}
</style>
