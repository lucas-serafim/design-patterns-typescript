interface DocumentPrototype {
    clone(): DocumentPrototype;
}

class Permission {
    private read: boolean;
    private write: boolean;
    private execute: boolean;

    constructor(read: boolean, write: boolean, execute: boolean) {
        this.read = read;
        this.write = write;
        this.execute = execute;
    }

    setRead(value: boolean) {
        this.read = value;
    }

    setWrite(value: boolean) {
        this.write = value;
    }

    setExecute(value: boolean) {
        this.execute = value;
    }

    getPermissios() {
        return {
            read: this.read,
            write: this.write,
            execute: this.execute
        }
    }
}

class Document implements DocumentPrototype {

    private title: string;
    private content: string;
    public permission: Permission;

    constructor(title: string, content: string, permission: Permission) {
        this.title = title;
        this.content = content;
        this.permission = permission;
    }

    getDocument() {
        return {
            title: this.title,
            content: this.content,
            permission: this.permission.getPermissios()
        }
    }

    clone(): DocumentPrototype {
        const { read, write, execute } = this.permission.getPermissios();
        return new Document(this.title, this.content, new Permission(read, write, execute));
    }
}

const permission = new Permission(true, true, false);
const document = new Document("noticia", "esporte", permission);

console.log("document: ", document.getDocument());

const document2 = document.clone() as Document;
document2.permission.setExecute(true);

console.log("document2: ", document2.getDocument());