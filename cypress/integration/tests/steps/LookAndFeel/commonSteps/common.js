/* import PageObjects from "../../../pageObjects/pageObjectsCancelamento" */

import PageObjects from "../../../pageObjects/pageObjectsCancelamento"
const pageObjects = new PageObjects
const url = Cypress.env('CancelamentoTST3')
let agenciaSelected
let agencia


Given(/^que seja acessado o LF Cancelamento$/, () => {
    const query = '?idContato=8515177&idIncidenteOrigem=27651250&unidadeNegocio=1&idPedido=500583934&idEntrega=50058393401&origem=AddIn&skus=&idCategoria=3632&indicadorRestituicaoTotalProRata=False'
    cy.viewport(1360, 768)
    cy.visit(url + query)
    cy.get('button[class="btn lf-button-padrao next-step"]').should('be.visible').first().click()

    });

  
    

   //cy.wait('@path').its('response.statusCode').should('equal', 500)
   

Then(/^selecione o produto e a quantidade$/, () => {
    pageObjects.selectProductToCancel()
    
});

And(/^selecione Restituição Simpes$/, () => {

    /* Verifica se existe botão Restituição Simples */
    expect(cy.get('button[onclick="restituicaoSimplesMaisOpcoes()"]', {
        timeout: 30000
    }).contains('Restituição Simples').should('be.visible'))

    /* Verifica se existe botão Restituição Mista */
    expect(cy.get('button[onclick="restituicaoMistaMaisOpcoes()"]').should('not.exist'))

    /* Verifica se existe botão ??? */
    expect(cy.get('button[class="bgwhite border radius flag-color margin pad flex frow fcenter grow"]', {
        timeout: 30000
    }).contains('Oferecer Vale Multicanal').should('be.visible'))
    cy.wait(2000)

    /* Seleciona Restituição Simples */
    cy.get('button[onclick="restituicaoSimplesMaisOpcoes()"]', {
        timeout: 30000
    }).click({
        force: true
    })
});

When(/^selecionar a opção Crédito em Conta Corrente$/, () => {

    /* Verifica se os botões tem o mesmo tamanho */
    pageObjects.checkButtonSize()

    cy.get('label[class="hideradio slick-slide slick-active"]', {
        timeout: 2000
    }).contains('Crédito em Conta').click()
});


When(/^selecionar a opção Crédito em Conta Poupança$/, () => {

    /* Verifica se os botões tem o mesmo tamanho */
    pageObjects.checkButtonSize()

    /* Seleciona Crédito em Conta Poupança*/
    cy.get('label[class="hideradio slick-slide slick-active"]', {
        timeout: 2000
    }).contains('Conta Poupança').click()
});


Then(/^será exibido histórico de dados bancários com restituição confirmada$/, () => {
    /* Verifica se há histórico de restituição confirmada */
    expect(cy.get('input[name="dadosBancarios"]').should('be.visible'))

    cy.get('strong[data-original-title]').first().invoke('text').then((text) => {
        cy.log(text)
    })
    /* working */
    cy.get('td[name="agencia+1"]').first().invoke('text').then((text) => {
        agenciaSelected = text
        cy.log(agenciaSelected)
    })




    cy.get('td[name="conta+1"]').first().invoke('text').then((text) => {
        cy.log(text)
    })

    /* Seleciona banco do histórico de restituições confirmadas */
    cy.get('#CreditoConta > .between > .borderleft > [style=""]').should('exist')
    cy.get('input[id="1"]').first().click({
        force: true
    })

    /* Verifica se os campos foram preenchidos corretamente */
    cy.get('fieldset[id="banco-0"]')
        .find('div[class="btn-group bootstrap-select form-control obrigatorio"]')
        .should('contain', '341 - BANCO ITAU S/A')

 /*    cy.get('input[name="agencia"]').last().invoke('text').then((text) => {
        agencia = text
        cy.log(agencia)
        cy.log(text)
        cy.log(`${agencia}`)
    }) */

    //cy.log("EXPECT")
    //expect(agenciaSelected).to.equal(agencia)

    /* Verifica se os dados preenchidos são os mesmos da conta selecionada do histórico de restituições confirmadas */
    cy.get('strong[data-toggle="tooltip"]').first().invoke('text').then((text) => {
        cy.get('div[class="btn-group bootstrap-select form-control obrigatorio"]')
            .should('contain', text)
    })


    /*     cy.log(JASON.sycy.get('input[name="agencia"]'))
         cy.get('td[name="agencia+1"]').first().invoke('text').then((text) => {
             const agencia = text
             cy.log(agencia)
            cy.get('input[name="agencia"]').first()
                .should('contain.value', agencia)
        })  */

    agencia = cy.get('input[name="agencia"]').first()
    
    cy.log(Object.values(agencia))
    cy.get('input[name="agencia"]').first().should('have.value', agenciaSelected)
    cy.get('input[name="conta"]').first().should('have.value', 'X0272')
    cy.get('input[name="digito"]').first().should('be.empty')
    cy.wait(5000)
});