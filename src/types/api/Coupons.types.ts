export type CouponType = {
    usage: number,
    status: "VALID" | "INVALID",
    code: string,
    name: string
}