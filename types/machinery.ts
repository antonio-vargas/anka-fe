export interface MachinaryImages {
  image_link: string
  display_order: number
}

export interface MachinaryPropertyObject {
  id: number
  name: string
  createdAt?: string
}

export interface MachineryCategory {
  id: number
  name: string
  createdAt?: string
  children: MachinaryPropertyObject[]
}

export interface MachineryAttachment {
  id: number
  field_name: string
  file_link: string
  file_name: string
}

export interface IMachinery {
  id: number | null;
  name: string;
  slug: string;
  description: string;
  mfg_year: string;
  weight: number;
  hourmeter: number;
  odometer: number;
  technical_datasheet_link: string;
  preventive_maintenance_link: string;
  corrective_maintenance_link: string;
  is_for_sale: boolean;
  is_for_rent: boolean;
  complementary_service: string;
  category: MachineryCategory;
  subcategory: MachinaryPropertyObject;
  brand: MachinaryPropertyObject;
  location: MachinaryPropertyObject;
  images: MachinaryImages[];
  attachments: MachineryAttachment[];
  createdAt: string;
}
