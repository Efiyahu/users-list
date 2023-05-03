import { apiRequest } from './client';
import { UserResponse } from './response';
import transformedUser from './transform';

const API = {
  getUsers: async (results?: number | undefined) => {
    const response = await apiRequest.get(`/`, {
      params: {
        results,
        exc: 'dob,id,nat,cell,registered,gender,phone,info',
      },
    });
    const data: Partial<UserResponse> = response.data;
    const transformedUsers = data.results?.map((result) =>
      transformedUser(result)
    );
    return transformedUsers;
  },
};

export default API;
