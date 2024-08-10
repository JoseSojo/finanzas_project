
export interface UserLogin {
    access:     string;
    password:   string;
}

export interface UserRegister {
    name:       string;
    lastname:   string;
    password:   string;
    username:   string;
    email:      string;
}

export interface UserData extends UserRegister {
    id:         string;
    createAt:   Date;
    updateAt:   Date;
}
