<script setup lang="ts">
const form = reactive({ email: "mail@example.com", password: "password" });
</script>

<template>
  <UContainer>
    <div class="items-center flex flex-col gap-y-4 mt-10">
      <UCard class="w-1/2">
        <div class="space-y-4">
          <UFormGroup label="Email" name="email">
            <UInput v-model="form.email" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="form.password" type="password" />
          </UFormGroup>

          <UButton label="Login" color="primary" block />

          <UDivider label="OR" />

          <UButton
            color="black"
            label="Login with GitHub"
            icon="i-simple-icons-github"
            block
          />
          <UButton
            color="black"
            label="Login with Google"
            icon="i-simple-icons-google"
            block
          />
        </div>
      </UCard>
    </div>
  </UContainer>
</template>

<!-- <template>
  <UContainer>
    <UCard class="mt-10">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
      </UForm>

      <div class="flex justify-between">
        <UInput
          color="primary"
          variant="outline"
          placeholder="Search..."
          label="Search"
          v-model="searchQuery"
          @keypress="handleKeyPress"
        />
      </div>
      <div>
        {{ apiMessage }}
      </div>
    </UCard>
  </UContainer>
</template> -->

<script lang="ts">
interface EchoResponse {
  message: string;
}

export default {
  data() {
    return {
      searchQuery: "",
      apiMessage: "",
    };
  },
  methods: {
    handleKeyPress(event: { key: string }) {
      if (event.key === "Enter") {
        this.performApiRequest();
      }
    },
    async performApiRequest() {
      const response: EchoResponse = await $fetch(
        "http://localhost:8000/api/echo",
        {
          method: "POST",
          body: { message: this.searchQuery },
        }
      );

      console.log(this.searchQuery, response.message);
      this.apiMessage = response.message;
    },
  },
};
</script>
