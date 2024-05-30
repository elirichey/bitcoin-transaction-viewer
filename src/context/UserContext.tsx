import { Dispatch, SetStateAction, createContext } from "react";

export const UserContext = createContext<
  [any | null, Dispatch<SetStateAction<any | null>>]
>([null, () => {}]);
