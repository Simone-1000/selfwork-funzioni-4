function palindroma(str) {
    str = str.toLowerCase().replace(/\W/g, "");

    let contrario = str.split("").reverse().join("");

    return str === contrario;
}

let frase = "i topi non avevano nipoti";

let risultato = palindroma(frase);

document.getElementById("risultato").innerHTML = risultato;