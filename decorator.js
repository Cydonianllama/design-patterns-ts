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
var ComputeNormalPrice = /** @class */ (function () {
    function ComputeNormalPrice() {
    }
    ComputeNormalPrice.prototype.computePrice = function (price) {
        return price * 4 * 5;
    };
    return ComputeNormalPrice;
}());
var ComputePriceDecorator = /** @class */ (function () {
    function ComputePriceDecorator(component) {
        this.component = component;
    }
    ComputePriceDecorator.prototype.computePrice = function (price) {
        return this.component.computePrice(price);
    };
    return ComputePriceDecorator;
}());
var ComputePricewithCTS = /** @class */ (function (_super) {
    __extends(ComputePricewithCTS, _super);
    function ComputePricewithCTS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputePricewithCTS.prototype.computePrice = function (price) {
        var noProcessed = _super.prototype.computePrice.call(this, price);
        var result = noProcessed * 5;
        return result;
    };
    return ComputePricewithCTS;
}(ComputePriceDecorator));
var ComputePriceWithGratification = /** @class */ (function (_super) {
    __extends(ComputePriceWithGratification, _super);
    function ComputePriceWithGratification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputePriceWithGratification.prototype.computePrice = function (price) {
        return _super.prototype.computePrice.call(this, price) * 15;
    };
    return ComputePriceWithGratification;
}(ComputePriceDecorator));
var normal = new ComputeNormalPrice();
console.log(normal.computePrice(5));
var normalDecorator = new ComputePriceWithGratification(normal);
console.log(normalDecorator.computePrice(5));
