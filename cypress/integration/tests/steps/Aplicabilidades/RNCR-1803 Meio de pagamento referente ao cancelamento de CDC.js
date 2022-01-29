/// <reference types="cypress"/>

import * as getMatriz from '../../requests/GETMatrizAplicabiliade'
import * as parametros from './common'
import * as pedidos from '../../requests/GETPedidos'

//const idUnidadeNegocio= '8'
//const idCategoria = '2851'
//const idPedido = '304258681'
//const idEntrega = '30425868102'

/* function parametros(){
    let idUnidadeNegocio
    let idPedido
    let idEntrega
    let categoria
} */



Given(/^que o operador crie um protocolo novo com a categoria "([^"]*)" para o pedido "([^"]*)"$/, (IDCATEGORIA, PEDIDO) => {
    parametros.categoria = IDCATEGORIA
    parametros.idPedido = PEDIDO
    parametros.idUnidadeNegocio = 8

});

And(/^o pedido tenha sido pago com CDC e boleto$/, () => {
    pedidos.getPedidosDelphix(parametros.idPedido, parametros.idUnidadeNegocio).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.pedido.formasPagamento[0].nomeFormaPagamento).to.contains('Boleto')
        expect(response.body.pedido.formasPagamento[1].nomeFormaPagamento).to.contains('Carnê')
        let formaPagamento01 = response.body.pedido.formasPagamento[0].nomeFormaPagamento
        let formaPagamento02 = response.body.pedido.formasPagamento[1].nomeFormaPagamento
    })

});

And(/^o status da entrega "([^"]*)" seja Cancelado e ponto de controle = DVC$/, (ENTREGA) => {
    parametros.idEntrega = ENTREGA
    pedidos.getPedidosDelphix(parametros.idPedido, parametros.idUnidadeNegocio).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.pedido.entregas[0].trackings[0].pontoControle.idPontoControle).to.eq("CAN")
        expect(response.body.pedido.entregas[1].trackings[0].pontoControle.idPontoControle).to.eq("DVC")
        
    })

});


Then(/^o protocolo deve encontrar o ID "([^"]*)"$/, (ID) => {
    getMatriz.getAplicabilidadeTst2(parametros.idUnidadeNegocio, parametros.categoria, parametros.idPedido, parametros.idEntrega).should((response) => {
        
        expect(response.status).to.eq(200);
        expect(response.body.nomeProduto).to.eq(ID)
    })
});