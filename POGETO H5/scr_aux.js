// src="scr_aux.js"
// console.log(`${"v1" == "v1" && "v1" == "v2"}`)
//     console.log(`${"v1" == "v1" || "v1" == "v2"}`)

//     var c = Number(prompt("infome a temperatua em graus celsius, para converter em fahrenheit:"))
//     var f = (c * 9/5) + 32
//     alert(c+" °C = "+f+" °F")

// var sht=Number(prompt("informe horas trabalhadas:")) * 10
// var she=Number(prompt("informe horas extras trabalhadas:")) * 15
// var sab= she + sht, sal= sab * 0.1
// alert("o seu salaro bruto é " + sab + "$ e o seu salario liquido é  " + sal + "$")

var pro = prompt("informe qual o produto conprdo \"lata\" \"garrafinha\" ou \"garafa\""),li
if (pro == "lata"){
    li = Number(prompt("informe quantas foram compradas")) * 350
    alert("você conprou " + li/1000 + " litros ou " + li + " ml")
    
} else if (pro == "garrafinha") {
    li = Number(prompt("informe quantas foram compradas")) * 600
    alert("você conprou " + li/1000 + " litros ou " + li + " ml")
    
} else if (pro == "garrafa") {
    li = Number(prompt("informe quantas foram compradas")) * 2000
    alert("você conprou " + li/1000 + " litros ou " + li + " ml")
} else {
    alert ("error")
}
