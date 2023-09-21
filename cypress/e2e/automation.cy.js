///<reference types= "cypress" />
const expectedCurruncy='SAR'
const expectedAttrubute='lang'
const expextedLang= 'en'
describe('Aspire test', () => {
  it('test the currency is SAR', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text')
    .should('include',expectedCurruncy)
 })
 it('test the expected language', () => {
  cy.visit('https://www.almosafer.com/en')
  cy.get('html').should('have.attr',expectedAttrubute,expextedLang)

  
 })
})