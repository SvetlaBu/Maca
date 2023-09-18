import {map as createMap, tileLayer as createTitleLayers, icon as divIcon, marker as createMarker} from '../../vendor/leaflet';

const addContactsMap = () => {
  if (document.querySelector('#map')) {
    document.querySelector('#map').querySelector('picture').remove();

    const point = [55.026474, 82.927511];
    const coordinate = [55.028898426913166, 82.92747319142414];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const markerText = `
<p>г. Новосибирск, ул. Щетинкина 68,</p>
<p>культурный центр «Бейт Менахем»</p>
<p>Номер телефона: <a href="tel:796387687676">7 963 876 876 76</a></p>
`;

    const map = createMap('map', {
      center: point,
      zoom: 15,
      scrollWheelZoom: false,
    });

    const icon = divIcon({
      className: 'leaflet-div-icon',
      iconUrl: './img/svg/pin.svg',
    });

    createTitleLayers(url).addTo(map);
    createMarker(coordinate, {icon}).bindPopup(markerText).addTo(map);
  }
};

export {addContactsMap};
