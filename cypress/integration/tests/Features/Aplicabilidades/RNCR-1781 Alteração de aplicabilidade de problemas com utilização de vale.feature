@Aplicabilidades
@T1781
@ritm1893569
Feature: Alteração de aplicabilidade de problemas com utilização de vale
    
    Scenario Outline: Alteração de regra de comprovante de restituição pagamento "<FORMAPAGAMENTO>"
        Given que o operador crie um protocolo novo com a categoria "<IDCATEGORIA>" para o pedido "<PEDIDO>"
        And o entrega "<PEDIDO>02" está com restituição NULA, forma de restituição = Vale, forma de pagamento = "<FORMAPAGAMENTO>"
        Then o protocolo deve encontrar o ID "<ID>"
        

Examples:
|           NOMECATEGORIA                 |   IDCATEGORIA	|                     ID                | FORMAPAGAMENTO   |    PEDIDO    |
|Problemas com utilização do vale         |      3375       |   Atendimento Manual - TMA (Cartão)   |     Cartão       |    165231277 |
|Problemas com utilização do vale         |      3375       |   Atendimento Manual - TMA (Boleto)   |     Boleto       |    254925292 |
