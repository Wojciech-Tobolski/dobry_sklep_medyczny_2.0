export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'laski' | 'stabilizatory' | 'protezy' | 'wozki' | 'balkoniki';
  originalPrice: number;
  salePrice: number;
  image: string;
  description: string;
  detailedDescription: string;
  features: string[];
  technicalSpecs: string[];
  nfzRefundable: boolean;
  nfzRefundPercentage?: number;
  availability: 'dostępny' | 'na zamówienie' | 'brak';
  inStock: boolean;
  images?: string[];
  applications?: string[];
  indications?: string[];
  contraindications?: string[];
  createdAt: Date;
  updatedAt: Date;
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