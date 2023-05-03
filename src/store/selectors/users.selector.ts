import { RootState } from '../reducers';

const usersSelector = (state: RootState) => state.users;

const users = (state: RootState) => usersSelector(state).users;

const userCurrentId = (state: RootState) => usersSelector(state).currentUserId;

const UserSelector = { users, userCurrentId, usersSelector };

export default UserSelector;
