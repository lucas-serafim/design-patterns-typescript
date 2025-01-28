
class AppConfig {
    private static instance: AppConfig;
    private configurations: Record<string, string> = {};

    private constructor() { };

    public static getInstance(): AppConfig {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }

        return AppConfig.instance;
    }

    public setConfig(key: string, value: string): void {
        this.configurations[key] = value;
    }

    public getConfig(key: string): string | undefined {
        return this.configurations[key];
    }
}

const instance1 = AppConfig.getInstance();

instance1.setConfig("name", "test");
instance1.setConfig("number", "1");

console.log("Name:", instance1.getConfig("name"));
console.log("Number:", instance1.getConfig("number"));

const instance2 = AppConfig.getInstance();
console.log("Name from instance2:", instance2.getConfig("name"));
console.log("Number from instance2:", instance2.getConfig("number"));

console.log("Are instances equal?", instance1 === instance2);
