<script>
     //Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão)
     var n1 = prompt("Digite um numero");
     var sobra=n1/2;
       
     if(n1%2 == 0){
        document.write("<h2>O numero digitado é: Par</h2><br>");
     }else{
        document.write("<h2>O numero digitado é: Impar</h2><br>");
     }
        document.write("<h2>Resto da divisão é:  "+ sobra +"</h2>");
</script>
