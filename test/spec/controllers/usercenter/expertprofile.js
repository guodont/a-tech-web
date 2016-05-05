'use strict';

describe('Controller: UsercenterExpertprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterExpertprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterExpertprofileCtrl = $controller('UsercenterExpertprofileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterExpertprofileCtrl.awesomeThings.length).toBe(3);
  });
});
