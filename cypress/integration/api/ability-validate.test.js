it.only('Validate Limber', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/ability/7').then((response) => {
        expect(response.body.name).to.eq('limber')
    
    })

})
