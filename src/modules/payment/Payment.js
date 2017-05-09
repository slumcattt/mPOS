/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import PayButton from './PayButton';

import {
    View
} from 'react-native';


export const countryLocalCurrentDenominator = [56, 324];


export default class Payment extends Component {


    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return (
            <View>
           {
                    countryLocalCurrentDenominator.map((value) => {
                        return <PayButton label={value} onPress={() => {
                            alert("Value is" + value)
                        }}/>
                    })
                }

            </View>
        );
    }
}
