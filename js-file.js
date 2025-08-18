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
  console.table(libraList);
}

NiggaLikeMe = new Book("nigger","nog","nogger","Oh, yes sir!");
ThisBookBeGud = new Book("peepee", "poopoo", "wet bed", "u kno i have nigga!")

addBookToLibrary(NiggaLikeMe);
addBookToLibrary(ThisBookBeGud);

var down = document.getElementById("GFG_DOWN");
daCounter = 0;
          
// Create a break line element
var br = document.createElement("br"); 
function GFG_Fun() {
  
if  (daCounter < 1){ //This prevents the button from creating more than one submit forms.
  daCounter += 1;
  // Create a form dynamically
var form = document.createElement("form");
form.setAttribute("method", "get");
form.setAttribute("action", "javascript:alert('Book title: '+ tstTtl.value + '  Author: ' + tstAthr.value+ '  Pages: ' + tstPgs.value + '  Read: ' + tstRd.checked);");

// Create an input element for Full Name
var TITLE = document.createElement("input");
TITLE.setAttribute("type", "text");
//TITLE.setAttribute("name", "title");
TITLE.setAttribute("id", "title");
TITLE.setAttribute("placeholder", "Title");

 // Create an input element for date of birth
 var AUTHOR = document.createElement("input");
 AUTHOR.setAttribute("type", "text");
 //AUTHOR.setAttribute("name", "author");
 AUTHOR.setAttribute("id", "author");
 AUTHOR.setAttribute("placeholder", "Author");

 // Create an input element for emailID
 var PAGES = document.createElement("input");
 PAGES.setAttribute("type", "text");
 //PAGES.setAttribute("name", "noOfPages");
 PAGES.setAttribute("id", "noOfPages");
 PAGES.setAttribute("placeholder", "Number of pages");

  // Create an input element for password
  var REaD = document.createElement("input");
  REaD.setAttribute("type", "checkbox");
  REaD.setAttribute("placeholder", "Read");
  //REaD.setAttribute("name", "read");
  REaD.setAttribute("id", "read");
  var yo = document.createElement("label");
  yo.setAttribute("for","read");
  yo.innerHTML = "'ave u red dis one?";

            // create a submit button
            var s = document.createElement("input");
            s.setAttribute("type", "submit");
            s.setAttribute("value", "Submit");
            s.setAttribute("class", "frmBtn");
            // create a cancel button
            var c = document.createElement("input");
            c.setAttribute("type", "submit");
            c.setAttribute("value", "Cancel");
            c.setAttribute("class", "frmBtn");

            // Append the full name input to the form
            form.appendChild(TITLE); 
            
            // Inserting a line break
            form.appendChild(br.cloneNode()); 
            
            // Append the AUTHOR to the form
            form.appendChild(AUTHOR); 
            form.appendChild(br.cloneNode()); 
            
            // Append the emailID to the form
            form.appendChild(PAGES); 
            form.appendChild(br.cloneNode()); 
            
            // Append the Password to the form
            form.appendChild(yo);
            form.appendChild(REaD); 
            form.appendChild(br.cloneNode());
            
            // Append the submit button to the form
            form.appendChild(s);
            // Append the submit button to the form
            form.appendChild(c); 
 

            document.getElementsByTagName("body")[0]
           .appendChild(form);
        }
        tstTtl = document.getElementById("title");
        tstAthr = document.getElementById("author");
        tstPgs = document.getElementById("noOfPages");
        tstRd = document.getElementById("read");

        if(tstTtl.value != '' && tstAthr.value != '' && tstPgs.value != ''){
          nuBuk = new Book(tstTtl.value, tstAthr.value, tstPgs.value, tstRd.checked) 
          addBookToLibrary(nuBuk);    
          console.table(libraList);}  
      }