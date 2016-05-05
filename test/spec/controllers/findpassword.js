'use strict';

describe('Controller: FindpasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var FindpasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FindpasswordCtrl = $controller('FindpasswordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FindpasswordCtrl.awesomeThings.length).toBe(3);
  });
});
