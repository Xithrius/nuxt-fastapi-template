<script setup lang="ts">
useHead({
  title: "Secret Page",
});

definePageMeta({
  auth: true,
});
</script>

<template>
  <div>
    Secret Page!
    <div>API Response: <code></code></div>
  </div>
</template>
