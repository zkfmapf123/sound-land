function logger(target, key, descriptor) {
    console.log(key);
    console.log(descriptor);
    return descriptor;
}

class Cat {
    @logger
    meow(name : string) { 
        console.log(name);
    };
};

const c = new Cat();
c.meow('leedonggyu');
