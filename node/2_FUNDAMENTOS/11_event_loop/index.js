//entender como o node realiza a leitura do nosso código.

function a(){
    console.log("Executando a()")
}

function b(){
    console.log("Executando b()")
}

function c(){
    console.log("Executando c()")
    a()
    b()
}

c()