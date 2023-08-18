describe('Testing the hooks',()=>{
before('Running before every thing',()=>{
    cy.log('this is running only once')
    cy.wait(5000)
})


beforeEach('Running before every thing',()=>{
    cy.log('this is running before every testcase')
    cy.wait(5000)
})

after('Running after every thing done',()=>{
    cy.log('this is running only once')
    cy.wait(5000)
})

afterEach('Running after every testcase',()=>{
    cy.log('this is running after every testcase ')
    cy.wait(5000)
})



it('this is a it block test case 1',()=>{
    cy.wait(5000)

})

it('this is a it block test case 2',()=>{
    cy.wait(5000)

})


it('this is a it block test case 3',()=>{
    cy.wait(5000)

})











})