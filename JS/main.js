const userauthor = document.querySelector('#userauthor');
const userbook = document.querySelector('#userbook');
const readingpriority = document.querySelector('#readingpriority');
const types = document.querySelector('#types');
const sendBtn = document.querySelector('.send');



const checkForm = input => {
   input.forEach(el => {
       if(el.value === ''){
           console.log('Ziom musisz coś wpisać');
       }else {
           console.log('ok');
       }
       
   });
}


sendBtn.addEventListener('click', e => {
    e.preventDefault()
    
    checkForm([userbook,userauthor])


  
 
})



clearBtn.addEventListener('click', e => {
    e.preventDefault()

   
 
})

