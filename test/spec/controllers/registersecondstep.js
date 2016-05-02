'use strict';

describe('Controller: RegistersecondstepCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var RegistersecondstepCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistersecondstepCtrl = $controller('RegistersecondstepCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistersecondstepCtrl.awesomeThings.length).toBe(3);
  });
});
