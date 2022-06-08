it('Update user', () => {
    var newUser = {
        "name": 'Boy',
        "job": 'Senior QA'
    } 
    cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(newUser.name)
    })
})

