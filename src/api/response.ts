type Location = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

export type Name = {
  title: string;
  first: string;
  last: string;
};

type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type Dob = {
  date: Date;
  age: number;
};

type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

type Id = {
  name: string;
  value: string;
};

type Info = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type Result = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
};

export interface UserResponse {
  results: Result[];
  info: Info;
}
