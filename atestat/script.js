function mult()
{
  const ala = document.querySelector('.inm');
    const cala = document.querySelector('.inm3');
    const bala = document.querySelectorAll('.cantitate');
        const dala = document.querySelector('.inm1');
    const fala = document.querySelectorAll('.cantitate');
   var clicked = false; 
 var clicked1 = false;
    ala.addEventListener('click',function(){
      
        if (!clicked){ clicked = true; 
        for(let i=0; i<=bala.length; i++){ 
            bala[i].innerHTML = parseInt(bala[i].innerHTML)*2;
        }  
         
       }
        
  
    }) ;
     cala.addEventListener('click',function(){
         if(!clicked1){ clicked1=true;
        for(let i=0; i<=bala.length; i++){
            bala[i].innerHTML = parseInt(bala[i].innerHTML)*3;
        }}
  
    });
     dala.addEventListener('click',function(){
       location.reload();
        
  
    });
    
    
}
mult();