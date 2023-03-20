function validate(name, age) {
    if (name.length <= 3) {
        print("O nome precisa ter mais de 3 caracteres");
    }
    else if (age < 1 || age > 119) {
        print("Insira uma idade válida");
    }
    else {
        print("Enviado com sucesso!");
    }
}

function preenchido(nome, age) {
    if(nome.length > 0 && age.length > 0) {
        return true;
    }
    else return false;
}
