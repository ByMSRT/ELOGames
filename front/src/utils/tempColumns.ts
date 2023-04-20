import { TabBuilder } from "./types";

export const clientColumns: TabBuilder[] = [
    {
        name: 'Nom',
        dbColumn: 'lastname',
        type: 'text',
    },
    {
        name: 'Prénom',
        dbColumn: 'firstname',
        type: 'text',
    },
    {
        name: 'téléphone',
        dbColumn: 'phone',
        type: 'phone',
    },
    {
        name: 'Prix',
        dbColumn: 'price',
        type: 'price',
    },
];

export const billColumns: TabBuilder[] = [
    {
        name: 'N° Facture',
        dbColumn: 'id',
        type: 'text',
    },
    {
        name: 'Client (nom et prénom)',
        dbColumn: 'client',
        type: 'text',
    },
    {
        name: 'Date',
        dbColumn: 'createdAt',
        type: 'date',
    },
    {
        name: 'Status',
        dbColumn: 'status',
        type: 'badge',
    },
    {
        name: 'Jeux vendus',
        dbColumn: 'games',
        type: 'text',
    },
    {
        name: 'Prix',
        dbColumn: 'price',
        type: 'price',
    }
];

export const gameColumns: TabBuilder[] = [
    {
        name: 'N° Jeu',
        dbColumn: 'id',
        type: 'text',
    },
    {
        name: 'Nom du jeu',
        dbColumn: 'name',
        type: 'text',
    },
    {
        name: 'Stock',
        dbColumn: 'stock',
        type: 'badge',
    },
    {
        name: 'Prix',
        dbColumn: 'price',
        type: 'price',
    }
];