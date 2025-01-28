
interface Button {
    render(): void;
}

class WindowsButton implements Button {
    render(): void {
        console.log("Windows button.");
    }
}

class MacOSButton implements Button {
    render(): void {
        console.log("MacOS button.");
    }
}

interface Window {
    render(): void;
}

class WindowsWindow implements Window {
    render(): void {
        console.log("Windows window.");
    }
}

class MacOSWindow implements Window {
    render(): void {
        console.log("MacOS window.");
    }
}

interface GUIFactory {
    createButton(): Button;
    createWindow(): Window;
}

class WindowsGUIFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createWindow(): Window {
        return new WindowsWindow();
    }
}

class MacOSGUIFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }

    createWindow(): Window {
        return new MacOSWindow();
    }
}

class Client {
    private factory: GUIFactory;

    constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    render(): void {
        this.factory.createButton().render();
        this.factory.createWindow().render();
    }
}

const windowsFactory = new WindowsGUIFactory();
const client1 = new Client(windowsFactory);
client1.render();

const macOSFactory = new MacOSGUIFactory();
const client2 = new Client(macOSFactory);
client2.render();