class Logger {
    private static instance: Logger;
    private messages: string[] = [];

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        this.messages.push(message);
    }

    public getLogs(): string {
        return this.messages.join("\n");
    }
}

const instance1 = Logger.getInstance();

instance1.log("Morning");
instance1.log("guys");

console.log("All messages from instance1:\n", instance1.getLogs());

const instance2 = Logger.getInstance();

instance2.log("Hello");
instance2.log("everyone");

console.log("All messages from instance2:\n", instance2.getLogs());

console.log("Are instances equal?", instance1 === instance2);
