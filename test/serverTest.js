var express = require("express");
var app = express();
var assert = require("chai").assert;
var http   = require("http");
var server = require("../server.js");
var request = require("supertest");


it("should return a 200 response", function (done) {

    http.get("http://localhost:8080", function (res) {
        assert.equal(res.statusCode, 200);
        done();
    });
});

it("should return a get request", function(done){
    http.get("http://localhost:8080/api/programs", function(req, res){
      var body = '';
        req.on('data', function (chunk) {
          console.log(body += chunk.toString());
        });
        done();
    });
});

it("should post to database", function(done){
    request(server)
      .post("/api/programs")
      .send({"why":"why me"})
      .expect(200);
      done();

});
