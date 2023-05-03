import { combineReducers } from '@reduxjs/toolkit';
import users from './user.reducer';

const rootReducer = combineReducers({ users });
type RootState = ReturnType<typeof rootReducer>;

export type { RootState };
export default rootReducer;
