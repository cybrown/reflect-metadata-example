function OnEvent(key: string): MethodDecorator {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata('event', 'value', target);
        console.log(Reflect.getMetadata('event', target));
    }
}

class MyEmitter {

    @OnEvent('toto')
    onToto() {

    }
}
