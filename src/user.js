class User {
    constructor(name) {
        this.name = name;
    }

    read(texto) {
        return `${this.name} is reading ${texto}`;
    }

    notify(post) {
        return this.read(post.summary)
    }
}

module.exports = User
