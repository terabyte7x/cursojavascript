class ProxyFactory{

    static create(object, props, action){

        return new Proxy(object, {
            get(target, prop, receiver){
                
                if(props.includes(prop) && typeof(target[prop]) == typeof(Function)) {

                    return function() {
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return action(target);
                    }

                }

                return Reflect.get(target, prop, receiver);

            },

            set(target, prop, value, receiver){

                if(props.includes(prop)){
                    // target(prop) = value;
                    action(target);
                }

                return Reflect.set(target, prop, value, receiver);
               
            }

        });

    }

    // static _ehFuncao(func){
    //     return typeof(func) == typeof(Function);
    // }

}