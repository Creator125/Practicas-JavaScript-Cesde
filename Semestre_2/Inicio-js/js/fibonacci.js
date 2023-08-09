/* Reto: Generar una aplicacion para mostrar los N
    primeros numeros de la serie fibonacci
    (0,1,1,2,3,5,8,13,21,34,55,89)*/

        num1 = 0;
        num2 = 1;
        num3 = 0;

        for(i = 0; i <= 13; i++){
            console.log(num1);

            num1 = num2;
            num2 = num3;
            num3 = num1 + num2;
        }