export type ProductType = {
    inـstock?: boolean,
    name: string,
    description: string,
    count: number,
    price: number,
    tags: string[],
    weight: string,
    country: string,
    isDigital: boolean,
    categoryId: string,
    images: string[]
}