//need to include testing requirements - chai, chai http
var chai = require('chai');
var chaiHttp = require('chai-http');
//need to require the file we are testing
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

//Tests for each page
describe('Node Capstone', function () {
  //best practice is to add a semi colon if function starts with (), [], {}
  //Create an array of pages to loop through and test
  ;[
    '/',
    '/about.html',
    '/contacts.html',
    '/patriots-nation.html',
    '/contact.html',
    '/members.html',
    '/membership.html',
    '/profile.html',
    '/sign-in.html'
  ].forEach(route => {
    //for each statement to go through each page and test if it is a status 200(ok)
    //Pass in the route (string from array)
    //Pass in the done() function, which we call at the end of each of these
    it(route, done => {
      chai.request(app)
      //getting the route being passed instead of writing it in the get function
      .get(route)
      .end(function(err, res) {
        //should get a 200 status as a response
        res.should.have.status(200);
        //should be html
        res.should.be.html;
        //always call another promise of done
        done();
      });
    })
  })
})

//ABOVE IS USED INSTEAD OF A BUNCH OF THESE TEST FUNCTIONS
//Test For Index Page
// describe('index page', function() {
//   it('exists', function(done) {
//     chai.request(app)
//       .get('/')
//       .end(function(err, res) {
//         res.should.have.status(200);
//         res.should.be.html;
//         done();
//     });
//   });
// });
