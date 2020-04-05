import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapComponent extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 28.499936,
                    lng: 77.519634
                }}>
                <Marker
                    onClick={this.onMarkerClick}
                    name={"Stambha Design House"}
                    address={"E 1308, Ace Platinum, Zeta-1, Greater Noida, India. 201308"}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h6><strong>{this.state.selectedPlace.name}</strong></h6>
                        <p>{this.state.selectedPlace.address}</p>
                    </div>
                </InfoWindow>
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA4i5FeJ83mIKzA9_yg0c7ODtl4l6HUWX4'
})(MapComponent);