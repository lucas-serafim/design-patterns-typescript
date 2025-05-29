/*
    1. Exercício Fácil: Criando um Builder para Configuração de Usuário

    Implemente um Builder para criar um objeto User. O usuário deve ter as seguintes propriedades:

        username
        email
        age (opcional)

    O Builder deve permitir criar um usuário de forma fluida
*/

class User {
    private username: string
    private email: string;
    private age?: number;

    constructor(username: string, email: string, age?: number) {
        this.username = username;
        this.email = email;
        this.age = age;
    }
}

class UserBuilder {
    private username: string = "";
    private email: string = "";
    private age?: number;

    setUsername(username: string): this {
        this.username = username;
        return this;
    }

    setEmail(email: string): this {
        this.email = email;
        return this;
    }

    setAge(age: number): this {
        this.age = age;
        return this;
    }

    build(): User {
        return new User(this.username, this.email, this.age)
    }
}

const user = new UserBuilder()
    .setUsername("joao")
    .setEmail("joao@teste.com")
    .setAge(21)
    .build();

console.log("🚀 ~ user:", user)
