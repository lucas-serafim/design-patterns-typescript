interface DatabaseConnection {
    openConnection(): string;
    closeConnection(): string;
}

interface DatabaseQuery {
    create(name: string, email: string): string;

    findByname(name: string): string;
}

// SQL
class SQLDatabaseConnection implements DatabaseConnection {
    openConnection(): string {
        return "SQL connection opened";
    }

    closeConnection(): string {
        return "SQL connection closed";
    }
}

class SQLDatabaseQuery implements DatabaseQuery {
    private clients: Array<{ name: string, email: string }> = [];

    create(name: string, email: string): string {
        this.clients.push({
            name,
            email
        });

        return `SQL create: name: ${name}, email: ${email}`;
    }

    findByname(name: string): string {
        const client = this.clients.find((current) => current.name === name);

        return `SQL findByname: name: ${client?.name}, email: ${client?.email}`;
    }
}

// NoSQL
class NoSQLDatabaseConnection implements DatabaseConnection {
    openConnection(): string {
        return "NoSQL connection opened";
    }

    closeConnection(): string {
        return "NoSQL connection closed";
    }
}

class NoSQLDatabaseQuery implements DatabaseQuery {
    private clients: Array<{ name: string, email: string }> = [];

    create(name: string, email: string): string {
        this.clients.push({
            name,
            email
        });

        return `NoSQL create: name: ${name}, email: ${email}`;
    }

    findByname(name: string): string {
        const client = this.clients.find((current) => current.name === name);

        return `NoSQL findByname: name: ${client?.name}, email: ${client?.email}`;
    }
}

interface DatabaseFactory {
    createDatabaseConnection(): DatabaseConnection;
    createDatabaseQuery(): DatabaseQuery;
}

class SQLFactory implements DatabaseFactory {
    createDatabaseConnection(): DatabaseConnection {
        return new SQLDatabaseConnection();
    }

    createDatabaseQuery(): DatabaseQuery {
        return new SQLDatabaseQuery();
    }
}

class NoSQLFactory implements DatabaseFactory {
    createDatabaseConnection(): DatabaseConnection {
        return new NoSQLDatabaseConnection();
    }

    createDatabaseQuery(): DatabaseQuery {
        return new NoSQLDatabaseQuery();
    }
}

class Client {
    private connection: DatabaseConnection;
    private query: DatabaseQuery;

    constructor(factory: DatabaseFactory) {
        this.connection = factory.createDatabaseConnection();
        this.query = factory.createDatabaseQuery();
    }

    createConnection(): void {
        console.log(this.connection.openConnection());
    }

    closeConnection(): void {
        console.log(this.connection.closeConnection());
    }

    createClient(name: string, email: string): void {
        console.log(this.query.create(name, email));
    }

    findClientByName(name: string) {
        console.log(this.query.findByname(name));
    }
}

const sqlFactory = new SQLFactory();
const client1 = new Client(sqlFactory);
client1.createConnection();
client1.createClient("maria", "maria@test.com");
client1.createClient("joao", "joao@test.com");
client1.findClientByName("maria");
client1.findClientByName("joao");
client1.closeConnection();

console.log("")

const noSqlFactory = new NoSQLFactory();
const client2 = new Client(noSqlFactory);
client2.createConnection();
client2.createClient("maria", "maria@test.com");
client2.createClient("joao", "joao@test.com");
client2.findClientByName("maria");
client2.findClientByName("joao");
client2.closeConnection();