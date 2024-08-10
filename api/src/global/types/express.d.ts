import { Request } from "express";


export interface RequetsUser extends Request {
    
    user: any;
}
