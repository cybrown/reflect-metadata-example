function OnEvent(key: string): MethodDecorator {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata('event', 'value', target);
        console.log(Reflect.getMetadata('event', target));
        console.log(Reflect.getMetadata('design:type', target, propertyKey));
        console.log(Reflect.getMetadata('design:paramtypes', target, propertyKey));
        console.log(Reflect.getMetadata('design:returntype', target, propertyKey));
    }
}

class MyEventData {

}

class MyEmitter {

    @OnEvent('toto')
    onToto(eventData: MyEventData): boolean {
        return true;
    }
}
