/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';



export default class PayButton extends Component {




    constructor(props) {

        super(props);
        buttonstyle ={margin: 2,
            backgroundColor: '#ebebeb',
            fontSize: 18,
            fontWeight:'bold',
            width: 80,
            height: 40,
            borderRadius: 5,
            textAlign:'center',
            textAlignVertical:'center',
            paddingLeft:5,
            paddingRight:5,
            textShadowColor:'#585858',
            textShadowOffset:{width: 1, height: 1},
            textShadowRadius:2}
        console.log(props);
        this.changeStyle = this.changeStyle.bind(this);



    }


    changeStyle = () => {

        alert("changing style");


    };




    render() {
        return (

            <Text style={buttonstyle} onPress={this.changeStyle} >
                {this.props.label}
            </Text>

        );
    }
}
