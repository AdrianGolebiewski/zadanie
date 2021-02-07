const userauthor = document.querySelector('#userauthor');
const userbook = document.querySelector('#userbook');
const readingpriority = document.querySelector('#readingpriority');
const types = document.querySelector('#types');
const sendBtn = document.querySelector('.send');



const checkForm = input => {
    console.log(input);

    if(input.value === ''){
        console.log('błąd');
    }
}


sendBtn.addEventListener('click', e => {
    e.preventDefault()
    
    checkForm([userbook,userauthor])


  
 
})



clearBtn.addEventListener('click', e => {
    e.preventDefault()

   
 
})

