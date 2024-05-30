import { Magic } from "@magic-sdk/admin";

const mAdmin = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function login(req: any, res: any) {
  try {
    const didToken: string = mAdmin.utils.parseAuthorizationHeader(
      req?.headers?.authorization
    );
    await mAdmin.token.validate(didToken);
    res.status(200).json({ authenticated: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
