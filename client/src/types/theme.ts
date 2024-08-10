import { UserData } from "./user";

export interface ThemeCreate {
    
    name: string;
    description: string;
    type: `INGRESO` | `EGRESO`;
    
}

export interface ThemeData extends ThemeCreate {
    id: string;
    propietaryId:           string;
    propietaryReference:    UserData;
    
}
