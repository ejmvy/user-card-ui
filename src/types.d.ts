export type PersonState = {
  id: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
};
