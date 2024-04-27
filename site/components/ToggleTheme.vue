<template>
  <div class="absolute top-10 right-10">
    <ColorScheme
      ><USelect
        v-model="$colorMode.preference"
        :options="['system', 'light', 'dark']"
    /></ColorScheme>
  </div>
</template>
