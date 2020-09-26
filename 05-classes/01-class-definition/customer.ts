class Customer {
    private _firstName: string;
    private _lastName: string;


    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;

    }

    set firstName(firstName: string): void{
        this._firstName = firstName;
    }

    set lastName(lastName: string): void {
        this._lastName = lastName;
    }

    get firstName(): string{
        return this._firstName;
    }


     get lastName(): string {
        return this._lastName;
    }

}


let myCustomer = new Customer("Martin", "Lawren");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

