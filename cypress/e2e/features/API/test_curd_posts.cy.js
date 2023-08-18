let userid = 4459342
const title ="Hey this my API writing"
const body="Hey I am body "


describe('Creating the post',()=>{
    context('Post the Data to public/v2/posts',() =>{
        it('Test Post Request',()=> {
            cy.request({method:'POST',
            url:'https://gorest.co.in/public/v2/posts',
            headers:{
                'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), 
            },
            body:{
                "user_id":userid,
                "title":title,
                "body":body
            }
        }).then((response)=>{
            expect(response).to.have.property('status').to.equal(201)
            expect(response.body).to.have.property('id').to.not.be.oneOf([null, ""])
            expect(response.body.title).to.equal(title)
            expect(response.body.body).to.equal("Hey I am body ")
            userId = response.body.id;
            cy.task('log', 'Created a new Post with id: ' + userId)
        })
        })
    })
})