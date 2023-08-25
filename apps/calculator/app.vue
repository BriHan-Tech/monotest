<script setup>
import { add, subtract, addOne } from "@monotest/util-funcs"

const t1 = ref(0)
const t2 = ref(0)
const t3 = ref(1)

onMounted(() => {
  t1.value = add(1, 2)
  t2.value = subtract(4, 3)
  t3.value = addOne(t3.value)
})
</script>

<template>
  <div>
    {{ t1 }} - {{ t2 }}
  </div>
  <div>
    {{ t3 }}
  </div>
</template>
