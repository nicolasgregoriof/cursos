let idade = 19;
let nome = "Nic";
let passaporte = true;

if(idade >= 18){
    console.log("Você possui maior idade!");
}

if(idade == 18){
    console.log("Você possui maior idade!");
}


if(nome == "Nic" && idade == 34){
    console.log("ok");
}

if((nome == "Nic" && idade == 34) || passaporte == true){
    console.log("liberado");
}