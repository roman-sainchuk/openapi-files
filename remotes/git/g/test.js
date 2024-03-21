const request = require('supertest');
const app = require('../app');
// 1, 2, 3, 4, 5
describe('App', function() {
  it('has the default page', function(done) {
    request(app)
      .get('/')
      .expect(/Welcome to Express/, done);
  });
}); 
