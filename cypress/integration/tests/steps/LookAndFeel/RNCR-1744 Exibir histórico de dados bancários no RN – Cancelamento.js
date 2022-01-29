Then(/^será exibido histórico de dados bancários com restituição confirmada$/, () => {
	/* Verifica se há histórico de restituição confirmada */
    expect(cy.get('input[name="dadosBancarios"]').should('be.visible'))

    cy.get('strong[data-original-title]').first().invoke('text').then((text) => {
        cy.log(text)
    })

    cy.get('td[name="agencia+1"]').first().invoke('text').then((text) => {
        cy.log(text)
    })

    cy.get('td[name="conta+1"]').first().invoke('text').then((text) => {
        cy.log(text)
    })

    /* Seleciona banco do histórico de restituições confirmadas */
    cy.get('#CreditoConta > .between > .borderleft > [style=""]').should('exist')
    cy.get('input[id="1"]').first().click({force: true})

    

    /* Verifica se os campos foram preenchidos corretamente */
         cy.get('fieldset[id="banco-0"]')
            .find('div[class="btn-group bootstrap-select form-control obrigatorio"]')
            .should('contain', '341 - BANCO ITAU S/A')


    /* Verifica se os dados preenchidos são os mesmos da conta selecionada do histórico de restituições confirmadas */
    cy.get('strong[data-toggle="tooltip"]').first().invoke('text').then((text) => {
        cy.get('div[class="btn-group bootstrap-select form-control obrigatorio"]')
            .should('contain', text)
    })
    cy.get('input[name="agencia"]').first().should('have.value', '4534')
    cy.get('input[name="conta"]').first().should('have.value', 'X0272')
    cy.get('input[name="digito"]').first().should('be.empty')
    cy.wait(5000)
    //cy.screenshot({overwrite: true})
});