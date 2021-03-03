var Channel = /** @class */ (function () {
    function Channel() {
        this.susctibers = [];
        this.chanelName = "erick_";
    }
    Channel.prototype.attach = function (observer) {
        this.susctibers.push(observer);
    };
    Channel.prototype.detach = function (observer) {
        var index = this.susctibers.indexOf(observer);
        this.susctibers.splice(index);
    };
    Channel.prototype.notify = function () {
        var _this = this;
        this.susctibers.forEach(function (observer) {
            observer.update(_this);
        });
    };
    Channel.prototype.changeName = function (name) {
        this.chanelName = name;
        this.notify();
    };
    return Channel;
}());
var User = /** @class */ (function () {
    function User() {
        this.notifications = [];
    }
    User.prototype.getNotifications = function () {
        this.notifications.forEach(function (n) {
            console.log(n);
        });
    };
    User.prototype.update = function (channel) {
        var newnotification = channel.chanelName;
        this.notifications.push(newnotification);
    };
    return User;
}());
var _a = [new User(), new User(), new User(), new User()], user1 = _a[0], user2 = _a[1], user3 = _a[2], user4 = _a[3];
var channel = new Channel();
channel.attach(user1);
channel.attach(user2);
channel.attach(user3);
channel.attach(user4);
channel.changeName('el mas nah');
channel.changeName('tu loquillo');
channel.changeName('el caradura');
channel.changeName('dime erick');
channel.changeName('tutos y mas');
user1.getNotifications();
