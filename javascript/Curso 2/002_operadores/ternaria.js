const pontuacaoUsuario = 999;


/*OPERAÇÃO NORMAL*/
if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else {
    console.log('Ususário normal');
}

/*OPERAÇÃO TERNÁRIA*/
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario)

