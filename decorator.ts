interface IcomputePrice {
    computePrice(price : number);
}

class ComputeNormalPrice implements IcomputePrice  {
    
    computePrice(price : number){
        return price * 4 * 5
    }

}

class ComputePriceDecorator implements IcomputePrice{

    protected component : IcomputePrice;
    
    computePrice(price : number){
        return this.component.computePrice(price)
    }

    constructor(component : IcomputePrice){
        this.component = component
    }

}

class ComputePricewithCTS extends ComputePriceDecorator {

    computePrice(price: number) {
        let noProcessed =  super.computePrice(price)
        let result = noProcessed *5
        return result
    }

}

class ComputePriceWithGratification extends ComputePriceDecorator{

    computePrice(price: number) {
        return super.computePrice(price) * 15;
    }

}


const normal = new ComputeNormalPrice()

console.log(normal.computePrice(5))

const normalDecorator = new ComputePriceWithGratification(normal)

console.log(normalDecorator.computePrice(5))