'use strict';

describe('Controller: ExpertQuestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var ExpertQuestionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpertQuestionsCtrl = $controller('ExpertQuestionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpertQuestionsCtrl.awesomeThings.length).toBe(3);
  });
});
