/*
     Exercício Desafiante: Criando um Builder para um Formulário Dinâmico

    Crie um Builder para um Form, que pode ser usado para gerar formulários dinamicamente. Cada formulário pode conter múltiplos fields, que possuem:

        label
        type (text, number, email, etc.)
        isRequired (Sim/Não)
        defaultValue (opcional)

    Além disso, o Builder deve permitir a geração de templates predefinidos, como um formulário de cadastro padrão.
*/

enum FieldTypeEnum {
    texto = "text",
    numero = "number",
    email = "email",
    outros = "etc"
}

class Field {
    constructor(
        private readonly label: string,
        private readonly type: FieldTypeEnum,
        private readonly isRequired: boolean,
        private readonly defaultValue?: any
    ) { };

    getLabel() {
        return this.label;
    }

    getType() {
        return this.type;
    }

    getIsRequired() {
        return this.isRequired;
    }

    getDefaultValue() {
        return this.defaultValue;
    }
}

class Form {
    constructor(
        private readonly fields: Field[]
    ) { };

    toString() {
        return this.fields.map((current) => {
            return `label: ${current.getLabel()}, type: ${current.getType()}, isRequired: ${current.getIsRequired()}, defaultValue: ${current.getDefaultValue()}`
        });
    }
}

class FormBuilder {
    private fields: Field[] = [];

    defaultForm(): this {
        return this.addField("nome", FieldTypeEnum.texto, true).addField("casado", FieldTypeEnum.texto, false, "não");
    }

    addField(label: string, type: FieldTypeEnum, isRequired: boolean, defaultValue?: any): this {
        const field = new Field(label, type, isRequired, defaultValue);
        this.fields.push(field);

        return this;
    }

    build(): Form {
        return new Form(this.fields);
    }
}

const form = new FormBuilder()
    .addField("Nome", FieldTypeEnum.texto, true)
    .addField("Idade", FieldTypeEnum.numero, false, 18)
    .addField("Email", FieldTypeEnum.email, true)
    .build();

console.log(form.toString());

const defaultForm = new FormBuilder().defaultForm().build();
console.log(defaultForm.toString());