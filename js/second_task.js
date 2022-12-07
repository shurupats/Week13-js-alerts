function add()
{
    let numbers =getNumbers();
    isValid = checkNumbers(numbers);
    if (isValid){
        result = numbers[0] + numbers[1];
    }
    else{
        result = `Можно выполнять операции только над числами`;
    }
    showResult(result);
}

function subtract(){
    let numbers = getNumbers();
    result = numbers[0] - numbers[1];
    showResult(result);
}

function devide(){
    let numbers = getNumbers();
    if (numbers[1] != 0){
        result = numbers[0] / numbers[1];
    }
    else{
        result = 'На 0 делить нельзя';
    }
    showResult(result);
}

function multiply(){
    let numbers = getNumbers();
    result = numbers[0] * numbers[1];
    showResult(result);

}

function getNumbers(){
    let first_number = prompt(`Введите первое число:`);
    let second_number = prompt(`Введите второе число:`);
    return [Number(first_number), Number(second_number)];
}

function checkNumbers(numbers){
    let regex = /[0-9]|\./;
    if(regex.test(numbers[0]) && regex.test(numbers[1])) {
        return true;
    }
}

function showResult(result){
    alert(result);
}