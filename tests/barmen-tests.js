"use strict";

var expect = require('chai').expect;
var Barmen = require('../src/barmen');

suite('barmen tests', function () {
    test('should have an age property', function () {
        let barmen = new Barmen();

        expect(barmen).to.have.property('age')
    });
});