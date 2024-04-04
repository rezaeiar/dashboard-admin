export type OrderType = {
    status: "REJECTED" | "PENDING" | "COMPLETED",
    total_price: number
}