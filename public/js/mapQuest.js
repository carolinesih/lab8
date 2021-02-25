function initMap() {
	// add your code here
	L.mapquest.key = 'FDyPLhIgNGeQgAPxQx9E6NR1gBGvSplM';
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}