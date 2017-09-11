//need to include testing requirements - chai, chai http
var chai = require('chai');
var chaiHttp = require('chai-http');
//need to require the file we are testing
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

//Test For Index Page
describe('index page', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});

//Test For About Page
describe('about page', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/about.html')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});

//Test For Contact Listing Page
describe('contact listing page', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/contacts.html')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});

//Test For Pats Nation Page
describe('nation page', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/patriots-nation.html')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});

//Test For Contact Cllub Page
describe('contact', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/contact.html')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});

//Test For Members Only Page
describe('members only', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/members.html')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});

//Test For Membership Info Page
describe('membership info', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/membership.html')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});

//Test For Membership Info Page
describe('user profile', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/profile.html')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});

//Test For Membership Info Page
describe('sign in', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/sign-in.html')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});
