import type { UserProfile, UserAction } from '../interfaces/interfaceUserProfile';

export const initialUser: UserProfile = {
  id: 1,
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
  },
  preferences: {
    theme: 'light',
    notifications: true,
    language: 'en',
  },
  stats: {
    loginCount: 0,
    lastLogin: new Date(),
    accountCreated: new Date(),
  },
};

export function userReducer(state: UserProfile, action: UserAction): UserProfile {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };
    case 'UPDATE_PREFERENCES':
      return { ...state, preferences: { ...state.preferences, ...action.payload } };
    case 'INCREMENT_LOGIN_COUNT':
      return {
        ...state,
        stats: { ...state.stats, loginCount: state.stats.loginCount + 1, lastLogin: new Date() },
      };
    case 'RESET':
      return initialUser;
    default:
      return state;
  }
}
