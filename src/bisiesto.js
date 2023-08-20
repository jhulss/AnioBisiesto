class bisiesto{
    verificarBisiesto(anio)
    {
        if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) 
            return "El anio es bisiesto"
        else 
            return "El anio no es bisiesto"
    }

}

export default bisiesto;