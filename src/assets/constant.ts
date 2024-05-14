export const enum EStatus {
    PENDING = 'pending',
    COMPLETE = 'complete',
    CLOSE = 'close'
}
export interface IProduct {
    id: number,
    "Product Name": string,
    category: string,
    price: number,
    status: EStatus,

}

export const productsListArr: IProduct[] = [
    {
        id: 1,
        "Product Name": "Smartphone",
        "category": "Electronics",
        "price": 599,
        status: EStatus.COMPLETE,

    },
    {
        id: 2,
        "Product Name": "Laptop",
        "category": "Electronics",
        "price": 899,
        status: EStatus.CLOSE,

    },
    {
        id: 3,
        "Product Name": "Desk Chair",
        "category": "Furniture",
        "price": 149,
        status: EStatus.COMPLETE,

    },
    {
        id: 4,
        "Product Name": "Running Shoes",
        "category": "Footwear",
        "price": 79,
        status: EStatus.CLOSE,

    },
    {
        id: 5,
        "Product Name": "Digital Camera",
        "category": "Electronics",
        "price": 399,
        status: EStatus.PENDING,

    },
    {
        id: 6,
        "Product Name": "Coffee Maker",
        "category": "Appliances",
        "price": 49,
        status: EStatus.CLOSE,

    },
    {
        id: 7,
        "Product Name": "TV Stand",
        "category": "Furniture",
        "price": 199,
        status: EStatus.PENDING,

    },
    {
        id: 8,
        "Product Name": "Headphones",
        "category": "Electronics",
        "price": 129,
        status: EStatus.COMPLETE

    },
    {
        id: 9,
        "Product Name": "Backpack",
        "category": "Bags",
        "price": 59,
        status: EStatus.CLOSE,

    },
    {
        id: 10,
        "Product Name": "Desk Lamp",
        "category": "Home Decor",
        "price": 29,
        status: EStatus.CLOSE,

    }
];


