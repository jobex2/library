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

/* addBookToLibrary('The End', 'God', 666, 'Religion', false);
addBookToLibrary('The Beginning', 'God', 7,'Religion', false);
addBookToLibrary('You Smell', 'Armpits', 2,'Health', false); */

displayBooks();



//function definitions 

function addBookToLibrary(title, author, pages, genre, read) 
{
    const book = new Book(title, author, pages, genre, read);
    if(myLibrary.some(bk => bk.title == book.title))  
    {
        alert("that book is already in the Library")
    }
    else
    {
        myLibrary.push(book);
    }

}
function displayBooks()
{
    myLibrary.forEach(book => {
        const cards = document.querySelector(".cards");
        const div = document.createElement('div');
        div.classList.add("card");
        div.id = myLibrary.indexOf(book);
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
        listItem.classList.add('read');
        if(book.read)
        {
            listItem.textContent = `Read: Yes`
        }
        else
        {
            listItem.textContent = `Read: No`
        }

        const btn = document.createElement('button');
        btn.setAttribute("onclick", "removeBook(parentNode)");
        btn.textContent = "Remove"

        const toggle = document.createElement('label');
        toggle.classList.add("switch");

        const input = document.createElement('input');
        input.id = "switchValue";
        input.setAttribute("type", "checkbox");
        input.setAttribute("onclick", "readChange(this)");
        toggle.appendChild(input);

        const span = document.createElement('span');
        span.classList.add("slider", "round");
        toggle.appendChild(span);

        list.appendChild(listItem);
        div.appendChild(title);
        div.appendChild(list);
        cards.appendChild(div);
        div.appendChild(btn);
        div.appendChild(toggle);
    });
}
function removeBookDisplay()
{
    const cards = document.querySelectorAll(".cards");
    cards.forEach((card) => {
        while(card.lastChild)
        {
            card.removeChild(card.lastChild);
        }
    });
}
function openBook()
{
    const popup = document.querySelector(".popup");
    popup.classList.add('popup-active')

}
function closePopup()
{
    const popup = document.querySelector(".popup");
    popup.classList.remove("popup-active");

}
function newBook(form) 
{
    if(form.title.value == "")
    {
        alert("Please enter a title");
        return;
    }
    if(form.author.value == "")
    {
        alert("Please enter an author");
        return;
    }
    if(form.pages.value == "")
    {
        alert("Please enter number of pages");
        return;
    }
    if(form.genre.value == "")
    {
        alert("Please enter a genre");
        return;
    }
    haveRead = document.querySelector('#read').checked;
    console.log(typeof(form.pages))
    addBookToLibrary(form.title.value, form.author.value, form.pages.value, 
        form.genre.value, haveRead );

    
    removeBookDisplay();
    displayBooks();
    form.reset();

}
function removeBook(card)
{
    console.log(card);
    while(card.lastChild)
    {
        card.removeChild(card.lastChild);
    }
    card.remove();
    myLibrary.splice(card.id, 1);
}
function readChange(toggle)
{
    let index = toggle.parentNode.parentNode.id;
    const card = toggle.parentNode.parentNode;
    const read = card.querySelector('.read');
    if(toggle.checked)
    {
        myLibrary[index].read = true;
        read.textContent = `Read: Yes`
    }
    else
    {
        myLibrary[index].read = false;
        read.textContent = `Read: No`   
    }
}