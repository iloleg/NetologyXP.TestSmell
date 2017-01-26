var expect = require('chai').expect;

suite('string asserts', function () {
    setup(function () {
    });

    test('do not check substring for not contains', function () {
        enterPhoneNumber(true);

        let errorMessage = "Please, enter first name\nPlease enter last name";

        expect(errorMessage).to.not.contain('Please enter phone number');
    });

    var enterPhoneNumber = function (isValid) {

    };

    teardown(function () {
    })
});