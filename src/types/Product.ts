export interface Product {
  id?: string;
  name?: string;
  title?: string;
  slug?: string;
  category?: 'laski' | 'stabilizatory' | 'protezy' | 'wozki' | 'balkoniki' | 'ortezy' | 'rehabilitacja' | 'masaż';
  originalPrice?: number;
  salePrice?: number;
  mainImage?: string;
  images?: string[];
  shortDescription?: string;
  detailedDescription?: string;
  technicalSpecs?: string[];
  nfzRefundable?: boolean;
  nfzRefundPercentage?: number;
  availability?: 'dostępny' | 'na zamówienie' | 'brak';
  rentalAvailable?: boolean;
  rentalPrice?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface NFZRefund {
  isRefundable: boolean;
  percentage?: number;
  maxAmount?: number;
  requiredDocuments: string[];
  processSteps: string[];
}

export interface ProductFilter {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  availability?: string;
  nfzRefundable?: boolean;
  sortBy?: 'name' | 'price' | 'price-desc' | 'newest';
} 