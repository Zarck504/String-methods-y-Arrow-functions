const capitalizarFrase = cadena => {
    return cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
};
