interface AbstractFactoryTheme{
    createNav()
    createHero()
}

class ConcreteLightComponentFactory implements AbstractFactoryTheme{
    
    createNav(){
        return new NavLight()
    }

    createHero(){
        return new HeroLight()
    }

}

class ConcreteDarkComponentFactory implements AbstractFactoryTheme{
    
    createNav() {
        return new NavDark()
    }

    createHero() {
        return new HeroDark()
    }

}

interface Inav{
    createItemNav()
}

class NavDark implements Inav{

    createItemNav(){

    }

}

class NavLight implements Inav{

    createItemNav(){

    }

}


interface Ihero{
    createCTA()
}

class HeroDark implements Ihero{

    createCTA(){
        console.log('_____dark cta')
    }

}

class HeroLight implements Ihero{

    createCTA(){
        console.log('light cta______')
    }

}

function App (aFactory : AbstractFactoryTheme ) {

    let hero = aFactory.createHero()
    let nav = aFactory.createNav()
    hero.createCTA()
    nav.createItemNav()

}

const switchModesBg = <HTMLInputElement> document.getElementById('darkmode-switch')

if(switchModesBg){

    switchModesBg.addEventListener('click', function (event) {

        let mode = this.checked ? 'LIGHT' : 'DARK'

        console.log(mode)

        switch (mode) {
            case 'DARK':
                App(new ConcreteDarkComponentFactory())
                break
            case 'LIGHT':
                App(new ConcreteLightComponentFactory())
                break
        }
    })
}else{
    console.log('no input id : darkmode-switch founded')
}

