interface Isubject{
    attach(observer : Iobserver) : void;
    detach(observer : Iobserver) : void;
    notify() : void;
}

class Channel implements Isubject {
    
    private susctibers : Array<Iobserver> = []
    public chanelName : String = "erick_"

    attach(observer : Iobserver){
        this.susctibers.push(observer)
    }
    detach(observer : Iobserver){
        let index  = this.susctibers.indexOf(observer)
        this.susctibers.splice(index)
    }
    notify(){
        this.susctibers.forEach(observer => {
            observer.update(this)
        })
    }
    changeName(name : String){
        this.chanelName = name
        this.notify()
    }
}

interface Iobserver {
    update(channel : Channel)
}

class User implements Iobserver {
    
    public notifications : Array<String> = []

    getNotifications(){
        this.notifications.forEach(n => {
            console.log(n)
        })
    }

    update(channel : Channel){
        let newnotification = channel.chanelName
        this.notifications.push(newnotification)
    }

}

const [user1, user2, user3, user4] = [new User(), new User(), new User(), new User()] 

const channel = new Channel()
channel.attach(user1)
channel.attach(user2)
channel.attach(user3)
channel.attach(user4)

channel.changeName('el mas nah')
channel.changeName('tu loquillo')
channel.changeName('el caradura')
channel.changeName('dime erick')
channel.changeName('tutos y mas')

user1.getNotifications()