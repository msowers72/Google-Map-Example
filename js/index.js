let markers = [];
const activeClass = "active";
const pins = [
	{
		location: "Continental United States",
		name: "Fort Belvoir",
		address: "9990 Belvoir Drive Bldg 257 Fort Belvoir, VA 22060",
		career: "Active Duty",
		tel: "(703)-805-2856",		
		lat: 38.7189,
		long: -77.1543,
	},
	{
		location: "Continental United States",
		name: "Fort McNair",
		address: "201 Custer Road Fort Myer, VA 22111-1215",
		career: "Active Duty",
		tel: "(703)-696-0761",	
		lat: 38.8683,
		long: -77.0139,
	},
	{
		location: "Continental United States",
		name: "Fort Meade",
		address: "4217 Morrison St. Fort Meade, MD 20755",
		career: "Active Duty",
		tel: "(301)-677-9504",	
		lat: 39.1043,
		long: -76.7342,
	},
	{
		location: "Continental United States",
		name: "Aberdeen Proving Ground",
		address: "Bldg. 4305 Janet M. Barr Soldier Support Center, MD 21005",
		career: "Active Duty",
		tel: "(410)-278-1583",	
		lat: 39.4633,
		long: -76.1204,
	},
	{
		location: "Continental United States",
		name: "Joint Base Myer-Henderson Hall",
		address: "202 Custer Road, Bldg 201 Fort Myer, VA 22211",
		career: "Active Duty",
		tel: "(703) 696-0761",	
		lat: 38.8721,
		long: -77.0790,
	},
	{
		location: "Continental United States",
		name: "Fort Drum",
		address: "Bldg. 174, Rooms 201-208, First Street East Fort Drum, NY 13602",
		career: "Active Duty",
		tel: "(315)-772-3067",	
		lat: 44.0580,
		long: -75.7488,
	},
	{
		location: "Continental United States",
		name: "U.S. Military Academy West Point",
		address: "Bldg 626, 646 Swift Road West Point, NY 10996-1095",
		career: "Active Duty",
		tel: "(845)-938-3205",	
		lat: 41.3889,
		long: -73.9571,
	},
	{
		location: "Continental United States",
		name: "Joint Base Langley-Eustis",
		address: "2732 Madison Ave Ft. Eustis, VA 23604",
		career: "Active Duty",
		tel: "(757)-559-1530",	
		lat: 37.458,
		long: -76.2139,
	},
	{
		location: "Continental United States",
		name: "Fort Gregg-Adams",
		address: "Bldg 8135, 701 27th Street Fort Gregg-Adams, Petersburg VA 23801-2707",
		career: "Active Duty",
		tel: "(804)-765-1500",	
		lat: 37.1406,
		long: -77.1958,
	},
	{
		location: "Continental United States",
		name: "Fort Irwin",
		address: "242 B. Ave. Fort Irwin, CA 92310",
		career: "Active Duty",
		tel: "(760)-380-5321",	
		lat: 35.2628,
		long: -116.6846,
	},
	{
		location: "Continental United States",
		name: "Joint Base Lewis-McChord",
		address: "Bldg 9902 Lincoln St. Joint Base Lewis-McChord Washington 98433",
		career: "Active Duty",
		tel: "(253)-477-1886",	
		lat: 47.0920,
		long: -122.6148,
	},
	{
		location: "Continental United States",
		name: "Presidio of Monterey",
		address: "Bldg. 358, Buffalo Soldier Trail Presidio of Monterey, CA 93944",
		career: "Active Duty",
		tel: "(831)-242-5084",	
		lat: 36.6053,
		long: -121.9117,
	},
	{
		location: "Continental United States",
		name: "Fort Bliss",
		address: "Bldg 11685 Sergeant Major Boulevard Fort Bliss TX 79918",
		career: "Active Duty",
		tel: "(915)-744-6889",	
		lat: 31.8124,
		long: -106.4213,
	},
	{
		location: "Continental United States",
		name: "Fort Campbell",
		address: "2765 Screaming Eagle Blvd. Fort Campbell, KY 42223",
		career: "Active Duty",
		tel: "(270) 798-0918",	
		lat: 36.65429,
		long: -87.46056,
	},
	{
		location: "Continental United States",
		name: "Fort Carson",
		address: "1633 Mekong Street, Building 6222 Fort Carson, CO 80913",
		career: "Active Duty",
		tel: "(719)-526-5572",	
		lat: 38.7375,
		long: -104.7889,
	},
	{
		location: "Continental United States",
		name: "Fort Cavazos",
		address: "52nd Street Bldg 13 Fort Hood, TX 76544",
		career: "Active Duty",
		tel: "(254)-287-7901",	
		lat: 31.2012636,
		long: -97.7084,
	},
	{
		location: "Continental United States",
		name: "Fort Eisenhower",
		address: "267 Heritage Park Lane Building 35202 Fort Gordon, GA 30905",
		career: "Active Duty",
		tel: "(706)-791-7812",	
		lat: 33.42042,
		long: -82.13956,
	},
	{
		location: "Continental United States",
		name: "Fort Huachuca",
		address: "2387 Hatfield Street. Building 51102. Fort Huachuca, AZ 85613",
		career: "Active Duty",
		tel: "(520)-533-2009",	
		lat: 31.5552,
		long: -110.3499,
	},
	{
		location: "Continental United States",
		name: "Fort Jackson",
		address: "Bldg 2600 Lee Road Fort Jackson, SC 29207",
		career: "Active Duty",
		tel: "(803)-751-4287",	
		lat: 34.0222,
		long: -80.9436,
	},
	{
		location: "Continental United States",
		name: "Fort Johnson",
		address: "7090 Alabama Avenue, Bldg 1454 Fort Johnson, Louisiana 71459",
		career: "Active Duty",
		tel: "(337)-531-2580",	
		lat: 40.3552,
		long: -91.4329,
	},
	{
		location: "Continental United States",
		name: "Fort Knox",
		address: "50 Third Avenue Bldg. 1310 Fort Knox, KY  40121",
		career: "Active Duty",
		tel: "(502)-624-2771",	
		lat: 37.9161,
		long: -85.9562,
	},
	{
		location: "Continental United States",
		name: "Fort Leavenworth",
		address: "615 McClellan Ave Fort Leavenworth, KS 66027",
		career: "Active Duty",
		tel: "(913)-684-4944",	
		lat: 39.3528,
		long: -94.9222,
	},
	{
		location: "Continental United States",
		name: "Fort Leonard Wood",
		address: "Bldg 315 316 Missouri Avenue Fort Leonard Wood MO 65473",
		career: "Active Duty",
		tel: "(573)-596-0629",	
		lat: 39.3528,
		long: -94.9222,
	},
	{
		location: "Continental United States",
		name: "Fort Liberty",
		address: "Normandy Dr. 1st Floor, Wing D Fort Bragg, NC 28310",
		career: "Active Duty",
		tel: "(910)-396-6113",	
		lat: 35.0755,
		long: -78.9362,
	},
	{
		location: "Continental United States",
		name: "Fort Moore",
		address: "6450 Way Ave. Bldg 2839 Fort Benning, GA 31905",
		career: "Active Duty",
		tel: "(706)-545-3281",	
		lat: 32.3516,
		long: -84.9690,
	},
	{
		location: "Continental United States",
		name: "Fort Novosel",
		address: "Bldg 5700 2218 6th Ave., Room 320 Fort Rucker AL 36362",
		career: "Active Duty",
		tel: "(334)-255-3482",	
		lat: 31.3401,
		long: -85.7154,
	},
	{
		location: "Continental United States",
		name: "Fort Riley",
		address: "Bldg 216 Custer Avenue Fort Riley, KS 66442",
		career: "Active Duty",
		tel: "(785)-239-2217",	
		lat: 39.0883,
		long: -96.8139,
	},
	{
		location: "Continental United States",
		name: "Fort Sill",
		address: "4700 Mow-Way Road, Suite 400, Fort Sill, OK 73503",
		career: "Active Duty",
		tel: "(785)-239-2217",	
		lat: 34.6497,
		long: -98.4226,
	},
	{
		location: "Continental United States",
		name: "Fort Stewart",
		address: "Bldg 620 944 William H. Wilson Ave, Suite 119 Fort Stewart GA 31314",
		career: "Active Duty",
		tel: "(912)-767-8819",	
		lat: 31.8691,
		long: -81.6090,
	},
	{
		location: "Continental United States",
		name: "Joint Base San Antonio",
		address: "2422 Stanley Road, Bldg 134 Joint Base San Antonio-Fort Sam Houston, TX 78234",
		career: "Active Duty",
		tel: "(210)-808-0169",	
		lat: 29.4503,
		long: -98.4510,
	},
	{
		location: "Continental United States",
		name: "Redstone Army Arsenal",
		address: "Bldg. 3439 Honest John Rd. Redstone Arsenal, AL 35898",
		career: "Active Duty",
		tel: "(256)-876-9005",	
		lat: 34.6842,
		long: -86.6540,
	},
	{
		location: "Continental United States",
		name: "White Sands Missile Range",
		address: "124 Crozier Street WSMR, NM 88002",
		career: "Active Duty",
		tel: "(575)-678-1263",	
		lat: 33.2385,
		long: -106.3464,
	},
	{
		location: "Non-Continental United States",
		name: "Joint Base Elmendorf-Richardson",
		address: "Richardson Drive Bldg 600 JBER, AK, United States",
		career: "Active Duty",	
		tel: "(907)-384-0371",
		lat: 61.2547,
		long: -149.6932,
	},
	{
		location: "Non-Continental United States",
		name: "25th Infantry Division Hawaii",
		address: "278 Aleshire Ave. Schofield Barracks HI 96857",
		career: "Active Duty",
		tel: "(808)-655-8607",
		lat: 21.4952,
		long: -158.0629,
	},
	{
		location: "Non-Continental United States",
		name: "Fort Shafter 8th TSC",
		address: "Bldg 525 Wisser Rd Fort Shafter HI 96858",
		career: "Active Duty",	
		tel: "(808)-787-8072",
		lat: 21.3452,
		long: -157.8844,
	},
	{
		location: "South Korea",
		name: "2nd Infantry Division Camp Humphreys ",
		address: "Camp Humphreys, Pyeongtaek, South Korea",
		career: "Active Duty",	
		tel: "DSN (315) 756-7374",
		lat: 36.9667,
		long: 127.0333,
	},
	{
		location: "South Korea",
		name: "8th Army Camp Humphreys",
		address: "Camp Humphreys, Pyeongtaek, South Korea",
		career: "Active Duty",	
		tel: "DSN (315) 756-7375",
		lat: 36.9667,
		long: 127.0333,
	},
	{
		location: "Japan",
		name: "U.S. Army Garrison Japan",
		address: "Legal Assistance (APAJ-JA-CS) Unit 45005 APO AP 96343-5005",
		career: "Active Duty",	
		tel: "DSN (315)-262-4698",
		lat: 35.2920,
		long: 139.2319,
	},
	{
		location: "Italy",
		name: "U.S. Army Garrison Italy",
		address: "Bldg 166 Caserma Ederle, Vicenza",
		career: "Active Duty",	
		tel: "DSN (314)-646-8496",
		lat: 45.5387,
		long: 11.573,
	},
	{
		location: "Germany",
		name: "U.S. Army Garrison Wiesbaden",
		address: "Clay Kaserne, Bldg. 1023 North",
		career: "Active Duty",	
		tel: "DSN (314)-537-0664",
		lat: 50.02,
		long: 8.19,
	},
	{
		location: "Germany",
		name: "U.S. Army Garrison Ansbach (Germany)",
		address: "Katterbach Kaserne, Bldg. 5817, 3rd Floor",
		career: "Active Duty",
		tel: "DSN (314)-467-2103",
		lat: 49.17,
		long: 10.33,
	},
	{
		location: "Germany",
		name: "U.S. Army Garrison Stuttgart",
		address: "Kelley Barracks, Bldg 3312, 2nd Floor, Room 215",
		career: "Active Duty",
		tel: "DSN (314)-591-7593",
		lat: 48.43,
		long: 9.10,
	},
	{
		location: "Germany",
		name: "U.S. Army Garrison Kaiserslautern",
		address: "Bldg. 3210, Room 102 Kleber Kaserne",
		career: "Active Duty",	
		tel: "DSN (314)-483-8854",
		lat: 49.4430,
		long: 7.7716,
	},
	{
		location: "Germany",
		name: "U.S. Army Garrison Baumholder",
		address: "Military Justice Building & Legal Assistance Office Bldg 8680",
		career: "Active Duty",	
		tel: "DSN (314)-531-2457",
		lat: 49.6508,
		long: 7.3032,
	},
	{
		location: "Germany",
		name: "U.S. Army Garrison Bavaria",
		address: "Hohenfels, Bldg. 313",
		career: "Active Duty",	
		tel: "DSN (314)-526-2000",
		lat: 49.713936,
		long: 11.909094,
	},
];

