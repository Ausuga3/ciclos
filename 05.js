let i = true;

while (i=true) {

    let totalFactura=parseFloat(prompt("Iingrese el valor total de su factura"))
    let totalPago=parseFloat(prompt("Iingrese el valor total entregado"))
    var devuelta = totalPago-totalFactura
    console.log("su devuelta es: "+ devuelta)

    var contador=0;
    if (devuelta>=100){
        while(devuelta>=100){
            devuelta=devuelta-100
            contador=contador+1  
        }
        console.log(`${contador} billetes de 100\n`)
    }
    let contador1 =0;
    if(devuelta>=50){
        while(devuelta>=50){
            devuelta=devuelta-50
            contador1=contador1+1  
        }    
        console.log(`${contador1} billetes de 50\n` )
    }
    let contador2 = 0;
    if(devuelta>=20){
        while(devuelta>=20){
            devuelta=devuelta-20
            contador2=contador2+1  
        }
        console.log(`${contador2} billetes de 20\n` )
    }
    let contador3 = 0;
    if(devuelta>=10){
        while(devuelta>=10){
            devuelta=devuelta-10
            contador3=contador3+1  
        }
        console.log(`${contador3} billetes de 10\n` )
    }

    let contador4 = 0;
    if(devuelta>=5){
        while(devuelta>=5){
            devuelta=devuelta-5
            contador4=contador4+1  
        }
        console.log(`${contador4} monda de 5\n` )
    }
    let contador5 =0;
    if(devuelta>=1){
        while(devuelta>=1){
            devuelta=devuelta-1
            contador5=contador5+1  
        }
        console.log(`${contador5} monedas de 1` )
    }
    var opcion = prompt("Deseas ingresar mas facturas? si/no").toLowerCase()

    if (opcion == "no"){
        i=false;
        break;
    }else{
        i=true;
    }
}

