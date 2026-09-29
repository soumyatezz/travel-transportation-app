import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

function RouteScreen({ routeOptions }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Choose your route</Text>
      <View style={styles.searchBox}>
        <Text style={styles.searchText}>Search train, flight, bus...</Text>
      </View>

      {routeOptions.map((option) => (
        <View key={option.id} style={styles.routeCard}>
          <View style={styles.routeHeader}>
            <Text style={styles.routeTitle}>{option.title}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{option.badge}</Text>
            </View>
          </View>

          <View style={styles.routeMetaRow}>
            <Text style={styles.type}>{option.type}</Text>
            <Text style={styles.duration}>{option.duration}</Text>
          </View>

          <View style={styles.routeTimesRow}>
            <View>
              <Text style={styles.timeLabel}>Departure</Text>
              <Text style={styles.timeValue}>{option.departure}</Text>
            </View>
            <View>
              <Text style={styles.timeLabel}>Arrival</Text>
              <Text style={styles.timeValue}>{option.arrival}</Text>
            </View>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.price}>{option.price}</Text>
            <TouchableOpacity style={styles.selectButton}>
              <Text style={styles.selectButtonText}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default RouteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    paddingHorizontal: 18,
  },
  contentContainer: {
    paddingTop: 22,
    paddingBottom: 40,
  },
  title: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 26,
    marginBottom: 16,
  },
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  searchText: {
    color: '#64748b',
    fontSize: 15,
  },
  routeCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  routeTitle: {
    fontWeight: '700',
    color: '#0f172a',
    fontSize: 18,
    flex: 1,
  },
  badge: {
    backgroundColor: '#dbeafe',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    color: '#1d4ed8',
    fontWeight: '600',
    fontSize: 11,
  },
  routeMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  type: {
    color: '#475569',
    fontWeight: '600',
  },
  duration: {
    color: '#0f172a',
    fontWeight: '700',
  },
  routeTimesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  timeLabel: {
    color: '#64748b',
    fontSize: 12,
    marginBottom: 4,
  },
  timeValue: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 15,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#0f172a',
    fontWeight: '800',
    fontSize: 24,
  },
  selectButton: {
    backgroundColor: '#0f172a',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  selectButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
