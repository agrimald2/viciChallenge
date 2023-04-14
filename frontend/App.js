import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Products from './Views/Products';
import News from './Views//News';

const App = () => {
  const [activeTab, setActiveTab] = useState('Products');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {activeTab === 'Products' ? <Products /> : <News />}
      </ScrollView>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab('Products')}
        >
          <Text style={[styles.tabText, activeTab === 'Products' && styles.activeTabText]}>
            Products
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab('News')}
        >
          <Text style={[styles.tabText, activeTab === 'News' && styles.activeTabText]}>
            News
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: 'blue',
  },
});

export default App;