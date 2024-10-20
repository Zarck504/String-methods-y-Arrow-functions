const convertirCamelCase = cadena => {
    let palabras = cadena.split(' ');
    return palabras.map((palabra, index) => 
        index === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    ).join('');
};
