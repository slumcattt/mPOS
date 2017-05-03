/**
 * Created by Amit Bajpai on 5/3/17.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class InventoryGridView extends Component {



  let
  styles = {
    list: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    row: {
      justifyContent: 'center',
      padding: 5,
      margin: 10,
      width: 100,
      height: 100,
      backgroundColor: '#F6F6F6',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#CCC'
    },
    thumb: {
      width: 64,
      height: 64
    },
    text: {
      flex: 1,
      marginTop: 5,
      fontWeight: 'bold'
    }
  }

  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {dataSource:ds.cloneWithRows(this._genRows({}))};
  }




  componentWillMount () {
    this._pressData = {}
  }

  render () {

    return (
      // ListView wraps ScrollView and so takes on its properties.
      // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
      <ListView contentContainerStyle={this.styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
      />
    )

  }

  hashCode = (str) =>  {
    var hash = 15
    for (var ii = str.length - 1; ii >= 0; ii--) {
      hash = ((hash << 5) - hash) + str.charCodeAt(ii)
    }
    return hash
  }


  _renderRow = (rowData,sectionID, rowID)=> {
     let
       THUMB_URLS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png']

     let rowHash = Math.abs(this.hashCode(rowData))
    var imgSource = {
      uri: THUMB_URLS[rowHash % THUMB_URLS.length],
    }
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={this.styles.row}>
            <Image style={this.styles.thumb} source={imgSource}/>
            <Text style={this.styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  _genRows = (pressData) => {
    var dataBlob = []
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (X)' : ''
      dataBlob.push('Cell ' + ii + pressedText)
    }
    return dataBlob
  }

  const
  _pressRow = (rowID) => {
    this._pressData[rowID] = !this._pressData[rowID]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(
        this._genRows(this._pressData)
      )
    })
  }

}
