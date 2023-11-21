export interface ListBookDetail {
    handleClick: () => void;
    key: number;
    ID: number;
    title: string;
    author: string;
    description: string;
    price: number;
    genre: string;    
}

export interface RemoveFromCart {
    id: number;
}

export interface AddToCart {
    id: number;
}