<script setup lang="ts">
const { $auth } = useNuxtApp();

const icon = computed(() =>
  $auth.session.value?.jwt ? "i-heroicons-lock-open" : "i-heroicons-lock-closed"
);
</script>

<template>
  <NuxtPageTemplate dir="auth/local" :icon="icon">
    <template #nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/secret">Secret</NuxtLink>
      <NuxtLink to="/login" v-if="!$auth.loggedIn.value">Login</NuxtLink>
      <NuxtLink to="/profile" v-else>Profile</NuxtLink>
    </template>
    <NuxtPage />
    <UNotifications />
  </NuxtPageTemplate>
</template>
