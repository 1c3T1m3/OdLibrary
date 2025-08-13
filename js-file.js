console.log("yo!");

const myLibrary = [];

function Book(title, author, nOfPages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.nOfPages = nOfPages;
  this.author = author;
  this.read = read;
  info = (this.title, this.author, this.nOfPages, "pages", this.read)
/*  this.sayName = function() {
    console.log(this.title, this.author, this.nOfPages, "pages", this.read)
  };*/
  return info;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  crypto.randomUUID()
}

NiggaLikeMe = new Book("nigger","nog","nogger","Oh, yes sir!")
console.log(NiggaLikeMe);