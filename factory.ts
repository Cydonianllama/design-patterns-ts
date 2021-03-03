abstract class FactoryMarine{

    public abstract factoryCreator() : Imarine;
    
    public shoot(){
        const Marine = this.factoryCreator()
        Marine.shoot()
    }

}

class ConcreteFactoryNormal extends FactoryMarine{
    
    factoryCreator(){
        return new NormalMarine()
    }

}

class ConcreteFactoryPower extends FactoryMarine{

    factoryCreator(){
        return new PowerMarine()
    }

}

interface Imarine{
    shoot()
}

class NormalMarine implements Imarine{
    
    shoot(){
        console.log('normal marine shooting')
    }

}

class PowerMarine implements Imarine {
    
    private state : Object = {};

    shoot(){
        console.log('power marine shooting')
    }

}

class Manager {

    constructor(factory: FactoryMarine){
        factory.shoot()
    }

}

const erick = new Manager(new ConcreteFactoryNormal())
