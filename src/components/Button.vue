<script setup lang="ts">
import { reactive } from "vue"

interface Props {
  primary?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
})

const { primary } = reactive(props)
</script>

<template>
  <button class="btn" :class="{ primary: primary }">
    <slot />
  </button>
</template>
