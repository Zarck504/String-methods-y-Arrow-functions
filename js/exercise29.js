const comprimirCadena = cadena => {
    return cadena.split('').filter((char, index, arr) => char !== arr[index - 1]).join('');
};
