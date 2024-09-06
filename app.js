let Fname = document.querySelector("#Fname")
let Lname = document.querySelector("#Lname")
let email = document.querySelector("#Email")
let textArea = document.querySelector("#coment-area")
let inputCheck = document.querySelector(".check")
let inputs = Array.from(document.querySelectorAll(".error"))
let inputRadio1 = document.querySelector("#error1")
let inputRadio2 = document.querySelector("#error2")
let valid = document.querySelector("#validForm")
let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,6}/
document.querySelector("form").addEventListener('submit', (e)=>{
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].type=='text' && inputs[i].value == ""){
            e.preventDefault()
            inputs[i].nextElementSibling.style.display = 'inline-block'
            inputs[i].classList.add("erroshow")
        }else{
            inputs[i].nextElementSibling.style.display = 'none'
        }
    }
    if(!textArea.value){
        e.preventDefault()
        textArea.nextElementSibling.style.display = 'inline-block'
        textArea.classList.add("erroshow2")
    }
    else{
        textArea.nextElementSibling.style.display = 'none'
    }
    if(email.value){
        if(!regex.test(email.value)){
            e.preventDefault()
            document.querySelector(".smsAlert").style.display = 'inline-block'
            email.classList.add("erroshow")
        }
    }
    if(inputCheck.checked == false){
        e.preventDefault()
        document.querySelector(".lastSpan").style.display= 'inline-block'
    }
    else{
        document.querySelector(".lastSpan").style.display = 'none'
    }
    if((!inputRadio1.checked) && (!inputRadio2.checked)){
        e.preventDefault()
        document.querySelector("#myspan").style.display = 'inline-block'
    }else{
        document.querySelector("#myspan").style.display = 'none'
    }
    if((inputRadio1.checked || inputRadio2.checked )&&(inputCheck.checked)&&(textArea.value)&&(regex.test(email.value))){
        for(let i=0; i<inputs.length; i++){
            if(inputs[i].type=='text' && inputs[i].value !== ""){
                valid.style.display = 'block'
            }
        }
    }
})

