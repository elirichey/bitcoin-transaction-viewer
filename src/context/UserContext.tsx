import { Dispatch, SetStateAction, createContext } from "react";

//interface UserContextType {
//  user: any | null;
//  setUser: Dispatch<SetStateAction<any | null>>;
//}

//export const UserContext = createContext<UserContextType>({
//  user: null,
//  setUser: () => {},
//});

export const UserContext = createContext<
  [any | null, React.Dispatch<React.SetStateAction<any | null>>]
>([null, () => {}]);
