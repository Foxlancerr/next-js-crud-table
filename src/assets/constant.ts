import { EStatus, IProduct } from "@/types/ProductList.type";

export const productsListArr: IProduct[] = [
    {
        id: 0,
        "Product Name": "Smartphone",
        "category": "Electronics",
        "price": 599,
        status: EStatus.COMPLETE,

    },
    {
        id: 1,
        "Product Name": "Laptop",
        "category": "Electronics",
        price: 899,
        status: EStatus.CLOSE,

    },
    {
        id: 2,
        "Product Name": "Desk Chair",
        "category": "Furniture",
        price: 149,
        status: EStatus.COMPLETE,

    },
    {
        id: 3,
        "Product Name": "Running Shoes",
        "category": "Footwear",
        "price": 79,
        status: EStatus.CLOSE,

    },
    {
        id: 4,
        "Product Name": "Digital Camera",
        "category": "Electronics",
        "price": 399,
        status: EStatus.PENDING,

    },
    {
        id: 5,
        "Product Name": "Coffee Maker",
        "category": "Appliances",
        "price": 49,
        status: EStatus.CLOSE,

    },
    {
        id: 6,
        "Product Name": "TV Stand",
        "category": "Furniture",
        "price": 199,
        status: EStatus.PENDING,

    },
    {
        id: 7,
        "Product Name": "Headphones",
        "category": "Electronics",
        "price": 129,
        status: EStatus.COMPLETE

    },
    {
        id: 8,
        "Product Name": "Backpack",
        "category": "Bags",
        "price": 59,
        status: EStatus.CLOSE,

    },
    {
        id: 9,
        "Product Name": "Desk Lamp",
        "category": "Home Decor",
        "price": 29,
        status: EStatus.CLOSE,
    }
];


