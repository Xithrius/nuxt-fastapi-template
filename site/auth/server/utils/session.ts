import type { H3Event, SessionConfig } from "h3";

const sessionConfig: SessionConfig = useRuntimeConfig().auth || {};

export type AuthSession = {
  jwt: string;
};

export const useAuthSession = async (event: H3Event) => {
  const session = await useSession<AuthSession>(event, sessionConfig);

  return session;
};

export const requireAuthSession = async (event: H3Event) => {
  const session = await useAuthSession(event);

  if (!session.data.jwt) {
    throw createError({
      message: "Not Authorized",
      statusCode: 401,
    });
  }

  return session;
};
