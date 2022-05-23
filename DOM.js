var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
      // img: https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
      // img: https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg
    }
];

// const breakpoint = '<br>';
for (var i = 0; i< books.length; i++) {
// Created P element is assigned a variable
var bookWordsP = document.createElement('p');
// Created Description to be appended as a child to variable above
var bookDetails = document.createTextNode(`${books[i].title}   by   ${books[i].author}`) ;
// var breakpoint = document.innerHTML(`<br>`) ;
bookWordsP.appendChild(bookDetails);
document.body.appendChild(bookWordsP);
// bookWordsP.appendChild(breakpoint);
}
/*
var booksDifferent = document.createElement('ul');


for (var i = 0; i< books.length; i++) {

var booksDescription = document.createElement('li');

var bookImg = document.createElement('img');

bookCover.src = books[i].img;

booksDescription.appendChild(bookImg);

var bookDetails = document.createTextNode(`${books[i].title}   by   ${books[i].author}`);

booksDescription.appendChild(bookDetails);

booksDifferent.appendChild(booksDescription);

document.body.appendChild(booksDifferent);
}












































/*
const ul = document.querySelector('#list');
let html = '';
books.forEach(book => {
  if (book.alreadyRead == true){
    html +=
    <div class= "bCover-wrapper" id="container">
      <img class="bookCovers" src="${book.cover}" id="image">
      <div class="alreadyRead">
        <h3>Book Read</h3>
    </div>
    </div>
    <li>
      Book Title: <span class="bTitle">${book.title}</span>, </span>
    </li>
  }
}
*/