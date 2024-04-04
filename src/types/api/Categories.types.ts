import { ProductType } from "./Products.types"

export type CategoryType = {
    id?: string,
    image?: string | undefined,
    name: string,
    products?: ProductType[] | null,
    visibale?: boolean
}