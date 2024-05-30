import { Magic } from "@magic-sdk/admin";

let magic = new Magic(process.env.MAGIC_SECRET_KEY);

export async function POST(request: any) {
  const didToken = magic.utils.parseAuthorizationHeader(
    request.headers.authorization
  );
  await magic.token.validate(didToken);

  return Response.json({ authenticated: true });
}
