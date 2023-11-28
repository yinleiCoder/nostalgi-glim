<script setup lang="ts">
import { getCategory } from '@/apis/category'

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res)
}

getCategoryData()
</script>

<template>
  <div>mobile nav</div>
</template>
