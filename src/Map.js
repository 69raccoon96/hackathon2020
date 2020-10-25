import { load } from '@2gis/mapgl';

const userGeo = {
    center: [],
    zoom: 10,
    key: 'b066ef4f-8a6d-4b72-8f1c-2eba6a809a1f',
    flag: false
};

let style = {
    height: "500px",
};

let map = {};
let mapglAPI = {};

async function start(query) {
    if (!userGeo.flag)
        await getGeolocation().then(async() => {
            mapglAPI = await load();
            map = new mapglAPI.Map('map', userGeo);
            const marker = new mapglAPI.Marker(map, {
                coordinates: userGeo.center,
                icon: 'https://docs.2gis.com/img/mapgl/marker.svg',
                label: {
                    text: 'u re here',
                },
            });

            getPoints(query, userGeo.center)
                .then(b => b.json())
                .then(x => {
                    if (x.meta.code != 404) {
                        var arr = x.result.items;
                        for (var i = 0; i < arr.length; i++) {
                            getGeocode(arr[i].address_name)
                                .then(c => c.json())
                                .then(async(a) => {
                                    if (a.meta.code != 404) {
                                        console.log(arr[i]);
                                        // await createMarker(arr[i].name, a.result.items[0].point)
                                    }
                                });
                        }
                        // arr.forEach((e, i) => {
                        // 	getGeocode(e.address_name)
                        // 	.then(c => c.json())
                        // 	.then(async(a) => {
                        // 		if (a.meta.code != 404) {
                        // 			await createMarker(e.name, a.result.items[0].point)
                        // 			// console.log(a.result.items[0].point);
                        // 		}
                        // 	});
                        // });
                    }
                })
        });
}

async function getGeolocation() {
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition((position) => {
            userGeo.flag = true;
            userGeo.center[0] = 60.6580354;
            userGeo.center[1] = 56.8429065;
            // console.log(position.coords);
            // userGeo.center[0] = position.coords.latitude;
            // userGeo.center[1] = position.coords.longitude;
        });
}

async function getPoints(query, location) {
    let str = `https://catalog.api.2gis.com/3.0/items?q=${query}&sort_point=${location[0]},${location[1]}&key=rugtio3557`;
    return fetch(str);
}

async function getGeocode(address) {
    let str = `https://catalog.api.2gis.com/3.0/items/geocode?q="${address}"&fields=items.point&key=rugtio3557`;
    return fetch(str);
}

function createMarker(text, coords) {
    const marker = new mapglAPI.Marker(map, {
        coordinates: coords,
        icon: 'https://docs.2gis.com/img/mapgl/marker.svg',
        label: {
            text: text,
        },
    });

    return marker;
}


function Map() {
    start('кафе');
    window.onload = () => document.getElementById('map').firstChild.remove();
    return(
        <div>
            <div id="map" style={style}></div>
        </div>
    );
}

export default Map;
