let string = "";
let buttons = document.querySelectorAll('.button1');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{console.log(e.target) 
       
        if (button.value =='=') 
        { 
                document.querySelector('.tb').value = eval(document.querySelector('.tb').value); 
        } else{
            if (button.value === "clr") 
            { 
                string = "";
                document.querySelector('.tb').value = ""; 
            }
           
            else 
            {
                string = string + e.target.innerHTML;
                document.querySelector('.tb').value += button.value;
            }
        }
        
         })
})