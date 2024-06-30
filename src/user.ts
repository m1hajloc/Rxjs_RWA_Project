export class Human{
    name:string;
    email:string;
    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
    set _name(name:string){
        this.name=name;
    }

}