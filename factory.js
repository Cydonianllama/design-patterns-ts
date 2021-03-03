var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FactoryMarine = /** @class */ (function () {
    function FactoryMarine() {
    }
    FactoryMarine.prototype.shoot = function () {
        var Marine = this.factoryCreator();
        Marine.shoot();
    };
    return FactoryMarine;
}());
var ConcreteFactoryNormal = /** @class */ (function (_super) {
    __extends(ConcreteFactoryNormal, _super);
    function ConcreteFactoryNormal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteFactoryNormal.prototype.factoryCreator = function () {
        return new NormalMarine();
    };
    return ConcreteFactoryNormal;
}(FactoryMarine));
var ConcreteFactoryPower = /** @class */ (function (_super) {
    __extends(ConcreteFactoryPower, _super);
    function ConcreteFactoryPower() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteFactoryPower.prototype.factoryCreator = function () {
        return new PowerMarine();
    };
    return ConcreteFactoryPower;
}(FactoryMarine));
var NormalMarine = /** @class */ (function () {
    function NormalMarine() {
    }
    NormalMarine.prototype.shoot = function () {
        console.log('normal marine shooting');
    };
    return NormalMarine;
}());
var PowerMarine = /** @class */ (function () {
    function PowerMarine() {
        this.state = {};
    }
    PowerMarine.prototype.shoot = function () {
        console.log('power marine shooting');
    };
    return PowerMarine;
}());
var POWER_MARINE = 'POWER_MARINE';
var NORMAL_MARINE = 'NORMAL_MARINE';
var Manager = /** @class */ (function () {
    function Manager(factory) {
        factory.shoot();
    }
    return Manager;
}());
var erick = new Manager(new ConcreteFactoryNormal());
