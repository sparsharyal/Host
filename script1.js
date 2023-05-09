function myfunction(){
    const element = document.body;
    element.classList.toggle("dark-mode")

    const button = document.querySelector("button")
    if(element.classList.contains("dark-mode")){
        button.textContent="Light Mode"
    }else{
        button.textContent="Dark Mode"
    }
}

const change = document.querySelector("#change");
const value = ["a kitty", "a pet"]
let counter =0;
setInterval(()=>{
    change.textContent = value[counter];
    counter = (counter+1) % value.length;
},3000);