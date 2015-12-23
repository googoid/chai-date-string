'use strict';

const chai = require('chai')
  , expect = chai.expect
  , dateString = require('../');

chai.use(dateString);

describe('chai-date-string', () => {
  describe('expect(a).to.be.a.dateString()', () => {
    it('should fail a is not valid date string', () => {
      try {
        expect('some random string').to.be.a.dateString();
      }
      catch (err) {
        return;
      }

      throw new Error('it should fail');
    });

    it('should pass if a is valid date string', () => {
      expect('2015').to.be.a.dateString();
      expect('2015-12-12').to.be.a.dateString();
      expect('2015-12-12 00:00').to.be.a.dateString();
      expect('2015-12-12 00:00:12').to.be.a.dateString();
    });
  });
});
