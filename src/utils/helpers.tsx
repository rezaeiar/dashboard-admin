export const idGenerator = (id: string) => {
    
    const idFormat = 5;
    const zeroLength = idFormat - id.length;
    let idResult: String[] = []

    new Array(zeroLength).fill(0).map(() => {
        idResult.push("0")
    })
    idResult.push(id)

    return idResult.join("")
}

export const statusStyleGenerator = (status: "COMPLETED" | "PENDING" | "REJECTED") => {

    switch (status) {
        case "COMPLETED": {
            return 'bg-green-30 text-green-101'
        }
        case "PENDING": {
            return "bg-yellow-30 text-yellow-101"
        }
        case "REJECTED": {
            return "bg-red-30 text-red-101"
        }
    }
}