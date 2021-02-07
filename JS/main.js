let $todoInput;
let $newBook; 

const userauthor = document.querySelector('#userauthor');
const userbook = document.querySelector('#userbook');
const readingpriority = document.querySelector('#readingpriority');
const types = document.querySelector('#types');
const sendBtn = document.querySelector('.send');
const error = document.querySelector('.error');



const checkForm = input => {
   input.forEach(el => {
       if(el.value === ''){
           console.log('Ziom musisz coś wpisać');
       }else {
           console.log('object');
       }
       
   });
}


sendBtn.addEventListener('click', e => {
    e.preventDefault()
    
    checkForm([userbook,userauthor])


  
 
})

const addBook = () =>{
if(userauthor.value !=='' || userbook.value !=='' && types.options){
    error.style.visibility = 'hidden'


   
}
    else {
        error.style.visibility = 'visible'
    }

}


sendBtn.addEventListener('click', addBook)
