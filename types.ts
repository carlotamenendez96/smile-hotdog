export interface MenuItem {
  name: string;
  price: string;
  ingredients?: string;
  imageUrl?: string;
  category?: 'soda' | 'water' | 'beer';
}