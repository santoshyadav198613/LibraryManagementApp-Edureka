import { Staff } from './staff';
import { Books } from './books';

export class Book {
    subject: string;
    date: Date;
    staff: Staff;
    books: Books[];
}
