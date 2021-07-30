const inputs = document.querySelectorAll('#variables input');
const buttons = document.querySelectorAll('.btn');
let display = document.getElementById('display');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(`--${this.name}`);
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


function handleClick(event){
    console.log(event.target.value)
    
    switch(event.target.value){
        case 'AC':
            display.value = "";
            break;

        case 'Del':
            display.value = display.value.slice(0,-1);
            break;
        case '=':
            try{
                display.value = eval(display.value);
            }catch(error){
                display.value = `Error!`;
            }
            
            break;
        default:
            display.value +=event.target.value;
    }
    
}
buttons.forEach(btn => btn.addEventListener('click', handleClick))

document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "Delete":
        display.value = "";
        break;

      case "Backspace":
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }

        break;
      case "=":
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error!";
        }

        break;

        case "Enter":
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error!";
        }

        break;

       case "Shift" || "Ctrl":
           display.value = display.value;
           break; 
      default:
        display.value += event.key;
    }
  });
