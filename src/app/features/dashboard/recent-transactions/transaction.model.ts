export interface Transaction{
    id: number;
    imageUrl: string;
    date: string;
    name: string;
    price: number;
    type: 'Rent' | 'Sell'; 
    status: 'Paid' | 'Unpaid'  
}