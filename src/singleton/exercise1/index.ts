
class GlobalCounter {
    private static instance: GlobalCounter;
    private count: number = 0;

    private constructor() { };

    public static getInstance(): GlobalCounter {
        if (!GlobalCounter.instance)
            GlobalCounter.instance = new GlobalCounter();

        return GlobalCounter.instance;
    }

    public increment(): void {
        this.count++;
    }

    public getCount(): number {
        return this.count;
    }
}

const instance = GlobalCounter.getInstance();

console.log("🚀 ~ instance.getCount():", instance.getCount())
instance.increment()
instance.increment()
console.log("🚀 ~ instance.getCount():", instance.getCount())

const instance2 = GlobalCounter.getInstance();

console.log("🚀 ~ instance2.getCount():", instance2.getCount())
instance2.increment()
instance2.increment()
console.log("🚀 ~ instance2.getCount():", instance2.getCount())

console.log(instance === instance2)