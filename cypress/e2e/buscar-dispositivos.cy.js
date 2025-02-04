/// <reference types="cypress"/>

describe('Buscar dispositivo especifico', () => {

    it('Buscar dispositivo específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/4'
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.status).to.exist
            expect(response.body.name).to.eq("Apple iPhone 11, 64GB")
        })        
    })

    it('Buscar todos os dispositivo', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'
        })
        .then((response) => {
            response.body.forEach((device) => {
              expect(device).to.have.property('id')
              expect(device).to.have.property('name')
              expect(device).to.have.property('data')
            })
        })
    })

    it('Buscar dispositivos por id inválido', () => {
        cy.request({
           method: 'GET',
           url:'https://api.restful-api.dev/objects/669',
           failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.equal(404);
            expect(response.status).to.exist;
            expect(response.body.error).to.equal('Oject with id=669 was not found.');
          });
         
     });
})

