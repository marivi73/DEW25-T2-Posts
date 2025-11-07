class User {
    constructor(name) {
        this.name = name;
    }

    read(texto) {
        return `${this.name} is reading ${texto}`;
    }
}

module.exports = User
