<script>
     /*Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.),
     se digitar outro valor deve aparecer valor inválido.*/
     var n1=parseInt(prompt("Qual o numero do dia da semana:  "));

     if(n1== 1){
         document.write("<h2> Seu dia é domingo! </h2>");
     }else if(n1== 2){
         document.write("<h2> Seu dia é segunda! </h2>");
     }else if(n1== 3){
        document.write("<h2> Seu dia é terça! </h2>");
     }else if(n1== 4){
         document.write("<h2> Seu dia é quarta! </h2>");
     }else if(n1== 5){
         document.write("<h2> Seu dia é quinta! </h2>");
     }else if(n1== 6){
         document.write("<h2> Seu dia é sexta! </h2>");
     }else if(n1== 7){
         document.write("<h2> Seu dia é sábado! </h2>");
     }else{
         document.write("<h2> Valor inválido! </h2>");
     }
</script>
