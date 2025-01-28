interface Character {
    attack(): void;
}

class Warrior implements Character {
    attack(): void {
        console.log("Use a sword");
    }
}

class Wizard implements Character {
    attack(): void {
        console.log("Use spells");
    }
}

class CharacterFactory {
    public static createCharacter(type: string): Character | undefined {
        switch (type) {
            case "warrior":
                return new Warrior();

            case "wizard":
                return new Wizard();

            default:
                console.log("Character does not exist.")
                break;
        }
    }
}

enum CharacterType {
    Warrior = "warrior",
    Wizard = "wizard"
}

const warrior = CharacterFactory.createCharacter(CharacterType.Warrior);
warrior?.attack();

const wizard = CharacterFactory.createCharacter(CharacterType.Wizard);
wizard?.attack();