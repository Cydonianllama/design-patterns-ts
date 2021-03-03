class Facade{
    
    protected UIsystem : SystemUIcomponent;
    protected HTTPclientSystem : SystemHTTPclient;

    run(){
        this.HTTPclientSystem.activatePetitions()
        this.UIsystem.render()
        //this.HTTPclientSystem.setNewUri('hola new uri')
        this.UIsystem.fetchData()
        console.log(this.HTTPclientSystem.getURI())
    }

    constructor(UIsystem : SystemUIcomponent , HTTPclientSystem : SystemHTTPclient){
        this.HTTPclientSystem = HTTPclientSystem;
        this.UIsystem = UIsystem;
    }

}


class SystemUIcomponent{
    
    private HTTPclient : SystemHTTPclient;

    fetchData(){
        this.HTTPclient.activatePetitions()
        console.log('in fetch data : ',this.HTTPclient)
    }
    
    render(){
        console.log('we renderzie all')
    }

    constructor(HTTPclient : SystemHTTPclient){
        this.HTTPclient = HTTPclient;
    }

}

class SystemHTTPclient{

    private myURI : String = 'uri master'

    getURI() : String {
        return this.myURI
    }

    setNewUri(newURI : String){
        this.myURI = newURI;
    }

    activatePetitions(){
        console.log('petitions activated')
    }

    constructor(){
        console.log('my default URI',this.myURI);
    }

}

const clientHTTP = new SystemHTTPclient()
const components = new SystemUIcomponent(clientHTTP)

const App = new Facade(components , clientHTTP)
App.run()
clientHTTP.setNewUri('hola new uri wey')