export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
export interface ProductCart {
    product: Product;
    quantity: number;
    total: number;
}