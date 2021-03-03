var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.getInstance = function () {
        if (!this.myClass)
            this.myClass = new MyClass();
        return this.myClass;
    };
    MyClass.prototype.aMethod = function () {
        console.log('hello method singleton');
    };
    return MyClass;
}());
var myclass = MyClass.getInstance();
myclass.aMethod();
