import type { Product, ProductFilter } from '../types/Product';

export class ProductService {
  private static products: Product[] = [
    {
      id: "1",
      name: "Laska inwalidzka - Kula łokciowa",
      slug: "kula-lokciowa",
      category: "laski",
      originalPrice: 69.99,
      salePrice: 45.00,
      image: "/images/products/kula-lokciowa.jpg",
      description: "Profesjonalna kula łokciowa z regulacją wysokości",
      detailedDescription: "Kula łokciowa to niezbędny sprzęt ortopedyczny dla osób wymagających wsparcia podczas chodzenia. Nasza kula charakteryzuje się solidną konstrukcją z aluminium oraz ergonomicznym uchwytem pokrytym miękkim materiałem antypoślizgowym. Regulowana wysokość pozwala na idealne dopasowanie do wzrostu użytkownika, zapewniając komfort i bezpieczeństwo podczas użytkowania.",
      features: [
        "Regulowana wysokość",
        "Antypoślizgowa końcówka",
        "Ergonomiczny uchwyt",
        "Maksymalne obciążenie: 120kg"
      ],
      technicalSpecs: [
        "Materiał: Aluminium 6061",
        "Wysokość: 65-95 cm",
        "Waga: 0.8 kg",
        "Maksymalne obciążenie: 120 kg",
        "Końcówka: Gumowa, antypoślizgowa",
        "Uchwyt: Ergonomiczny, pokryty TPR"
      ],
      nfzRefundable: true,
      nfzRefundPercentage: 80,
      availability: "dostępny",
      inStock: true,
      applications: [
        "Rehabilitacja po urazach kończyn dolnych",
        "Wsparcie podczas chodzenia",
        "Okres pooperacyjny",
        "Przewlekłe schorzenia ortopedyczne"
      ],
      indications: [
        "Urazy stawu skokowego",
        "Złamania kości podudzia",
        "Okres pooperacyjny",
        "Przewlekłe bóle stawów"
      ],
      contraindications: [
        "Niestabilność barku",
        "Ciężkie zaburzenia równowagi",
        "Brak siły w kończynach górnych"
      ],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: "2",
      name: "Stabilizator kostki",
      slug: "stabilizator-kostki",
      category: "stabilizatory",
      originalPrice: 159.00,
      salePrice: 118.00,
      image: "/images/products/stabilizator-kostki.jpg",
      description: "Stabilizator stawu skokowego z szynami bocznymi",
      detailedDescription: "Profesjonalny stabilizator stawu skokowego zapewniający optymalne wsparcie i stabilizację podczas rehabilitacji. Wyposażony w sztywne szyny boczne oraz system sznurowania pozwalający na precyzyjne dopasowanie. Oddychający materiał zapewnia komfort podczas długotrwałego użytkowania, a anatomiczny kształt gwarantuje idealne przyleganie do ciała.",
      features: [
        "Sztywne szyny boczne",
        "System sznurowania",
        "Oddychający materiał",
        "Rozmiary: S-XL"
      ],
      technicalSpecs: [
        "Materiał: Neopren + szyny aluminiowe",
        "Rozmiary: S, M, L, XL",
        "Wysokość: 25 cm",
        "Sznurowanie: 8 rzędów",
        "Szyny: Aluminiowe, regulowane",
        "Zapięcie: Velcro + sznurówki"
      ],
      nfzRefundable: true,
      nfzRefundPercentage: 70,
      availability: "na zamówienie",
      inStock: false,
      applications: [
        "Stabilizacja po urazach stawu skokowego",
        "Rehabilitacja po skręceniach",
        "Wsparcie podczas aktywności sportowej",
        "Przewlekła niestabilność stawu"
      ],
      indications: [
        "Skręcenia stawu skokowego",
        "Niestabilność stawu",
        "Okres rehabilitacji",
        "Aktywność sportowa"
      ],
      contraindications: [
        "Otwarte rany w okolicy stawu",
        "Alergia na neopren",
        "Ciężkie zaburzenia krążenia"
      ],
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20')
    },
    {
      id: "3",
      name: "Proteza nogi - Stopka Sach",
      slug: "proteza-stopka-sach",
      category: "protezy",
      originalPrice: 2199.00,
      salePrice: 1890.00,
      image: "/images/products/stopka-sach.jpg",
      description: "Stopka protezowa typu SACH do chodzenia",
      detailedDescription: "Stopka protezowa typu SACH (Solid Ankle Cushioned Heel) to zaawansowane rozwiązanie dla osób po amputacji kończyny dolnej. Charakteryzuje się naturalną amortyzacją oraz wytrzymałą konstrukcją, która zapewnia komfort podczas chodzenia. Specjalna budowa pięty pozwala na naturalny ruch stopy, a elastyczna podeszwa zapewnia odpowiednią przyczepność na różnych powierzchniach.",
      features: [
        "Wytrzymała konstrukcja",
        "Naturalna amortyzacja",
        "Dostępne rozmiary: 22-30",
        "Waga do 125kg"
      ],
      technicalSpecs: [
        "Typ: SACH (Solid Ankle Cushioned Heel)",
        "Rozmiary: 22-30 (EU)",
        "Maksymalne obciążenie: 125 kg",
        "Materiał: Poliuretan + włókno węglowe",
        "Wysokość obcasa: 2-4 cm",
        "Kąt stawu: Stały, 90°"
      ],
      nfzRefundable: true,
      nfzRefundPercentage: 90,
      availability: "dostępny",
      inStock: true,
      applications: [
        "Amputacje kończyny dolnej",
        "Rehabilitacja po amputacji",
        "Codzienna aktywność",
        "Chodzenie po różnych powierzchniach"
      ],
      indications: [
        "Amputacja na poziomie stopy",
        "Amputacja na poziomie podudzia",
        "Potrzeba stabilnego wsparcia",
        "Aktywny tryb życia"
      ],
      contraindications: [
        "Brak odpowiedniego kikuta",
        "Ciężkie zaburzenia równowagi",
        "Brak siły w kończynach górnych"
      ],
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10')
    },
    {
      id: "4",
      name: "Balkonik czterokołowy - Rollator",
      slug: "balkonik-rollator",
      category: "balkoniki",
      originalPrice: 459.00,
      salePrice: 379.00,
      image: "/images/products/rollator.jpg",
      description: "Aluminiowy balkonik rehabilitacyjny z kołami",
      detailedDescription: "Balkonik czterokołowy to idealne rozwiązanie dla osób wymagających wsparcia podczas chodzenia, ale zachowujących zdolność do samodzielnego poruszania się. Składana konstrukcja pozwala na łatwy transport i przechowywanie. Hamulce przy rączkach zapewniają bezpieczeństwo, a siedzisko z koszykiem umożliwia odpoczynek podczas spacerów.",
      features: [
        "Składana konstrukcja",
        "Hamulce przy rączkach",
        "Siedzisko i koszyk",
        "Regulowana wysokość"
      ],
      technicalSpecs: [
        "Materiał: Aluminium 6061",
        "Wysokość rączek: 80-95 cm",
        "Szerokość: 60 cm",
        "Waga: 8.5 kg",
        "Maksymalne obciążenie: 150 kg",
        "Koła: 20 cm, poliuretanowe"
      ],
      nfzRefundable: true,
      nfzRefundPercentage: 80,
      availability: "dostępny",
      inStock: true,
      applications: [
        "Rehabilitacja po urazach",
        "Wsparcie dla osób starszych",
        "Przewlekłe schorzenia ortopedyczne",
        "Okres pooperacyjny"
      ],
      indications: [
        "Osłabienie mięśni kończyn dolnych",
        "Problemy z równowagą",
        "Przewlekłe bóle stawów",
        "Okres rehabilitacji"
      ],
      contraindications: [
        "Ciężkie zaburzenia równowagi",
        "Brak siły w kończynach górnych",
        "Niestabilność barków"
      ],
      createdAt: new Date('2024-01-25'),
      updatedAt: new Date('2024-01-25')
    }
  ];

  static getAllProducts(): Product[] {
    return this.products;
  }

  static getFeaturedProducts(limit: number = 4): Product[] {
    return this.products
      .filter(product => product.availability === 'dostępny')
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
      { id: 'laski', name: 'Laski i kule', slug: 'laski' },
      { id: 'stabilizatory', name: 'Stabilizatory', slug: 'stabilizatory' },
      { id: 'protezy', name: 'Protezy', slug: 'protezy' },
      { id: 'wozki', name: 'Wózki inwalidzkie', slug: 'wozki' },
      { id: 'balkoniki', name: 'Balkoniki', slug: 'balkoniki' }
    ];

    return categories.map(category => ({
      ...category,
      productCount: this.products.filter(p => p.category === category.id).length
    }));
  }
} 