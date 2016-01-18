module.controller('modalController', ['$rootScope', 'ModalService', function($rootScope, ModalService) {
    $rootScope.$on('addingEvent', function() {
        // Just provide a template url, a controller and call 'showModal'.
        ModalService.showModal({
          templateUrl: "./views/modals/addingEvent.html",
          controller: 'addingEventController'
        });
    });
}]);
