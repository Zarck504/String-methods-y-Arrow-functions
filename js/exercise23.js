const truncarCadena = (cadena, maxLength) => 
    cadena.length > maxLength ? cadena.slice(0, maxLength) + '...' : cadena;
