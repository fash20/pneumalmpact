import { User } from "./authContext"

type Action =
  | { type: "SIGN_IN"; payload: User }
  | { type: "SIGN_OUT" };

export const reducer = (state: User | null, action: Action) => {
  switch (action.type) {
    case "SIGN_IN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    case "SIGN_OUT":
      localStorage.removeItem("user");
      return null;
    default:
      return state;
  }
};
