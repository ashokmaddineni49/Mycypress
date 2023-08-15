import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import TodoPage from '../../e2e/pages/todoPage/todoPage'


const todoPage = new TodoPage()

Given('I open the Todo page app', () => {
    //cy.visit('/')
    cy.visit('http://stagtodo.monfared.io/')
    cy.contains('Environment Todo')
  })
Given('I open the Vehicle Renting System app',()=>{
  cy.visit('http://localhost:3000/')
})

When('I enter {string} and {string}', (email, pass_word) => {
  cy.fixture('usersdata.json').then((data) => {
      if (data) {
          data.forEach((user) => {
              cy.get('#userId').clear().type(user.email);
              cy.get('#loginPwd').clear().type(user.pass_word);

              // Additional actions specific to your test
              });
      } else {
          throw new Error('Test data not available');
      }
  });
});

Then('I click on Submit button',() =>{
  cy.get('.loginButton').click();
})

When(
    'I add a todo with text {string}',
    (query) => {
      todoPage.typeInNewTodoField(query)
      todoPage.clickAddButton(query)
    }
  )

When(
    'I check the todo checkbox with index {int}',
    (index) => {
      todoPage.clickOnCheckBox(index)
    }
  )

Then(
    'Verify last todo to match {string}', (value) => {
      todoPage.getLastTodoText().then((text) => {
        expect(text).to.include(value)
      })
    }
  )

Then('Verify remaining text to match {string}', (value) => {
  todoPage.getRemainingText().then((text) => {
    expect(text).to.include(value)
  })

})

Then('Verify checkbox with index {} to be chechked', (index) => {
  todoPage.verifyCheckboxToBeChecked(index)
})
