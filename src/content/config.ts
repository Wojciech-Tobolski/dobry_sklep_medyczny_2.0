import { z, defineCollection } from 'astro:content';

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    name: z.string().optional(),
    slug: z.string().optional(),
    category: z.enum(['laski', 'stabilizatory', 'protezy', 'wozki', 'balkoniki', 'ortezy', 'rehabilitacja', 'masaż']).optional(),
    originalPrice: z.number().optional(),
    salePrice: z.number().optional(),
    mainImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    shortDescription: z.string().optional(),
    detailedDescription: z.string().optional(),
    technicalSpecs: z.array(z.string()).optional(),
    nfzRefundable: z.boolean().optional(),
    nfzRefundPercentage: z.number().optional(),
    availability: z.enum(['dostępny', 'na zamówienie', 'brak', 'available']).optional(),
    rentalAvailable: z.boolean().optional(),
    rentalPrice: z.number().optional(),
  })
});

export const collections = {
  products: products,
}; 