import type { Product, ProductFilter } from '../types/Product';

export class ProductService {
  private static products: Product[] = [
    {
      id: "1",
      name: "Pas lędźwiowy Lumbamed Basic",
      slug: "pas-ledzwiowy-lumbamed",
      category: "ortezy",
      originalPrice: 299.99,
      salePrice: 249.99,
      mainImage: "/images/products/lumbamed-basic.jpeg",
      images: [
        "/images/products/lumbamed-basic-main.jpeg",
        "/images/products/lumbamed-basic-detail.jpeg",
        "/images/products/lumbamed-basic.jpeg"
      ],
      shortDescription: "Profesjonalny pas lędźwiowy do leczenia bólów kręgosłupa i stabilizacji odcinka lędźwiowego",
      detailedDescription: "Pas lędźwiowy Lumbamed Basic to wysokiej jakości orteza przeznaczona do leczenia bólów kręgosłupa w odcinku lędźwiowym. Wykonany z oddychających materiałów, zapewnia komfort noszenia przez cały dzień. Pas wyposażony jest w system regulacji, który pozwala na idealne dopasowanie do indywidualnych potrzeb pacjenta.",
      technicalSpecs: [
        "Materiał: oddychający neopren",
        "Szerokość: 20 cm",
        "Wysokość: 25 cm",
        "Rozmiary: S, M, L, XL",
        "Waga: 350g"
      ],
      nfzRefundable: true,
      nfzRefundPercentage: 80,
      availability: "dostępny",
      rentalAvailable: true,
      rentalPrice: 15.00,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: "2",
      name: "Polar Care Wave",
      slug: "polar-care-wave",
      category: "rehabilitacja",
      originalPrice: 899.99,
      salePrice: 749.99,
      mainImage: "/images/products/polar-care-wave.jpg",
      images: [
        "/images/products/polar-care-wave.jpg"
      ],
      shortDescription: "Zaawansowany system krioterapii do leczenia bólu i obrzęków",
      detailedDescription: "Polar Care Wave to nowoczesny system krioterapii, który łączy w sobie zalety zimna i kompresji. Idealny do leczenia bólu, obrzęków i stanów zapalnych po urazach i operacjach. System automatycznie reguluje temperaturę i ciśnienie, zapewniając optymalną terapię.",
      technicalSpecs: [
        "Temperatura: 5-15°C",
        "Ciśnienie: regulowane",
        "Czas pracy: do 6 godzin",
        "Zasilanie: baterie lub sieć",
        "Waga: 2.5 kg"
      ],
      nfzRefundable: true,
      nfzRefundPercentage: 70,
      availability: "dostępny",
      rentalAvailable: true,
      rentalPrice: 25.00,
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20')
    },
    {
      id: "3",
      name: "Stabilizator Achimed",
      slug: "stabilizator-achimed",
      category: "stabilizatory",
      originalPrice: 399.99,
      salePrice: 329.99,
      mainImage: "/images/products/achimed-side.jpeg",
      images: [
        "/images/products/achimed-both-feet.jpg",
        "/images/products/achimed-detail.jpeg",
        "/images/products/achimed-side-view.jpeg",
        "/images/products/achimed-side.jpeg"
      ],
      shortDescription: "Stabilizator stawu skokowego z zaawansowaną technologią",
      detailedDescription: "Stabilizator Achimed to profesjonalny sprzęt ortopedyczny przeznaczony do stabilizacji stawu skokowego. Wykonany z najwyższej jakości materiałów, zapewnia optymalne wsparcie podczas rehabilitacji i aktywności sportowej.",
      technicalSpecs: [
        "Materiał: neopren + szyny aluminiowe",
        "Rozmiary: S, M, L, XL",
        "Wysokość: 30 cm",
        "Sznurowanie: 10 rzędów",
        "Szyny: regulowane"
      ],
      nfzRefundable: true,
      nfzRefundPercentage: 80,
      availability: "dostępny",
      rentalAvailable: false,
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10')
    },
    {
      id: "4",
      name: "Theragun Elite",
      slug: "theragun-elite",
      category: "masaż",
      originalPrice: 1299.99,
      salePrice: 1099.99,
      mainImage: "/images/products/theragun-elite.jpg",
      images: [
        "/images/products/theragun-elite.jpg"
      ],
      shortDescription: "Profesjonalny masażer wibracyjny do terapii mięśni",
      detailedDescription: "Theragun Elite to zaawansowany masażer wibracyjny, który wykorzystuje technologię percussive therapy do głębokiego masażu mięśni. Idealny do terapii bólu, regeneracji mięśni i poprawy mobilności. Urządzenie oferuje 5 prędkości i 4 końcówki do różnych zastosowań.",
      technicalSpecs: [
        "Prędkości: 5 poziomów (1750-2400 uderzeń/min)",
        "Głębokość: 16 mm",
        "Czas pracy: do 2.5 godziny",
        "Zasilanie: bateria litowo-jonowa",
        "Waga: 1.5 kg"
      ],
      nfzRefundable: false,
      nfzRefundPercentage: 0,
      availability: "dostępny",
      rentalAvailable: true,
      rentalPrice: 35.00,
      createdAt: new Date('2024-01-25'),
      updatedAt: new Date('2024-01-25')
    }
  ];

