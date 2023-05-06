import { createContext } from "react";

export type User = {
  name: string;
  email: string;
  token: string;
  isVerified: boolean;
};

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async (email: string, password: string) => {},
  signOut: () => {},
});
