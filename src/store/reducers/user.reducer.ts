import { createSlice } from '@reduxjs/toolkit';
import { TransformedUser } from '@src/api/transform';

export type UserState = {
  users: TransformedUser[];
  currentUserId: string | null;
};

const initialState: UserState = {
  users: [],
  currentUserId: null,
};

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser: (state, action) => ({
      ...state,
      currentUserId: action.payload,
    }),
    setUsers: (
      state,
      action: { type?: string; payload: TransformedUser[] }
    ) => ({
      ...state,
      users: action.payload,
    }),
    addUser: (state, action: { type?: string; payload: TransformedUser }) => ({
      ...state,
      users: [...state.users, action.payload],
    }),
    editUser: (
      state: {
        users: TransformedUser[];
        currentUserId: string | null;
      },
      action: {
        payload: Pick<
          TransformedUser,
          'name' | 'email' | 'country' | 'city' | 'id' | 'street'
        >;
      }
    ) => ({
      ...state,
      users: state.users.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              name: action.payload.name,
              city: action.payload.city,
              email: action.payload.email,
              country: action.payload.country,
              street: action.payload.street,
            }
          : user
      ),
    }),
    deleteUser: (
      state: {
        users: TransformedUser[];
        currentUserId: string | null;
      },
      action: { payload: string }
    ) => ({
      ...state,
      users: state.users.filter((user) => user.id !== action.payload),
    }),
  },
});

export default users.reducer;

export const { selectUser, setUsers, addUser, editUser, deleteUser } =
  users.actions;
