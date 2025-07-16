let input = document.getElementById("result");
let button = document.querySelectorAll("button");

let string = "";
let arr_buttons = Array.from(button);

arr_buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;

        if (btnText === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (btnText === 'Ac') {
            string = '';
            input.value = string;
        } else if (btnText === 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});
