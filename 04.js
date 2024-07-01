/*contar desde 1 hasta 100. Cada número debe imprimirse en la consola seguido de las siguientes reglas de juego:

Si el número es divisible por 3, imprimir "fizz". Si el número es divisible por 5, imprimir "buzz". Si el número es divisible por ambos 3 y 5, imprimir "fizz-buzz". La función debe pausar un segundo entre cada número utilizando

USAR MODULO %
*/

let contador=0;

while(contador<=100){
    contador++;
    if (contador % 3==0 && contador % 5==0){
        console.log(`${contador} fizz-buzz`)
    }else if(contador %5==0){
        console.log(`${contador} buzz`)
    }else if(contador %3==0){
        console.log(`${contador} fizz`)
    }else{
        console.log(contador)

    }
}
