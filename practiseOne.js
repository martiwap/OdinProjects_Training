class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return this.title + " by "
            + this.author + ", "
            + this.pages + " pages,"
            + this.read();

    }

    read() {
        if (this.read == true)
            return "read";
        else
            return "not read yet";
    }
}