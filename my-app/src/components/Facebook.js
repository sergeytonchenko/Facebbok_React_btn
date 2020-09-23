import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';

export default class FacebookLogin extends Component {
    state = {
        auth: false,
        name: '',
        picture: ''
    }

    componentClicked = () => {
        console.log('Hi ckicked');
    }

    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });
      }

    render() {
        let facebookData;

        this.state.auth ?
            facebookData = (
                <div>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h3>Hello, my name is {this.state.name}</h3>                        
                </div>
            )    :
            facebookData = (
            <FacebookLoginBtn
                appId="1172581593124899"
                autoLoad={true}
                fields="name, picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
        return (
            <>
                {facebookData}
            </>
        );
    }
}