const contarOcurrencias = (cadena, letra) => {
    let contador = 0;
    cadena.split('').forEach(char => {
        if (char === letra) contador++;
    });
    return contador;
};
