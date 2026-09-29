import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

function HomeScreen({ tripSummary, quickActions }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.name}>Mira</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>
      </View>

      <View style={styles.primaryCard}>
        <Text style={styles.cardLabel}>Upcoming trip</Text>
        <View style={styles.tripHeader}>
          <Text style={styles.destination}>{tripSummary.destination}</Text>
          <Text style={styles.tripStatus}>{tripSummary.status}</Text>
        </View>
        <View style={styles.tripMetaRow}>
          <Text style={styles.metaText}>{tripSummary.departure}</Text>
          <Text style={styles.metaText}>{tripSummary.transport}</Text>
        </View>
        <View style={styles.tripMetaRow}>
          <Text style={styles.metaText}>{tripSummary.seat}</Text>
          <Text style={styles.metaText}>{tripSummary.eta}</Text>
        </View>
        <View style={styles.splitRow}>
          <Text style={styles.price}>{tripSummary.price}</Text>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>View details</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick actions</Text>
      <View style={styles.quickActionsRow}>
        {quickActions.map((action) => (
          <TouchableOpacity key={action.id} style={styles.quickAction}>
            <Text style={styles.quickActionIcon}>{action.icon}</Text>
            <Text style={styles.quickActionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Route overview</Text>
      <View style={styles.summaryCard}>
        <View style={styles.summaryLine}>
          <Text style={styles.summaryLabel}>Depart</Text>
          <Text style={styles.summaryValue}>09:30 AM</Text>
        </View>
        <View style={styles.summaryLine}>
          <Text style={styles.summaryLabel}>Arrival</Text>
          <Text style={styles.summaryValue}>12:45 PM</Text>
        </View>
        <View style={styles.summaryLine}>
          <Text style={styles.summaryLabel}>Status</Text>
          <Text style={styles.summaryValue}>Platform B3</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    paddingHorizontal: 18,
  },
  contentContainer: {
    paddingTop: 18,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  greeting: {
    fontSize: 16,
    color: '#64748b',
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1d4ed8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
  primaryCard: {
    backgroundColor: '#0f172a',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#0f172a',
    shadowOpacity: 0.15,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    marginBottom: 24,
  },
  cardLabel: {
    color: '#a5b4fc',
    marginBottom: 12,
    fontSize: 13,
    fontWeight: '600',
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  destination: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 22,
    flex: 1,
    marginRight: 10,
  },
  tripStatus: {
    color: '#86efac',
    fontWeight: '600',
    fontSize: 12,
  },
  tripMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  metaText: {
    color: '#dfe8ff',
    fontSize: 13,
  },
  splitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  price: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: '#60a5fa',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  sectionTitle: {
    fontWeight: '700',
    color: '#0f172a',
    fontSize: 18,
    marginBottom: 12,
  },
  quickActionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickAction: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  quickActionText: {
    fontWeight: '600',
    color: '#0f172a',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  summaryLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    color: '#64748b',
    fontSize: 14,
  },
  summaryValue: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 15,
  },
});
