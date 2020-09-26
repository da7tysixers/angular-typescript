class Customer {
    private _firstName: string;
    private _lastName: string;


    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;

    }

    public setFirstName(firstName: string): void{
        this._firstName = firstName;
    }

    public setLastName(lastName: string): void {
        this._lastName = lastName;
    }

    public getFirstName(): string{
        return this._firstName;
    }


    public getLastName(): string {
        return this._lastName;
    }

}


let myCustomer = new Customer("Martin", "Lawren");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

