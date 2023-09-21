///<reference types= "cypress" />
const expectedCurruncy='SAR'
const expectedAttrubute='lang'
const expextedLang= 'en'
describe('Aspire test', () => {
  it.skip('test the currency is SAR', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text')
    .should('include',expectedCurruncy)
 })
 it.skip('test the expected language', () => {
  cy.visit('https://www.almosafer.com/en')
  cy.get('html').should('have.attr',expectedAttrubute,expextedLang)

  
 })
 it('check language randomely', () => {
  let websites=["https://www.almosafer.com/en","https://www.almosafer.com/ar"]
  let randomIndex= Math.floor(Math.random()*websites.length)
  cy.visit(websites[randomIndex])
 });
})