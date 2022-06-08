it('Add a new user', () => {
    var user = {
        "name": 'Boy',
        "job": 'QA'
    } 
    cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201);
        expect(response.body).to.have.property('name', 'Boy')
        expect(response.body).to.have.property('job', 'QA')
    
    })
})
