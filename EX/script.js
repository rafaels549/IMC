
    
    const calcular=document.getElementById("botao")
    

    
   function imc ()
   {
        const nome = document.getElementById("nome").value
        const  altura = document.getElementById("altura").value
        const  peso = document.getElementById("peso").value
        const  res = document.getElementById("resultado")

        if(nome !== ' '  && altura !=='' && peso !== '')
        {
             const valorIMC = peso/(altura*altura)
        res.innerHTML = valorIMC;
        }
        else{
             alert("coloque os dados")
        }
   }
    
     calcular.addEventListener("click",imc);
