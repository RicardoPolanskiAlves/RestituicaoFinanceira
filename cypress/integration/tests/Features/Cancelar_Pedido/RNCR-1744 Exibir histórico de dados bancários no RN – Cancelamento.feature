@CancelarPedido @T1744
Feature: Realizar cancelamento do pedido
    
    Background: Background name
        Given que seja acessado o LF Cancelamento
   
     @ccSimpes
    Scenario: Exibir histórico de dados bancários - Conta Corrente - Restituição Simples
        And selecione o produto e a quantidade
        And selecione Restituição Simpes
        When selecionar a opção Crédito em Conta Corrente
        Then será exibido histórico de dados bancários com restituição confirmada

    @cpSimpes @focus
    Scenario: Exibir histórico de dados bancários - Conta Poupança - Restituição Simples
        And selecione o produto e a quantidade
        And selecione Restituição Simpes
        When selecionar a opção Crédito em Conta Poupança
        Then será exibido histórico de dados bancários com restituição confirmada        


       


        