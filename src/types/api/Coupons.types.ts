export type CouponType = {
    usage?: number,
    status?: "VALID" | "INVALID",
    code: string,
    name: string,
    type: string,
    value: string,
    duration: Date
}