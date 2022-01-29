/* Método - endpoint - motivo {request} Extensão*/

/// <reference types="cypress"/>

const urlIntegradorTst2 = Cypress.env('integradorTst2')
const urlIntegradorTst3 = Cypress.env('integradorTst3')
const integradorMock = Cypress.env("integradorMock")



function getAplicabilidadeTst2(param, idCategoria, idPedido, idEntrega){
    cy.log(urlIntegradorTst2)
    return cy.request({
                
        method: 'GET', 
        url: urlIntegradorTst2+`aplicabilidade?param.idUnidadeNegocio=${param}&param.idCategoria=${idCategoria}&param.idPedido=${idPedido}&param.idEntrega=${idEntrega}&param.habilitarLog=true`,
        failOnStatusCode: false, // não retorna erro se retornar status diferente de 200
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic NzcwMDE2NTA0MjpDbm92YUAxMjM0'
        },
    })
}

function getAplicabilidadeTst3(param, idCategoria, idPedido, idEntrega){
    return cy.request({
                
        method: 'GET', 
        url: urlIntegradorTst3+`aplicabilidade?param.idUnidadeNegocio=${param}&param.idCategoria=${idCategoria}&param.idPedido=${idPedido}&param.idEntrega=${idEntrega}&param.habilitarLog=true`,
        failOnStatusCode: false, // não retorna erro se retornar status diferente de 200
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic NzcwMDE2NTA0MjpDbm92YUAxMjM0'
        },
    })
}

export { getAplicabilidadeTst2, getAplicabilidadeTst3 }