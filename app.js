function getNumber (num){
    
    var ent  = document.getElementById("ent")

    ent.value += num;
}

function cancel(){
    var ent  = document.getElementById("ent")
    ent.value = ""
}

function getResult(){
    var ent  = document.getElementById("ent")
    ent.value = eval(ent.value)
}

function backSpace(){
    var ent  = document.getElementById("ent")
ent.value = ""
}

function getResult(){
    if(ent.value == ""){
        alert("Please Enter Value")
    }
}