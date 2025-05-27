//var ida = Number(prompt ("Informe um numero"))
 
//if (ida <= 20 || ida >= 90){
//    alert("o valor esta na faixa permitida")
//} else {
//    alert("o valor não esta na faixa permitida")
//}

///ida < 12? alert("gratuito"):alert("paga")
var me = Number(prompt ("Informe o numero de um mês"))
switch (me) {
case 1:
    me = "janeiro"
break
case 2:
    me = "fevereiro"
break
case 3:
    me = "março"
break
case 4:
    me = "abril"
break
case 5:
    me = "maio"
break
case 6:
    me = "junho"
break
case 7:
    me = "julho"
break
case 8:
    me = "agosto"
break
case 9:
    me = "setembro"
break
case 10:
    me = "outubro"
break
case 11:
    me = "novembro"
break
case 12:
    me = "dezembro"
break
case me < 1 || me > 12:
    me = "Valor invalido"
break

}
if (me < 1 || me > 12) {
    me = "Valor invalido"
}
alert(me)