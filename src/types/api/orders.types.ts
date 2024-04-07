export type OrderType = {
    status: "REJECTED" | "PENDING" | "COMPLETED",
    total_price: number
}

export type OrderPostType = {
    product_count: number,
    productId: string,
    email: string
}