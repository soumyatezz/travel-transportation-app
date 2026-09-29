import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RouteScreen from './src/screens/RouteScreen';
import FoodScreen from './src/screens/FoodScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import TabBar from './src/components/TabBar';
import {
  tripSummary,
  routeOptions,
  foodSuggestions,
  profileStats,
  quickActions,
} from './src/data/mockData';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Home');

  const renderScreen = () => {
    switch (selectedTab) {
      case 'Routes':
        return <RouteScreen routeOptions={routeOptions} />;
      case 'Food':
        return <FoodScreen foodSuggestions={foodSuggestions} />;
      case 'Profile':
        return <ProfileScreen profileStats={profileStats} />;
      default:
        return <HomeScreen tripSummary={tripSummary} quickActions={quickActions} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appShell}>{renderScreen()}</View>
      <TabBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  appShell: {
    flex: 1,
  },
});
