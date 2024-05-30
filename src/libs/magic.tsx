import { Magic } from "magic-sdk";

const createMagic = (key: string) => {
  return typeof window !== "undefined" && new Magic(key);
};

const pubKey = process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY || "";
export const magic: any = createMagic(pubKey);
