/* global Given, Then, When */

//import * as getMatriz from '../../requests/GETMatrizAplicabiliade'
//import * as getPedidos from '../../requests/GETPedidos'

const param = '1'
//const idCategoria = '1417'
const idPedido = 304566398
const idEntrega = 30456639804


Given(/^que o operador abra um incidente novo com a categoria "([^"]*)"$/, (ID) => {
	console.log(args1);
	return true;
});

And(/^o pedido está com o status da restituição = Erro no Processamento$/, () => {
	return true;
});

And(/^a forma de restituição é Ordem de pagamento$/, () => {
	return true;
});



/* Then(/^deverá encontrar o ID "([^"]*)" para a "([^"]*)"$/, (ID, idCategoria) => {

    
	getMatriz.getAplicabilidade(param, idCategoria, idPedido, idEntrega).should((response) => {
         expect(response.status).to.eq(200);
        

        //expect(response.body.nomeAplicabilidade).to.eq('AP24613');
        //expect(response.body.idProduto).to.eq(3681);  
        expect(response.body.nomeProduto).to.eq(ID)
    })
}); */