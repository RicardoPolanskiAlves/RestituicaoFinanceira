/// <reference types="cypress"/>

import * as getMatriz from '../../requests/GETMatrizAplicabiliade'
import * as pedidos from '../../requests/GETPedidos'
import * as parametros from './common'


//parametros.idUnidadeNegocio = '8'
parametros.idEntrega = '16523127702'
parametros.idPedido = '165231277'




Given(/^que o operador crie um protocolo novo com a categoria "([^"]*)"$/, (IDCATEGORIA) => {
    parametros.categoria = IDCATEGORIA
});

/* And(/^o pedido tenha sido pago com CDC e boleto$/, () => {
    
    cy.log(parametros.categoria)
}); */

And(/^o status seja Cancelado e ponto de controle = DVC$/, () => {
    return true;
});




When(/^o entrega "([^"]*)" está com restituição NULA, forma de restituição = Vale, forma de pagamento = "([^"]*)"$/, (ENTREGA, FORMAPAGAMENTO) => {
    parametros.idEntrega = ENTREGA
    parametros.idUnidadeNegocio = '8'
    pedidos.getPedidosJtrach(parametros.idPedido, parametros.idUnidadeNegocio).should((response) => {
        expect(response.status).to.eq(200);
        if (FORMAPAGAMENTO == "Cartão") {
            expect(response.body.pedido.entregas[1].estornos[0].nomeTipoPagamento).to.contains("Vale")
        }
        expect(response.body.pedido.formasPagamento[0].nomeFormaPagamento).to.contains(FORMAPAGAMENTO)
    })
});



/* Then(/^o protocolo deverá encontrar o ID "([^"]*)" para a "([^"]*)"$/, (ID) => {
    getMatriz.getAplicabilidadeTst2(idUnidadeNegocio, idCategoria, idPedido, idEntrega).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.nomeProduto).to.eq(ID)
    })
});
 */