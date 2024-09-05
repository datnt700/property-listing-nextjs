export interface CardType {
  id: number;
  image: string;
  title: string;
  description: string;
  capacity: { bedroom: number; people: number };
  location: string;
  price: number;
  rating: number;
  superhost: boolean;
}
