//by Roberto Aleydon



export default function calcular(){
    var num1 = document.getElementById('numberOne').value;
    var num2 = document.getElementById('numberTwo').value;
    var aritmetic = document.getElementById('aritmetica').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = null;

    if((num1 === '' || num1 === null || isNaN(num1)) || (num2 === '' || num2 === null || isNaN(num2)) ){
        alert('Preencha os campos');
        return false
    }


    switch(aritmetic){
        case '1':
            subtracao(num1, num2, result);
            break;

        case '2':
            adicao(num1, num2, result);
            break;    

        case '3':
            multiplicacao(num1, num2, result);
            break;
        
        case '4':
            divisao(num1, num2, result);
            break;        
        
        default:
            alert('Selecione uma Operacao');
            return false;
    }
}



function subtracao(num1, num2, result){
    result = num1 - num2;
    document.getElementById('result').value = result;
}


function adicao(num1, num2, result){
    result = num1 + num2;
    document.getElementById('result').value = result;
}


function multiplicacao(num1, num2, result){
    result = num1 * num2;
    document.getElementById('result').value = result;
}


function divisao(num1, num2, result){
    result = num1 / num2;
    document.getElementById('result').value = result;
}
