const Calculator = require('../Calculator')
const chai = require('chai')

const { expect } = chai

// Start test cases for Example Behaviors
function itAlwaysTrue() {
// Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2)
}

function itShouldBeNewline() {
  const result1 = new Calculator()
  expect(result1.calculate('1\n2')).to.be.equal(3)
}

function itShouldBeComma() {
  const result = new Calculator()
  expect(result.calculate('1,2')).to.be.equal(3)
}

function itShouldBeNumber() {
  const num = new Calculator()
  expect(num.calculate('89')).to.be.equal(89)
}

function itShouldBeZero() {
  const cal1 = new Calculator()
  expect(cal1.calculate('')).to.be.equal(0)
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue)
  it('should be equal 2', itAlwaysBe2)
}

function testNewlinedelimited() {  
  it('should be newline', itShouldBeNewline)
}

function testCommadelimited() {  
  it('should be comma', itShouldBeComma)
}

function testSinglenumber() {  
  it('should be number', itShouldBeNumber)
}

function testEmptyString() {  
  it('should be zero', itShouldBeZero)
}

// Start Describe
describe('Example', exampleBehaviors)
describe('Empty string', testEmptyString)
describe('single number', testSinglenumber)
describe('comma delimited', testCommadelimited)
describe('newline delimited', testNewlinedelimited)
