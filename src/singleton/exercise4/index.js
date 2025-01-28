var GlobalConfiguration = /** @class */ (function () {
    function GlobalConfiguration() {
        this.theme = "";
        this.language = "";
    }
    GlobalConfiguration.getInstance = function () {
        if (!GlobalConfiguration.instance) {
            GlobalConfiguration.instance = new GlobalConfiguration();
        }
        return GlobalConfiguration.instance;
    };
    GlobalConfiguration.prototype.setConfigurations = function (theme, language) {
        this.theme = theme;
        this.language = language;
    };
    GlobalConfiguration.prototype.getConfigurations = function () {
        return {
            theme: this.theme,
            language: this.language
        };
    };
    return GlobalConfiguration;
}());
var instance1 = GlobalConfiguration.getInstance();
instance1.setConfigurations("dark", "english");
var instance2 = GlobalConfiguration.getInstance();
console.log(instance2.getConfigurations());
