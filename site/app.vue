<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
const { data, pending, error, refresh } = await useFetch(
  "http://localhost:8000/api/echo",
  { method: "POST", body: { message: "asdf" } }
);
</script>