  static getAllProducts(): Product[] {
    return [...this.products];
  }

  static getFeaturedProducts(limit: number = 4): Product[] {
    return this.products
      .filter(product => product.availability === "dostępny")
      .slice(0, limit);
  }

  static getProductBySlug(slug: string): Product | undefined {
    return this.products.find(product => product.slug === slug);
  }

  static getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  static getSimilarProducts(currentProduct: Product, limit: number = 3): Product[] {
    return this.products
      .filter(product => 
        product.id !== currentProduct.id && 
        product.category === currentProduct.category
      )
      .slice(0, limit);
  }

  static filterProducts(filters: ProductFilter): Product[] {
    let filtered = [...this.products];

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.salePrice >= filters.priceRange!.min && 
        product.salePrice <= filters.priceRange!.max
      );
    }

    if (filters.availability) {
      filtered = filtered.filter(product => product.availability === filters.availability);
    }

    if (filters.nfzRefundable !== undefined) {
      filtered = filtered.filter(product => product.nfzRefundable === filters.nfzRefundable);
    }

    // Sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'price':
          filtered.sort((a, b) => a.salePrice - b.salePrice);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.salePrice - a.salePrice);
          break;
        case 'newest':
          filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
          break;
      }
    }

    return filtered;
  }

  static calculateNFZRefund(product: Product): number {
    if (!product.nfzRefundable || !product.nfzRefundPercentage) {
      return 0;
    }
    return Math.round((product.salePrice * product.nfzRefundPercentage) / 100);
  }

  static getNFZRefundInfo(product: Product): {
    isRefundable: boolean;
    percentage: number;
    refundAmount: number;
    patientCost: number;
  } {
    const isRefundable = product.nfzRefundable;
    const percentage = product.nfzRefundPercentage || 0;
    const refundAmount = this.calculateNFZRefund(product);
    const patientCost = product.salePrice - refundAmount;

    return {
      isRefundable,
      percentage,
      refundAmount,
      patientCost
    };
  }

  static getCategories(): Array<{
    id: string;
    name: string;
    slug: string;
    productCount: number;
  }> {
    const categories = [
      { id: 'ortezy', name: 'Ortezy', slug: 'ortezy' },
      { id: 'stabilizatory', name: 'Stabilizatory', slug: 'stabilizatory' },
      { id: 'rehabilitacja', name: 'Rehabilitacja', slug: 'rehabilitacja' },
      { id: 'masaż', name: 'Masaż', slug: 'masaż' }
    ];

    return categories.map(category => ({
      ...category,
      productCount: this.products.filter(p => p.category === category.id).length
    }));
  }
} 