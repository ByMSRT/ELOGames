export interface IProfile {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    isAdmin: boolean,
    password: string,
    address: string,
    phone: string
}

export interface IInvoice {
    id: string,
    isPaid: boolean,
    finalPrice: Float32Array,
    paidAt: Date,
    billingAddress: string,
    shippingAddress: string,
    invoicesGames: IInvoiceGame[],
    createdAt: Date
}


export interface IClient {
    invoices: IInvoice[],
    profile: IProfile,
}

export interface IInvoiceGame {
    game: IGame,
    quantity: number
}

export interface IGame {
    id: string,
    img: string,
    name: string,
    price: Float32Array,
    stock: number,
    maxPlayer: number,
    minPlayer: number,
    duration: string,
    description: string,
}
export type TabBuilderType = {
    type: 'text' | 'number' | 'price' | 'date' | 'image' | 'phone' | 'badge'
}

export interface TabBuilder {
    name: string,
    dbColumn: string,
    type: TabBuilderType["type"],
}

