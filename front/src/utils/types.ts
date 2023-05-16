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


export type TabBuilderType = {
    type: 'text' | 'number' | 'price' | 'date' | 'image' | 'phone' | 'badge' | 'edit'
}

export interface TabBuilder {
    name: string,
    dbColumn: string,
    type: TabBuilderType["type"],
}

export interface IClient {
    address: string,
    createdAt: Date,
    email: string,
    firstName: string,
    id: string,
    isAdmin: boolean,
    lastName: string,
    phone: string,
}

export interface IGame {
    id: string,
    stock: number,
    img: string,
    price: number,
    description: string,
    name: string,
    minPlayer: number,
    maxPlayer: number,
    duration: string,
    type: GamesType
}
type GamesType = "BoardGame" | "CardGame" | "MiniatureGame" | "RolePlayingGame" | "CoopGame" | "StrategyGame" | "QuizGame" | "PartyGame";

export const GamesType = {
    BoardGame: "Jeu de Plateau",
    CardGame: "Jeu de Cartes",
    MiniatureGame: "Jeu de Figurines",
    RolePlayingGame: "Jeu de Rôle",
    CoopGame: "Jeu Coopératif",
    StrategyGame: "Jeu de Stratégie",
    QuizGame: "Jeu de Quiz",
    PartyGame: "Jeu d'Ambiance"
}
export const getGameType = (type: GamesType) => {
    return GamesType[type];
}
