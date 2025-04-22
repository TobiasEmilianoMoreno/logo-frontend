export interface Building {
  id: number;
  image: string;
  name: string;
  type: TypeBuilding;
  price: number;
  beds: number;
  bathrooms: number;
  size: number;
  direction: string;
}

export interface TypeBuilding {
  id: number;
  name: string;
}
