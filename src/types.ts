export interface ListBookDetail {
    book: Book
    onClick: (book: Book) => void;
    key: number;
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    title: string;
    author: string;
    description: string;
    price: number;
    genre: string;    
}
export interface Book {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    title: string;
    author: string;
    description: string;
    price: number;
    genre: string;    
}

export interface PatchBookRequest {
    ID: number;
    title?: string;
    author?: string;
    description?: string;
    genre?: string; 
}

export interface RemoveFromCart {
    id: number;
}

export interface PutCartPayload {
    bookId: number;
}

export interface Cart {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    books: Book[];
}
export interface CartDetail {
    book: Book;
    onClick: (book: Book) => void;
}
export interface BaseServiceResult {
    status: number;
  }  
export interface SuccessServiceResult<TResult = undefined> extends BaseServiceResult {
    result: TResult;
}

export interface SingleCartDetail {
    book: Book;
    onClick: (book: Book) => void;
}