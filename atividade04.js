<script>
     /*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
     contraram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe
     o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
      * salários até R$ 280,00 (incluindo) : aumento de 20%
      * salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
      * salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
     salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
       - o salário antes do reajuste;
       - o percentual de aumento aplicado;
       - o valor do aumento;
       - o novo salário, após o aumento.*/ 
     var salario=parseFloat(prompt("Informe seu salário:   "));
   
     if(salario <= 280){
        percentual = 20;
     }else if(salario <= 700){
        percentual = 15;
     }else if(salario <= 1500){
        percentual = 10;
     }else{
        percentual = 5;
     }

     document.write("<h3> Seu salário antes do reajuste:  R$"+ salario+  "</h3> <br>");
     document.write("<h3> O percentual de aumento foi de "+ percentual+  "% </h3> <br>");

     var percentual = percentual/100.0;
     var aumento = percentual * salario;
     var novo_salario = salario + aumento;
    
     document.write("<h3> O valor do aumento é de R$"+ aumento+  "</h3> <br>");
     document.write("<h3> Seu novo salário após o aumento é de R$"+ novo_salario+  "</h3><br>");
</script>
