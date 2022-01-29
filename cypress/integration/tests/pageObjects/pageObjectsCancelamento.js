Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

class lfCancelamento {
    checkButtonSize() {
        /* Verifica se os botões tem o mesmo tamanho */
        cy.get('label[class="hideradio slick-slide slick-active"]').contains('Crédito em Conta')
            .invoke('height')
            .should('be.eq', 64)
        cy.get('label[class="hideradio slick-slide slick-active"]').contains('Ordem de Pagamento')
            .invoke('height')
            .should('be.eq', 64)
        cy.get('label[class="hideradio slick-slide slick-active"]').contains('Crédito em Conta Poupança')
            .invoke('height')
            .should('be.eq', 64)
        cy.get('label[class="hideradio slick-slide slick-current slick-active"]').contains('Oferecer Vale Multicanal')
            .invoke('height')
            .should('be.eq', 64)
        
        return false
    }

    selectProductToCancel() {
        cy.get('input[type="checkbox"]').should('be.visible').click()

        cy.get('select[class="quantidade-sku form-control input-xs obrigatorio"]').should('be.visible').select(1)

        cy.intercept({pathname: '/lookfeel-restituicao-tst3/Cancelamento/EfetuarSimularCancelamento'}).as('path')
    
        cy.get('[class="tab-pane active"][id^="step"]', {
            timeout: 12000
        }).find('.btn.lf-button-padrao.next-step').click({
            force: true
        })
        cy.wait('@path', {timeout: 600000}).its('response.statusCode').should('equal', 200)
        
        expect(cy.get('section[id="restituicaoincentivovale"]', {
            timeout: 600000
        }).should('be.visible'))
        
            /* cy.wait('@path').its('response.statusCode').should('equal', 404) */
        return false
    }
}

export default lfCancelamento