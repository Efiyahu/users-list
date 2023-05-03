import { Result } from './response';

const transformedUser = (user: Result) => ({
  title: user.name.title,
  name: user.name.first,
  lastName: user.name.last,
  country: user.location.country,
  city: user.location.city,
  street: user.location.street.name,
  id: user.login.uuid,
  streetNumber: user.location.street.number,
  email: user.email,
  imageUrl: user.picture.large,
});

export default transformedUser;

export type TransformedUser = {
  title: string;
  name: string;
  lastName: string;
  country: string;
  city: string;
  street: string;
  id: string;
  streetNumber: number;
  email: string;
  imageUrl?: string;
};
