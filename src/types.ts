export interface ListBookDetail {
    book: Book
    onClick: (book: Book) => void;
    key: number;
    ID: number;
    title: string;
    author: string;
    description: string;
    price: number;
    genre: string;    
}
export interface Book {
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

export interface PutCartPayload {
    bookId: number;
}

export interface ServiceCart {
    book: ListBookDetail[]
}


export interface CartDetail {
    handleClick: () => void;
    title: string;
}
export interface BaseServiceResult {
    status: number;
  }  
export interface SuccessServiceResult<TResult = undefined> extends BaseServiceResult {
    result: TResult;
}