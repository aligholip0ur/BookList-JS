let $= document;
let bookform= $.getElementById('book-form')
let booktitle = $.getElementById('title')
let bookauthor= $.getElementById('author')
let bookyear=$.getElementById('year')
let booklist=$.getElementById('book-list')
let booklistarr=[]
let bookid = 0

bookform.addEventListener('submit',addlistbook)
function addlistbook(event)
{
    event.preventDefault()
    
     if (booktitle.value===""||
        bookauthor.value===""||
        bookyear.value==="") {
alert("please fill the empty inputs")        
     }else  {
        booklistarr[bookid] ={
            bookid:bookid,
            booktitle:booktitle.value,
            bookauthor:bookauthor.value,
            bookyear:bookyear.value
             }
         booktitle.value=""
         bookauthor.value=""
         bookyear.value=""
         addbook(booklistarr[bookid])
         addtolocal(booklistarr)
     bookid++;
     }
   

}
function addbook(items)
{
    let trelem= $.createElement('tr')
    let thelem1= $.createElement('th')
    let thelem2= $.createElement('th')
    let thelem3= $.createElement('th')
 
 thelem1.innerHTML=items.booktitle
 thelem2.innerHTML=items.bookauthor
 thelem3.innerHTML=items.bookyear
 trelem.appendChild(thelem1)
 trelem.appendChild(thelem2)
 trelem.appendChild(thelem3)
     booklist.append(trelem)
}
function addtolocal(booklistarr)
{
    localStorage.setItem("booklistarr",JSON.stringify(booklistarr))
}
window.onload=Relodebooklist;
function Relodebooklist()
{
    let booklistarr1=JSON.parse(localStorage.getItem("booklistarr"))
    booklistarr1.forEach(items=>addbook(items))    
}