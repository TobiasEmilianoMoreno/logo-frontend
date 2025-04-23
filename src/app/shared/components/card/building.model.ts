export interface Building {
  id: number;
  image: string;
  name: string;
  type: TypeBuilding;
  price: number;
  beds: number | null;
  floors: number | null;
  bathrooms: number | null;
  status: string | null;
  size: number;
  direction: string;
  sale: boolean;
}

export interface TypeBuilding {
  id: number;
  name: string;
}
