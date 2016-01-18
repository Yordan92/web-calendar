module.controller('CalendarController', ['$scope', function($scope) {
	$scope.month = moment([moment().year(), moment().month()]);
	$scope.endMonth = moment($scope.month).endOf('month');
	$scope.weeks = [];

	function getAllWeekDays() {
		var temp = moment($scope.month);
		var startMonthWeek = moment(temp).startOf('month').week();
		var lastWeek = temp.week();
		var i = 0;
		while (temp.month() === $scope.month.month()) {
			if (lastWeek !== temp.week()) {
				i++;
				lastWeek = temp.week();
			}
			$scope.weeks[i] = $scope.weeks[i] || [];
			$scope.weeks[i][temp.day()] = moment(temp);
			temp.add(1,'day');
		}
	}
	
	getAllWeekDays();

	$scope.addMonth = function() {
		$scope.weeks = [];
		$scope.month.add(1, 'month');
		getAllWeekDays();
	};

	$scope.addEvent = function () {
		$scope.$emit('addingEvent');
	};

	$scope.previousMonth = function() {
		$scope.weeks = [];
		$scope.month.subtract(1, 'month');
		getAllWeekDays();	
		console.log($scope.weeks);
	};
}]);
