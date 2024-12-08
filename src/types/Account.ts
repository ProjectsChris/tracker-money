export interface Account {
    name: string
    bank: string
}

export interface AccountAPI {
    data: {
        name: string
        bank: string
    }[]
}