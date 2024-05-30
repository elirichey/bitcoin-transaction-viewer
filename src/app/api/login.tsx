import { Magic } from "@magic-sdk/admin";

let mAdmin = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function login(req: any, res: any) {
  try {
    const didToken = mAdmin.utils.parseAuthorizationHeader(
      req?.headers?.authorization
    );

    console.log(2, { didToken });

    const test = await mAdmin.token.validate(didToken);
    console.log(3, { test });

    res.status(200).json({ authenticated: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
