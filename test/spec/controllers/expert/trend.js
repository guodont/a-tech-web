'use strict';

describe('Controller: ExpertTrendCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var ExpertTrendCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpertTrendCtrl = $controller('ExpertTrendCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpertTrendCtrl.awesomeThings.length).toBe(3);
  });
});
