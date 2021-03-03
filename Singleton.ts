class MyClass {
    
    private static myClass : MyClass;
    
    static getInstance() : MyClass{
        
        if (!this.myClass) this.myClass = new MyClass()
        
        return this.myClass

    }

    aMethod(){
        console.log('hello method singleton');
    }
    
    private constructor(){

    }
}


const myclass = MyClass.getInstance()

myclass.aMethod()