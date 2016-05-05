'use strict';

describe('Controller: QuestionInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var QuestionInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionInfoCtrl = $controller('QuestionInfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuestionInfoCtrl.awesomeThings.length).toBe(3);
  });
});
