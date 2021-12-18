let myLibrary = [];

function Book (title, author, pages, genre, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.genre = genre;
}

Book.prototype.info = function ()
{
    return this.read ? `${this.title} by ${this.author}, ${this.pages} pages, have read`: 
    `${this.title} by ${this.author}, ${this.pages} pages, not yet read`;
}

function addBookToLibrary(title, author, pages, read) 
{
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('The End', 'God', 666, 'Religion', false);
addBookToLibrary('The Beginning', 'God', 7,'Religion', false);
addBookToLibrary('You Smell', 'Armpits', 2,'Health', false);

function displayBooks(myLibrary)
{
    myLibrary.forEach(book => {
        const cards = document.querySelector(".cards");
        const div = document.createElement('div');
        div.classList.add("card");
        const title = document.createElement('h3');
        title.textContent = book.title;
        const list = document.createElement('ul');

        let listItem = document.createElement('li')
        listItem.textContent = `By: ${book.author}`;
        list.appendChild(listItem);

        listItem = document.createElement('li')
        listItem.textContent = `Pages: ${book.pages}`;
        list.appendChild(listItem);

        listItem = document.createElement('li')
        listItem.textContent = `Genre: ${book.genre}`;
        list.appendChild(listItem);

        listItem = document.createElement('li')
        if(book.read)
        {
            listItem.textContent = `Read: Yes`
        }
        else
        {
            listItem.textContent = `Read: No`
        }
        list.appendChild(listItem);

        div.appendChild(title);
        div.appendChild(list);
        cards.appendChild(div);
    });
}

function newBook()
{
    console.log('you pushed the button');
}



//Run functions
displayBooks(myLibrary);

console.table(myLibrary);