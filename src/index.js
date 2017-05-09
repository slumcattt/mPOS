/**
 * Created by Amit on 5/7/17.
 *
 *
 */


import React from 'react'
import { Component } from 'react-native';
import { Provider } from 'react-redux';
import {camera,inventory}  from './modules'
import createStore from './createStore'

const store = createStore()

const Main = () => {
  return (
    <Provider store={store}>
      <inventory.InventoryGridView/>
    </Provider>
  )
}

export default Main
