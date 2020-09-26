var Customer = /** @class */ (function () {
    //createa constructor for the customer class
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "lastName", {
        // create getters accessors
        get: function () {
            return this._lastName;
        },
        // create setters accessors
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Let's create an instance
var anotherCustomer = new Customer("Martin", "Johnson");
console.log(anotherCustomer.firstName);
console.log(anotherCustomer.lastName);
