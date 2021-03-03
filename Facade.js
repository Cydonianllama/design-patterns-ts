var Facade = /** @class */ (function () {
    function Facade(UIsystem, HTTPclientSystem) {
        this.HTTPclientSystem = HTTPclientSystem;
        this.UIsystem = UIsystem;
    }
    Facade.prototype.run = function () {
        this.HTTPclientSystem.activatePetitions();
        this.UIsystem.render();
        //this.HTTPclientSystem.setNewUri('hola new uri')
        this.UIsystem.fetchData();
        console.log(this.HTTPclientSystem.getURI());
    };
    return Facade;
}());
var SystemUIcomponent = /** @class */ (function () {
    function SystemUIcomponent(HTTPclient) {
        this.HTTPclient = HTTPclient;
    }
    SystemUIcomponent.prototype.fetchData = function () {
        this.HTTPclient.activatePetitions();
        console.log('in fetch data : ', this.HTTPclient);
    };
    SystemUIcomponent.prototype.render = function () {
        console.log('we renderzie all');
    };
    return SystemUIcomponent;
}());
var SystemHTTPclient = /** @class */ (function () {
    function SystemHTTPclient() {
        this.myURI = 'uri master';
        console.log('my default URI', this.myURI);
    }
    SystemHTTPclient.prototype.getURI = function () {
        return this.myURI;
    };
    SystemHTTPclient.prototype.setNewUri = function (newURI) {
        this.myURI = newURI;
    };
    SystemHTTPclient.prototype.activatePetitions = function () {
        console.log('petitions activated');
    };
    return SystemHTTPclient;
}());
var clientHTTP = new SystemHTTPclient();
var components = new SystemUIcomponent(clientHTTP);
var App = new Facade(components, clientHTTP);
App.run();
clientHTTP.setNewUri('hola new uri wey');
