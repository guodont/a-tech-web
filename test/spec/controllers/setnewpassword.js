'use strict';

describe('Controller: SetnewpasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var SetnewpasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SetnewpasswordCtrl = $controller('SetnewpasswordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SetnewpasswordCtrl.awesomeThings.length).toBe(3);
  });
});
