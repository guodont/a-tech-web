'use strict';

describe('Controller: UsercenterAssignedquestionCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterAssignedquestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterAssignedquestionCtrl = $controller('UsercenterAssignedquestionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterAssignedquestionCtrl.awesomeThings.length).toBe(3);
  });
});
