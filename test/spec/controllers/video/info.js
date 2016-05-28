'use strict';

describe('Controller: VideoInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var VideoInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoInfoCtrl = $controller('VideoInfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VideoInfoCtrl.awesomeThings.length).toBe(3);
  });
});
