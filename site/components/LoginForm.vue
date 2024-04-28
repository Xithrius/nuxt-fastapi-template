<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const form = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { email, password } = event.data;

  const formData = new URLSearchParams();
  formData.append("username", email);
  formData.append("password", password);

  const response = await $fetch("http://localhost:8000/api/auth/jwt/login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  console.log(response);
}
</script>

<!-- <script lang="ts">
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
</script> -->

<template>
  <UContainer>
    <div class="items-center flex flex-col gap-y-4 mt-10">
      <UCard class="w-1/2 space-y-4">
        <UForm
          :schema="schema"
          :state="form"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Email" name="email">
            <UInput v-model="form.email" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="form.password" type="password" />
          </UFormGroup>

          <UButton label="Login" color="primary" block type="submit" />
        </UForm>
      </UCard>
    </div>
  </UContainer>
</template>

<!--
<UInput
  color="primary"
  variant="outline"
  placeholder="Search..."
  label="Search"
  v-model="searchQuery"
  @keypress="handleKeyPress"
/> -->