// New York US
const center = {
	lat: 40.7128,
	lng: -74.0060,
};

const styles = [
	{
		featureType: "poi",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "water",
		stylers: [
			{
				color: "#39C3FC",
			},
		],
	},
	// Styled Maps - Night Mode
	{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
];

function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		center,
		styles,
		zoom: 8,
	});

	createMarkers(map);
	showLocations();
}

function createMarkers(map) {
	const infowindow = new google.maps.InfoWindow();
	const markerIcon = {
		url: "img/pin.svg",
		scaledSize: new google.maps.Size(40, 40), 
	};
	
	for (let i = 0; i < pins.length; i++) {
		const marker = new google.maps.Marker({
			position: {
				lat: pins[i].lat,
				lng: pins[i].long,
			},
			map,
			icon: markerIcon,
			animation: google.maps.Animation.DROP,
		});
		
		markers.push(marker);

		google.maps.event.addListener(marker, "click", function () {
			infowindow.setContent(createInfoWindowContent(pins[i]));
			map.setCenter(marker.getPosition());
			infowindow.open(map, marker);
			const targetLocation = document.querySelector(
				`[data-index="${i}"]`
			);
				
			if (document.querySelector(".location.active")) {
				document
					.querySelector(".location.active")
					.classList.remove(activeClass);
			}
			targetLocation.classList.add(activeClass);
			scroll({
				top: targetLocation.offsetTop,
				behavior: "smooth",
			});
		});
	}
}

