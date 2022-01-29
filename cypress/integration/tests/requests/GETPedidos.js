/// <reference types="cypress"/>

const pedidosMock = Cypress.env("pedidosMock")
import * as parametros from "../steps/Aplicabilidades/common"

function getPedidosJtrach(idPedido){
    return cy.request({
        
        method: 'GET', 
        url: `http://atendimento-api.cnova.net/pedidos/{IdPedido}?idPedido=${idPedido}`,
        //url: pedidosMock+idPedido,idPedido,
        failOnStatusCode: false, // não retorna erro se retornar status diferente de 200
        headers: {
            'Accept': 'application/json',
            'Authorization': 'yv4YaUbopwKJXvffWy8uH3uZduYuxb6a/1kCV7W0YueD7OWOyK6oFR9SwbJKRb7+lmOXMuzipIhpaqbV9xmupkcd5lK+yjIYU5p3BTvUXuhEzO9S52CUe0Sd9MxZd0TI',
            'X-SecurityAccess': 'External',
            'X-UnidadesNegocio': parametros.idUnidadeNegocio,
        },
    })
}

function getPedidosDelphix(idPedido, idUnidadeNegocio){
    return cy.request({
        
        method: 'GET', 
        url: `http://atendimento-api.delphixsit.net/pedidos/{IdPedido}?idPedido=${idPedido}`,
        //url: pedidosMock+idPedido,idPedido,
        failOnStatusCode: false, // não retorna erro se retornar status diferente de 200
        headers: {
            'Accept': 'application/json',
            'Authorization': 'yv4YaUbopwKJXvffWy8uH3uZduYuxb6a/1kCV7W0YueD7OWOyK6oFR9SwbJKRb7+lmOXMuzipIhpaqbV9xmupkcd5lK+yjIYU5p3BTvUXuhEzO9S52CUe0Sd9MxZd0TI',
            'X-SecurityAccess': 'External',
            'X-UnidadesNegocio': parametros.idUnidadeNegocio
        },
    })
}

//

export { getPedidosJtrach, getPedidosDelphix }