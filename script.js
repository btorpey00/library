const library = document.getElementById('library');
const addNewButton = document.getElementById('add-new-button');
const numBooks = library.childElementCount;

let myLibrary = [];

addNewButton.addEventListener('click', () => {
    addNewBook();
});

function addNewBook() {
    const numBooks = library.childElementCount;
    
    const book = document.createElement('div');
    book.classList = 'book editing'
    book.id = 'book'+numBooks;
    library.appendChild(book);
    
    const labelTitle = document.createElement('label');
    labelTitle.setAttribute('for', 'title'+numBooks)
    labelTitle.classList = 'title-label';
    labelTitle.innerText = 'Title';
    book.appendChild(labelTitle);

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('maxlength', '26');
    title.classList = 'title';
    title.id = 'title'+numBooks;
    book.appendChild(title);

    const labelAuthor = document.createElement('label');
    labelAuthor.setAttribute('for', 'author'+numBooks)
    labelAuthor.classList = 'author-label';
    labelAuthor.innerText = 'Author';
    book.appendChild(labelAuthor);

    const author = document.createElement('input');
    author.setAttribute('type', 'text');
    author.setAttribute('maxlength', '26');
    author.classList = 'author';
    author.id = 'author'+numBooks;
    book.appendChild(author);

    const labelPages = document.createElement('label');
    labelPages.setAttribute('for', 'pages'+numBooks)
    labelPages.classList = 'pages-label';
    labelPages.innerText = '# of Pages';
    book.appendChild(labelPages);

    const pages = document.createElement('input');
    pages.setAttribute('type', 'number');
    pages.setAttribute('min', '1');
    pages.setAttribute('max', '9999')
    pages.classList = 'pages';
    pages.id = 'pages'+numBooks;
    book.appendChild(pages);

    const notReadText = document.createElement('span');
    notReadText.classList = 'toggle-label not-read-label';
    notReadText.innerText = 'Not Read';
    book.appendChild(notReadText);

    const toggleLabel = document.createElement('label')
    toggleLabel.id = 'toggleLabel' + numBooks;
    book.appendChild(toggleLabel);

    const toggleCheckbox = document.createElement('input');
    toggleCheckbox.setAttribute('type', 'checkbox');
    toggleCheckbox.classList = 'toggle-checkbox';
    toggleLabel.appendChild(toggleCheckbox);

    const toggleSpan = document.createElement('span');
    toggleSpan.classList = 'toggle';
    toggleLabel.appendChild(toggleSpan);

    const readText = document.createElement('span');
    readText.classList = 'toggle-label read-label';
    readText.innerText = 'Read';
    book.appendChild(readText);

    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete-button';
    deleteButton.id = 'deleteButton'+numBooks;
    book.appendChild(deleteButton);
    
    const deleteIcon = document.createElement('i');
    deleteIcon.classList = 'fa-solid fa-trash-can';
    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
    });

    const editButton = document.createElement('button');
    editButton.classList = 'edit-button';
    editButton.id = 'editButton'+numBooks;
    book.appendChild(editButton);
    
    const editIcon = document.createElement('i');
    editIcon.classList = 'fa-solid fa-check';
    editButton.appendChild(editIcon);

    myLibrary.push(book)

    editButton.addEventListener('click', () => {
        // console.log('edit' + numBooks);
        book.classList.toggle('editing');
        editIcon.classList.toggle('fa-check');
        editIcon.classList.toggle('fa-pencil');
        // console.log(myLibrary[numBooks]);
    });
};
