const palabraMasLarga = cadena => {
    let palabras = cadena.split(' ');
    return palabras.reduce((larga, actual) => actual.length > larga.length ? actual : larga);
};
