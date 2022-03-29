var buttons = document.getElementsByTagName('button');
var display = document.getElementById('txt');
var expression = "";


for(let button of document.getElementsByTagName('button')) {
    button.addEventListener('click', (evt) => {
        let value = evt.target.innerHTML.trim();
        if(value === "Del") {
            expression = "";
        } else if(value === "Ans") {
            expression = eval(expression);
        } else if(value === "C") {
            expression = expression.slice(0, -1);
        } else {
            expression += value.trim();
        }
        
        display.value = expression;
    })

}

