<script>
    var valores = [true, 5, false, "hola", "adios", 2];
    var vuelta = 0;
    var t1, t2;
    var n1,n2;

    for(let i=1; i=6 ; i++)
    {
        IF(valores[i]==="")
        {
            for(let j=0; j<3 ; j++)
            {
                if(j=0)
                {
                    t1 == valores[i];
                }
                if(j=1)
                {
                    t2 == valores[i];
                }
                if(j=3)
                {
                    //comparacion de textos
                }
            }
        }

         if(valores[i]===) //falta como identificar que es un valor numerico
        {
            for(let j=0; j<3 ; j++)
            {
                if(j=0)
                {
                    n1 == valores[i];
                }
                if(j=1)
                {
                    n2 == valores[i];
                }
                if(j=3)
                {
                   if(n1 < n2)
                    { document.writeln("n2 es mayor que n1"); }

                    if(n1 > n2)
                    { document.writeln("n1 es mayor que n2");}

                    if(n1 == n2)
                    {document.writeln("n1 y n2 son iguales");}

                    if(n1 === n2)
                    {document.writeln("n1 y n2 no son iguales");}

                    if([n1 + n2] === 0)
                    {document.writeln(" n1 mas n2 no son igual a cero");}
                }
            }
        }

        //Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false

    }
</script>
