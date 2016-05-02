'use strict';

describe('Controller: RegisterfirststepCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var RegisterfirststepCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterfirststepCtrl = $controller('RegisterfirststepCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterfirststepCtrl.awesomeThings.length).toBe(3);
  });
});
