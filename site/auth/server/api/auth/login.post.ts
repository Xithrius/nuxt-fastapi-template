import { fastapi } from "../../utils/axios";

export default eventHandler(async (event) => {
  const session = await useAuthSession(event);

  const { email, password } = await readBody(event);

  const params = new URLSearchParams();
  params.append("username", email);
  params.append("password", password);

  const response = await fastapi
    .post("/api/auth/jwt/login", params)
    .catch((error) => {
      console.error(error);
    });

  const { data = null } = response || {};

  if (!data) {
    console.error("Response is null when logging in");
  }

  await session.update({
    jwt: data.access_token,
  });

  return session;
});
