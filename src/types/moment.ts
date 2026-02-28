export type Category = 
  | 'Special Date' 
  | 'Chapter II' 
  | 'Adventure' 
  | 'Daily Life' 
  | 'Achievement' 
  | 'Little Moments' 
  | 'Special Event' 
  | 'Home' 
  | 'Safe Place' 
  | 'Trip' 
  | 'Inicio';
export interface VisualMoment {
    id: number;
    title: string;
    description: string;
    date: string;
    category: Category;
    type: 'image' | 'video';
    url: string;
}
