const contarFrecuencia = cadena => {
    return cadena.split('').reduce((frecuencia, char) => {
        frecuencia[char] = (frecuencia[char] || 0) + 1;
        return frecuencia;
    }, {});
};
