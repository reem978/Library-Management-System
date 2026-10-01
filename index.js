const input = document.getElementById("book");
const search =document.getElementById("search");
const show = document.getElementById("show");
const result=document.getElementById("result");
const books = [
    {
        title: "JavaScript Basics",
        author: "John Smith",
        year: 2022,
        borrowed: false
    },
    {
        title: "Clean Code",
        author: "Robert Martin",
        year: 2008,
        borrowed: true
    },
    {
        title: "HTML & CSS",
        author: "Jane Doe",
        year: 2020,
        borrowed: false
    },
    {
        title: "Learning JavaScript",
        author: "Mark Lee",
        year: 2023,
        borrowed: true
    }
];
function getBorrowedBooks(){
    let borrowedbooks = [];
    for(let book of books){
        if(book.borrowed === true){
            borrowedbooks.push(book);
        }
    }return borrowedbooks;
}
function getAvialableBooks(){
    let avialablebooks = [];
    for(let book of books){
        if(book.borrowed === false){
            avialablebooks.push(book);
        }
    } return avialablebooks;
}
function findBook(title){
    for(let book of books){
    if(book.title === title){
        
    return book;}
    
    }
    return null;
}
function getOldestBook(){
    let oldest = books[0];
    for(let book of books){
        if(book.year < oldest.year){
            oldest = book;
        }
    }
    return oldest;
}
function borrowBook(title){
    for(let book of books){
        if(book.title === title && book.borrowed === false){
            book.borrowed = true;
        }
    }

}
function addBook(title,author,year,borrowed){
    const book = {
        title:title,
        author:author,
        year:year,
        borrowed:false
    };
    books.push(book);
}
function searchBook(){
    const book =findBook(input.value);
    if(book){
     result.textContent = ` title:${book.title} , author: ${book.author} ,year: ${book.year}`;
    }else{
        return 'Book not found!';
    }
}
function showavailableBooks(){
const avialableBooks = getAvialableBooks();
for(let book of avialableBooks){
result.textContent += `${book.title} , ${book.author} , ${book.year} \n`
}
}
function borrowBookFromPage(){
const book= findBook(input.value);
if(book){
    if(book.borrowed){
        result.textContent = "Book is already borrowed";
    }else{
    book.borrowed = true;

result.textContent = "Book is borrowed successfully";
}
}else{
    result.textContent = "Book is not available";
}

}