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
  this.BuID = crypto.randomUUID()
  info = (this.title, this.author, this.nOfPages, "pages", this.read, this.BuID)
/*  this.sayName = function() {
    console.log(this.title, this.author, this.nOfPages, "pages", this.read)
  };*/
  return info;
}

libraList = []

function addBookToLibrary(daNewBook) {
  // take params, create a book then store it in the array
  libraList.push(daNewBook)
}

NiggaLikeMe = new Book("nigger","nog","nogger","Oh, yes sir!");
ThisBookBeGud = new Book("peepee", "poopoo", "wet bed", "u kno i have nigga!")

addBookToLibrary(NiggaLikeMe);
addBookToLibrary(ThisBookBeGud);
console.table(libraList)