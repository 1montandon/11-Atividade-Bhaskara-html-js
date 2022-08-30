function calcularX(){
    const a = Number(document.getElementById('numeroA').value);
    const b = document.getElementById('numeroB').value;
    const c = document.getElementById('numeroC').value;

    const delta = ((b ** 2) - 4 * a * c);
    const bhaskaraNeutra = -b / (2*a);
    const bhaskaraMais = (-b +Math.sqrt(delta)) / (2*a);
    const bhaskaraMenos = (-b -Math.sqrt(delta)) / (2 * a);

    if (a === "0" ){
        document.getElementById('resultado').innerHTML = `Não é equação de primeiro grau`
    }
    else if(delta === 0){
        document.getElementById('resultado').innerHTML = `Bhaskara = ${bhaskaraNeutra}`;
    }
    else{
        document.getElementById('resultado').innerHTML = `Bhaskara + = ${bhaskaraMais.toFixed(2)} <br/>
    Bhaskara - = ${bhaskaraMenos.toFixed(2)}`;
    }
}