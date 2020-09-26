class Customer {
    private _firstName;
    private _lastName;
    
    //createa constructor for the customer class
    constructor(theFirst: string, theLast: string){
            this._firstName = theFirst;
            this._lastName = theLast;
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


// Let's create an instance
let anotherCustomer = new Customer("Martin", "Johnson");


console.log(anotherCustomer.firstName);
console.log(anotherCustomer.lastName);
