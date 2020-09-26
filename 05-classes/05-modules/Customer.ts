export class Customer {

    
    //createa constructor for the customer class
    constructor(private _firstName: string, private _lastName: string){
    }

    // create getters accessors

    public get lastName() {
        return this._lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    // create setters accessors
 
    public set lastName(value) {
        this._lastName = value;
    }
    
    public set firstName(firstName: string){
        this._firstName = firstName;
    }
}

