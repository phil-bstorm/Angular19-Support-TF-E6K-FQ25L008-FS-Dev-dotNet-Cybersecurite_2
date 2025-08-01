export interface IToken {
    accessToken : string;
    user : IMinimalUser;
}

export interface IMinimalUser{
    email : string;
    id : number;
}
