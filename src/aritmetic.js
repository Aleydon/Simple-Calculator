//by Roberto Aleydon



export default function calcular(){
    var num1 = document.getElementById('numberOne').value;
    var num2 = document.getElementById('numberTwo').value;
    var aritmetic = document.getElementById('aritmetica').value;

    if((num1 === '' || num1 === null) || (num2 === '' || num2 === null) ){
        alert('Preencha os campos');
        return false
    }


    switch(aritmetic){
        case '1':
            subtracao(num1, num2);
            break;

        case '2':
            adicao(num1, num2);
            break;    

        case '3':
            multiplicacao(num1, num2);
            break;
        
        case '4':
            divisao(num1, num2);
            break;        
        
        default:
            alert('Selecione uma Operacao');
            return false;
    }
}


function subtracao(num1, num2){
    alert(num1 - num2);
}


function adicao(num1, num2){
    alert(num1 + num2);
}


function multiplicacao(num1, num2){
    alert(num1 * num2);
}


function divisao(num1, num2){
    alert(num1 / num2);
}
