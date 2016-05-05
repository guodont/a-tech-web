'use strict';

describe('Controller: ExpertResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var ExpertResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpertResultsCtrl = $controller('ExpertResultsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpertResultsCtrl.awesomeThings.length).toBe(3);
  });
});
