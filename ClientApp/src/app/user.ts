import {UserRole} from 'src/app/Models/userRole';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
    userRole: UserRole
}
