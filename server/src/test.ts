function logger(target, key, descriptor) {
    console.log(target);
    console.log(key);
    console.log(descriptor);
    return descriptor;
}

class Cat {
    @logger
    meow() { console.log('123') };
};

const c = new Cat();
c.meow();
