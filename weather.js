var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function update(weather){
	wind.innerHTML=weather.wind;
	loc.innerHTML=weather.loc;
	icon.src="imgs/codes/" + weather.icon + ".png";
	direction.innerHTML=weather.direction;
}

	window.onload=function(){
	temp=document.getElementById("temperature");
	loc=document.getElementById("location");
	icon=document.getElementById("icon");
	humidity=document.getElementById("humidity");
	wind=document.getElementById("wind");
	direction=document.getElementById("direction");
	var weather={};

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.mlab.com/api/1/databases/sample/collections/sensor_DHT11?apiKey=TgxbY6XYdDynzbXLlT44XRJyaWUg5W7j', true);
        xhr.onreadystatechange = function () {
          console.log('readyState: ' + xhr.readyState);

          if(xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            humidity.innerHTML=json[0].Humidity;
			temp.innerHTML=json[0].Temeprature;

          }
        }
        xhr.send();

	weather.wind=4.5;
	weather.direction='N';
	weather.loc="Villanova";
	weather.icon=200;

	update(weather);
	setInterval( "data()", 5000 );
}

function data(){
	temp=document.getElementById("temperature");
	loc=document.getElementById("location");
	icon=document.getElementById("icon");
	humidity=document.getElementById("humidity");
	wind=document.getElementById("wind");
	direction=document.getElementById("direction");
	var weather={};

        var xhr5 = new XMLHttpRequest();
        xhr5.open('GET', 'https://api.mlab.com/api/1/databases/sample/collections/sensor_DHT11?apiKey=TgxbY6XYdDynzbXLlT44XRJyaWUg5W7j', true);
        xhr5.onreadystatechange = function () {
          console.log('readyState: ' + xhr5.readyState);

          if(xhr5.readyState == 4 && xhr5.status == 200) {
            var json5 = JSON.parse(xhr5.responseText);
						console.log(json5);
            humidity.innerHTML=json5[0].Humidity;
		      	temp.innerHTML=json5[0].Temeprature;
			console.log(json5[0].Temeprature);
			console.log(json5[0].Humidity);
          }
        }
        xhr5.send();

	weather.wind=4.5;
	weather.direction='E';
	weather.loc="Villanova";
	weather.icon=200;

	update(weather);
  var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.mlab.com/api/1/databases/sample/collections/sensor_fire?apiKey=TgxbY6XYdDynzbXLlT44XRJyaWUg5W7j', true);
	xhr.onreadystatechange = function () {
		console.log('readyState: ' + xhr.readyState);

		if(xhr.readyState == 4 && xhr.status == 200) {
			var json = JSON.parse(xhr.responseText);
			console.log(json[0].WARNING);
			if (json[0].WARNING=="SAFE!!!") {
				console.log("SAFE");
				document.getElementById("fire").innerHTML="Safe!!!!";
			}
			if (json[0].WARNING=="FIRE!!!"){

					document.getElementById("fire").innerHTML="Fire!!!";
				}
			}
		}

			xhr.send();
			var xhr1 = new XMLHttpRequest();
			xhr1.open('GET', 'https://api.mlab.com/api/1/databases/sample/collections/sensor_water?apiKey=TgxbY6XYdDynzbXLlT44XRJyaWUg5W7j', true);
			xhr1.onreadystatechange = function () {
			console.log('readyState: ' + xhr1.readyState);
						if(xhr1.readyState == 4 && xhr1.status == 200) {
							var json1 = JSON.parse(xhr1.responseText);
							console.log(json1[0].MESSAGE);
							if (json1[0].MESSAGE=="No Leak") {
								console.log("No Leak");
								document.getElementById("water").innerHTML="No Leak";
							}
							if (json1[0].MESSAGE=="Water Leak"){
								document.getElementById("water").innerHTML="Leak Detected";
					}

				}
			}

		xhr1.send();

		var xhr2 = new XMLHttpRequest();
		xhr2.open('GET', 'https://api.mlab.com/api/1/databases/sample/collections/sensor_vibration?apiKey=TgxbY6XYdDynzbXLlT44XRJyaWUg5W7j', true);
		xhr2.onreadystatechange = function () {
		console.log('readyState: ' + xhr2.readyState);
			if(xhr2.readyState == 4 && xhr2.status == 200) {
				var json = JSON.parse(xhr2.responseText);
				console.log(json[0].Movement);
				if (json[0].Movement=="Motion Detected") {
					console.log("Motion Detected");
					document.getElementById("vibrate").innerHTML="Earth Quake";
				}
				if (json[0].Movement=="SAFE") {
					console.log("SAFE");
					document.getElementById("vibrate").innerHTML="SAFE";
				}

	}
}
xhr2.send();
}
