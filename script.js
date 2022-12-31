function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function GerarNumeros(){
    //console.log("gerar numeros");
    var sorted_number = document.querySelector('.sorted-number');
    var strNumerosGerados="";
    var nGerados = [];
    var min =  Number(document.getElementById("min").value);
    var max = Number(document.getElementById("max").value);
    var qtd_num = Number(document.getElementById("qtd_num").value);

    var i = 0;

    if(typeof(max) != 'number' || typeof(min) != 'number')
    {
        alert("peencha o range inicial e o range final");
    }
    else if(max < min)
    {
        alert("range inicial nao pode ser maior que range final");
    }
    else{
        console.log("valor incial "+ min+" valor final "+max)
        if(sorted_number){
            console.log(sorted_number);
        }
        while (nGerados.length < qtd_num && i < 100000 && nGerados.length <= max - min){
             var n = getRndInteger(min, max);
            if(!nGerados.includes(n)){
                nGerados.push(n);
            }
            i += 1;
        }

        nGerados.sort((a, b)=> a - b)
                .forEach(a=> strNumerosGerados += "<i>"+String(a).padStart(2,'0')+"</i>");

        sorted_number.innerHTML = strNumerosGerados;
        console.log(strNumerosGerados);
    }
}