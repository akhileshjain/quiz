export interface IUser {
    _id: string;
    username: string;
    password: string;
    phone:string,
    email: string;
    isRegistered: boolean;
    type: number;
    role: string
  }
  
  export interface IUserInputDTO {
    name: string;
    email: string;
    password: string;
  }