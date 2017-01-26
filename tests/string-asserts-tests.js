var expect = require('chai').expect;

suite('string asserts', function () {
    test('do not check substring for not contains', function () {
        let phoneValidationError = enterPhoneNumber(true);

        let errorMessage = "Please, enter first name\nPlease enter last name"
            + phoneValidationError;

        expect(errorMessage).to.not.contain('Please enter phone number');
    });

    var enterPhoneNumber = function (isValid) {
        if (isValid) {
            return "";
        }

        return "Please enter phone number";
    };
});