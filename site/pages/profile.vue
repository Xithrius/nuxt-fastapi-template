<script setup lang="ts">
useHead({
  title: "User Profile",
});

definePageMeta({
  auth: true,
});

const { data: session } = await useFetch("/api/auth/session", {
  headers: useRequestHeaders(["cookie"]),
});

const jwt = session.value?.jwt;

const userInfo = await $fetch("http://localhost:8000/api/users/me", {
  method: "GET",
  headers: { Authorization: `Bearer ${jwt}` },
});
</script>

<template>
  <div>
    <div>Email: {{ userInfo.email }}</div>
    <div>ID: {{ userInfo.id }}</div>
    <br />
    <UButton @click="authLogout()">Logout</UButton>
  </div>
</template>
