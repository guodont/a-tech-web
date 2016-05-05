'use strict';

describe('Controller: ExpertArticlesCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var ExpertArticlesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpertArticlesCtrl = $controller('ExpertArticlesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpertArticlesCtrl.awesomeThings.length).toBe(3);
  });
});
