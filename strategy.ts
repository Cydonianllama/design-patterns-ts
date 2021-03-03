class Passport{
    
    private strategy ; IauthStrategy;

    processConfigStrategy(){
        console.log('process config')
        this.strategy.initialyze()
        this.strategy.serialize()
    }

    setStrategy(strategy : IauthStrategy){
        this.strategy = strategy
    }

    constructor(strategy : IauthStrategy){
        this.strategy = strategy
    }

}

interface IauthStrategy{
    initialyze()
    serialize()
}

class AuthJWT implements IauthStrategy {

    initialyze(){
        console.log('initialize JWT');
    }
    serialize(){
        console.log('serialize JWT');
    }

}

class AuthLocal implements IauthStrategy{

    initialyze() {
        console.log('initialyze local');
    }
    serialize() {
        console.log('serialize local');
    }

}

const passport = new Passport(new AuthJWT())
passport.processConfigStrategy()
passport.setStrategy(new AuthLocal())
passport.processConfigStrategy()