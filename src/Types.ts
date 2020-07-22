export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number|any;
};

export type Profile = {
  createdAt: Date;
  displayName: string;
  email: string;
  id: string;
};
