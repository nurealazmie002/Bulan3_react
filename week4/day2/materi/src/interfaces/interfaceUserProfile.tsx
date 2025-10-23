export interface UserProfile {
  id: number;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
  };
  preferences: {
    theme: "light" | "dark" | "auto";
    notifications: boolean;
    language: string;
  };
  stats: {
    loginCount: number;
    lastLogin: Date;
    accountCreated: Date;
  };
}

export type UserAction =
  | { type: "UPDATE_PROFILE"; payload: Partial<UserProfile["personalInfo"]> }
  | { type: "UPDATE_PREFERENCES"; payload: Partial<UserProfile["preferences"]> }
  | { type: "INCREMENT_LOGIN_COUNT" }
  | { type: "RESET" };
