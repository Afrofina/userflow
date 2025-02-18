import React from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false // This line is important to prevent server-side rendering errors
});

const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), {
  ssr: false // This line is important to prevent server-side rendering errors
});

const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), {
  ssr: false // This line is important to prevent server-side rendering errors
});

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), {
  ssr: false // This line is important to prevent server-side rendering errors
});

const position = [51.505, -0.09];

export default function MapOrder({ mainClass }) {
    return (
        <div className={mainClass}>
            <MapContainer center={[51.505, -0.091]} zoom={20}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.091]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

MapOrder.defaultProps = {
    mainClass: 'lg:!h-full !h-[550px]'
}
