<script setup>
import { add, subtract } from "@monotest/util-funcs"

const t1 = ref(0)
const t2 = ref(0)

onMounted(() => {
  t1.value = add(1, 2)
  t2.value = subtract(4, 3)
})
</script>

<template>
  <div>
    {{ t1 }} - {{ t2 }}
  </div>
</template>
