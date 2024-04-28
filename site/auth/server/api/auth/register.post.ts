import { fastapi } from "../../utils/axios";

export default eventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const response = await fastapi
    .post("/api/auth/register", {
      email: email,
      password: password,
      is_active: true,
      is_superuser: false,
      is_verified: false,
    })
    .catch((error) => {
      console.error(error);
    });

  const { data = null } = response || {};

  if (!data) {
    console.error("Response is null when logging in");
  }

  return {
    message: "Successfully registered!",
  };
});
