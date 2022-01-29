
import * as getMatriz from '../../requests/GETMatrizAplicabiliade'

/* 
Then(/^o protocolo deverá encontrar o ID "([^"]*)" para a "([^"]*)"$/, (ID, idCategoria) => {
	getMatriz.getAplicabilidadeTst2(idUnidadeNegocio, idCategoria, idPedido, idEntrega).should((response) =>{
        expect(response.status).to.eq(200);
        expect(response.body.nomeProduto).to.eq(ID)
    })
});
 */

/* class parametros2{
    constructor(id){
        this.id = id
    }
     teste
}

let idi = new parametros2(35)
idi.teste */

function parametros(){
    let idUnidadeNegocio
    let idPedido
    let idEntrega
    let categoria
}
/* 
Then(/^o protocolo deve encontrar o ID "([^"]*)"$/, (ID) => {
    expect(parametros.idUnidadeNegocio).to.be.not.null
    expect(parametros.idPedido).to.be.not.null
    expect(parametros.idEntrega).to.be.not.null
    expect(parametros.categoria).to.be.not.null
    
	getMatriz.getAplicabilidadeTst2(parametros.idUnidadeNegocio, parametros.categoria, parametros.idPedido, parametros.idEntrega).should((response) =>{
        expect(response.status).to.eq(200);
        expect(response.body.nomeProduto).to.eq(ID)
    })
}); */




export { parametros }