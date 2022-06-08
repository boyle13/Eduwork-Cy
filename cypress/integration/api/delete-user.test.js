it.only('Delete user', () => {
    cy.request('DELETE', 'https:reqres.in/api/users/2').then((response) => {
        expect(response.status).equal(204)
        expect(response.body).to.not.have.property('name', 'Boy')
        expect(response.body).to.not.have.property('job', 'QA')
    
    })

})
