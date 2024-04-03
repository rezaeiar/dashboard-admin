import { CategoryType } from "./Categories.types"

export type ProductType = {
    name: string,
    inـstock: boolean,
    count: number,
    price: number,
    unique_id: string,
    category: CategoryType | null
}