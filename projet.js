document.getElementById("troisligne").addEventListener("click",function(){
    document.getElementById("nav").classList.toggle("active");
});
let books=document.getElementsByClassName("linebook11");
for(let i=0;i<books.length;i++){
    books[i].addEventListener("click",function(){
    books[i].classList.toggle("active");
    })
};
let book=document.getElementsByClassName("linebook12");
for(let i=0;i<book.length;i++){
    book[i].addEventListener("click",function(){
    book[i].classList.toggle("active");
    })
};

