import { Category, CategoryFilter, Product } from './typing';

const COUNTERS = {
  productID: 0,
};

export function nextProductID(): number {
  return ++COUNTERS.productID;
}

export const INITIAL_CATEGORIES: Category[] = ['Food', 'Weapon'];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: nextProductID(),
    name: 'Mushroom Pizza',
    description:
      'They say that a researcher once used very precise calculations to uncover the "fairest way to cut pizza," but as the process is far too bothersome, basically no one uses it...',
    category: 'Food',
    image: 'assets/images/Mushroom_Pizza_Event_Card.webp',
    price: 20.0,
    stock: 10,
    quantity: 0,
  },
  {
    id: nextProductID(),
    name: 'Mondstadt Hash Brown',
    description:
      'The sweet taste verifies the famous words of a certain famous gourmet known throughout Mondstadt -- a dish that may be called a regional specialty cannot taste bad.',
    category: 'Food',
    image: 'assets/images/Mondstadt_Hash_Brown_Event_Card.webp',
    price: 30.0,
    stock: 5,
    quantity: 0,
  },
  {
    id: nextProductID(),
    name: 'Handy Sword',
    description:
      'A handy steel sword that contains all manner of useful items in its sheath.',
    category: 'Weapon',
    image: 'assets/images/Travelers_Handy_Sword_Equipment_Card.webp',
    price: 199.99,
    stock: 2,
    quantity: 0,
  },
];

export const INITIAL_FILTER: CategoryFilter = INITIAL_CATEGORIES.reduce(
  (acc, category) => ({ ...acc, [category]: true }),
  {}
);
