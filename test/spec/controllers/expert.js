'use strict';

describe('Controller: ExpertCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var ExpertCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpertCtrl = $controller('ExpertCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpertCtrl.awesomeThings.length).toBe(3);
  });
});