function createInfoWindowContent(pin) {
	let phoneString = "";
	let faxString = "";
	let latLongString = "";
	let addressString = "";

	if (pin.tel) {
		phoneString = `
			<p class="d-flex align-items-center">
				<img class="me-2" width="24" height="24" src="img/modal-tel.svg" alt="">
				${pin.tel}
			</p>
		`;
	}

	if (pin.career) {
		faxString = `
			<p class="d-flex align-items-center">
				<img class="me-2" width="24" height="24" src="img/modal-fax.svg" alt="">
				${pin.career}
			</p>
		`;
	}

	if (pin.lat && pin.long) {
		latLongString = `
			<p class="d-flex align-items-center">
				<img class="me-2" width="24" height="24" src="img/modal-lat-long.svg" alt="">
				${pin.lat}, ${pin.long}
			</p>
		`;
	}

	if (pin.address) {
		addressString = `
			<div class="d-flex">
			<p class="d-flex align-items-center">
				<img class="me-2" width="24" height="24" src="img/modal-pin.svg" alt="">
				${pin.address}
			</p>
			</div>
		`;
	}

	const contentString = `
		<h3 class="fs-4 text">${pin.name}</h3>
		<hr>
		${phoneString}
		${faxString}
		${latLongString}
		${addressString}
	`;

	return contentString;
}

function showLocations() {
	const locations = document.querySelectorAll(".location");
	locations.forEach((location) => {
		location.addEventListener("click", function (e) {
			e.preventDefault();
			if (document.querySelector(".location.active")) {
				document
					.querySelector(".location.active")
					.classList.remove(activeClass);
			}
			location.classList.add(activeClass);
			scroll({
				top: document.getElementById("map").offsetTop,
				behavior: "smooth",
			});
			new google.maps.event.trigger(markers[this.dataset.index], "click");
		});
	});
}


