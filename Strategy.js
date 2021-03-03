var Passport = /** @class */ (function () {
    function Passport(strategy) {
        this.strategy = strategy;
    }
    Passport.prototype.processConfigStrategy = function () {
        console.log('process config');
        this.strategy.initialyze();
        this.strategy.serialize();
    };
    Passport.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    return Passport;
}());
var AuthJWT = /** @class */ (function () {
    function AuthJWT() {
    }
    AuthJWT.prototype.initialyze = function () {
        console.log('initialize JWT');
    };
    AuthJWT.prototype.serialize = function () {
        console.log('serialize JWT');
    };
    return AuthJWT;
}());
var AuthLocal = /** @class */ (function () {
    function AuthLocal() {
    }
    AuthLocal.prototype.initialyze = function () {
        console.log('initialyze local');
    };
    AuthLocal.prototype.serialize = function () {
        console.log('serialize local');
    };
    return AuthLocal;
}());
var passport = new Passport(new AuthJWT());
passport.processConfigStrategy();
passport.setStrategy(new AuthLocal());
passport.processConfigStrategy();
