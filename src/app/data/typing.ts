export type Category = string;

export type Product = {
  id: number;
  name: string;
  description: string;
  category: Category;
  image: string;
  price: number;
  stock: number;
  quantity: number;
};

export type CategoryFilter = {
  [category: Category]: boolean;
};

export type CategoryFilterEmit = {
  category: Category;
  isChecked: boolean;
};
