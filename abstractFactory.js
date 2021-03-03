var ConcreteLightComponentFactory = /** @class */ (function () {
    function ConcreteLightComponentFactory() {
    }
    ConcreteLightComponentFactory.prototype.createNav = function () {
        return new NavLight();
    };
    ConcreteLightComponentFactory.prototype.createHero = function () {
        return new HeroLight();
    };
    return ConcreteLightComponentFactory;
}());
var ConcreteDarkComponentFactory = /** @class */ (function () {
    function ConcreteDarkComponentFactory() {
    }
    ConcreteDarkComponentFactory.prototype.createNav = function () {
        return new NavDark();
    };
    ConcreteDarkComponentFactory.prototype.createHero = function () {
        return new HeroDark();
    };
    return ConcreteDarkComponentFactory;
}());
var NavDark = /** @class */ (function () {
    function NavDark() {
    }
    NavDark.prototype.createItemNav = function () {
    };
    return NavDark;
}());
var NavLight = /** @class */ (function () {
    function NavLight() {
    }
    NavLight.prototype.createItemNav = function () {
    };
    return NavLight;
}());
var HeroDark = /** @class */ (function () {
    function HeroDark() {
    }
    HeroDark.prototype.createCTA = function () {
        console.log('_____dark cta');
    };
    return HeroDark;
}());
var HeroLight = /** @class */ (function () {
    function HeroLight() {
    }
    HeroLight.prototype.createCTA = function () {
        console.log('light cta______');
    };
    return HeroLight;
}());
function App(aFactory) {
    var hero = aFactory.createHero();
    var nav = aFactory.createNav();
    hero.createCTA();
    nav.createItemNav();
}
var switchModesBg = document.getElementById('darkmode-switch');
switchModesBg.addEventListener('click', function (event) {
    var mode = this.checked ? 'LIGHT' : 'DARK';
    console.log(mode);
    switch (mode) {
        case 'DARK':
            App(new ConcreteDarkComponentFactory());
            break;
        case 'LIGHT':
            App(new ConcreteLightComponentFactory());
            break;
    }
});
