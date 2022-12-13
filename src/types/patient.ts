

export enum department{
   Heart='Heart',
   Eye='Eye'

}

export  type Patient={
     
    id: string,
    name:string,
    email:string,
    phone:number,
    age:number,
    diagnosis:string,
    department:department,
    date: Date,

}

