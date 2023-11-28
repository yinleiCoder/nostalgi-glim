<script setup lang="ts">
import { isMobileDevice } from '@/utils/flexible'
import MobileNavigation from './mobile/index.vue'
import PCNavigation from './pc/index.vue'
</script>

<template>
  <MobileNavigation v-if="isMobileDevice" />
</template>
