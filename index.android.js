/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import Payment from './src/client/payment/Payment';
import InventoryGridView from './src/client/inventory/inventory_grid'
export default class mPOS extends Component {
    render() {
        return (
            <View>
                <Payment />

            </View>
        );
    }
}


AppRegistry.registerComponent('mPOS', () => InventoryGridView);
