class Customer {
    private _firstName;
    private _lastName;


    //createa constructor for the customer class
    constructor(firstName: string, lastName: string){
            this._firstName = firstName;
            this._lastName = lastName;
    }

    // create getters accessors
    public get lastName(): string {
        return this._lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    // create setters accessors
    public set lastName(lastName: string): void{
        this._lastName = lastName
    }

    public set firstName(firstName: string): void{
        this._firstName = firstName;
    }
}

