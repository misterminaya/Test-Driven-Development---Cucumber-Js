const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('that I start with {int}', function (int) {
  answer = int;
});

When('I add {int}', function (int) {
  expected = answer + int;
});

Then('the result should be {int}', function (int) {
  assert.equal(expected, int);
});