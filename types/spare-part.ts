export interface SparePartImages {
  id: number
  image_link: string
  display_order: number
}

export interface SparePartPropertyObject {
  id: number
  name: string
  createdAt?: string
}

export interface SparePartCompatibility {
  id: number
  subcategory: SparePartPropertyObject
}

export interface ISparePart {
  id: number | null;
  name: string;
  slug: string;
  description: string;
  compatibility: SparePartCompatibility[];
  part_number: string;
  complementary_service: string;
  // category: MachineryCategory;
  // subcategory: SparePartPropertyObject;
  brand: SparePartPropertyObject;
  location: SparePartPropertyObject;
  images: SparePartImages[];
  createdAt: string;
}
