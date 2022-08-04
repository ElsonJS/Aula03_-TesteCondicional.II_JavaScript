<script>
    //Faça um Programa que peça a hora e apresente uma mensagem de "Bom dia", "Boa tarde" ou "Boa noite" conforme a hora informada.
    var hora=parseFloat(prompt("Digite a hora: "));
         
    if(hora <=11){
       document.write("<h2> Bom dia!! </h2>"); 
    }else if(hora <= 17){
       document.write("<h2> Boa tarde!! </h2>");
    }else{
       document.write("<h2> Boa noite!! </h2>");
    }
</script>
