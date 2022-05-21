describe('Anecdotes', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Anecdotes')
      cy.contains('create new')
    })
  })
  
  describe('Anecdotes', function() {
    it('Anecdotes are loaded', function() {
      cy.visit('http://localhost:3000')
      cy.contains('If it hurts, do it more often')
    })
  })

  describe('Anecdotes', function() {
    it('Filter works', function() {
      cy.visit('http://localhost:3000')
      cy.get('#filterInput').type('Adding manpower to a late software project makes it later!')
      cy.contains('Adding manpower to a late software project makes it later!')
    })
  })