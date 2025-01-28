class GlobalConfiguration {
    private static instance: GlobalConfiguration;

    private theme: string = "";
    private language: string = "";

    private constructor() { }

    public static getInstance() {
        if (!GlobalConfiguration.instance) {
            GlobalConfiguration.instance = new GlobalConfiguration();
        }

        return GlobalConfiguration.instance;
    }

    public setConfigurations(theme: string, language: string) {
        this.theme = theme;
        this.language = language;
    }

    public getConfigurations() {
        return {
            theme: this.theme,
            language: this.language
        }
    }
}

const instance1 = GlobalConfiguration.getInstance();
instance1.setConfigurations("dark", "english");

const instance2 = GlobalConfiguration.getInstance();
console.log(instance2.getConfigurations());