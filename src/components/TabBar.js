import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function TabBar({ selectedTab, onTabChange }) {
  const tabs = [
    { label: 'Home', icon: '🏠' },
    { label: 'Routes', icon: '🛤️' },
    { label: 'Food', icon: '🍽️' },
    { label: 'Profile', icon: '👤' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab.label;
        return (
          <TouchableOpacity
            key={tab.label}
            style={[styles.tabButton, isSelected && styles.tabButtonSelected]}
            onPress={() => onTabChange(tab.label)}
          >
            <Text style={styles.tabIcon}>{tab.icon}</Text>
            <Text style={[styles.tabLabel, isSelected && styles.tabLabelSelected]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 14,
  },
  tabButtonSelected: {
    backgroundColor: '#dbeafe',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '600',
  },
  tabLabelSelected: {
    color: '#1d4ed8',
  },
});
