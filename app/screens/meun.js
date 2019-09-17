import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { FontAwesome } from '@expo/vector-icons'
export default class MenuRight extends Component {
  _menu = null;
  setMenuRef = ref => {
    this._menu = ref;
  };
  hideMenu = () => {
    this._menu.hide();
  };
  showMenu = () => {
    this._menu.show();
  };
  render() {
    return (
      <View>
        <Menu
          ref={this.setMenuRef}
          animationDuration={300}
          style={{ backgroundColor: '#1e2326' }}
          button={<Text onPress={this.showMenu}> <FontAwesome name='ellipsis-v' size={40} color={'#1e2326'} /></Text>}
        >
          <MenuItem onPress={this.hideMenu} onPress={() => this.props.navigation.navigate('UserGuide')}><Text style={styles.items}>User Guide</Text></MenuItem>
          <MenuItem onPress={this.hideMenu} onPress={() => this.props.navigation.navigate('Feedback')}><Text style={styles.items}>Feedback</Text></MenuItem>

          <MenuItem onPress={this.hideMenu} onPress={() => this.props.navigation.navigate('AboutUs')}><Text style={styles.items}>About</Text></MenuItem>
        </Menu>
      </View>
    );
  }
}
const styles = StyleSheet.create({ items: { color: '#652d90' } });
