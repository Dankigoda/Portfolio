inputElement = document.getElementById('number_input');
numberArray = [inputElement.value];

function appent(input){
    inputElement.value += input;
}

function clearInput(){
    inputElement.value = '';
}
function result(){
    try{
        inputElement.value = eval(inputElement.value);
    }
    catch(error){
        inputElement.value = "Error";
    }
}

function deleteLast(){
     inputElement.value = inputElement.value.toString().slice(0,-1);
}

console.log(numberArray);