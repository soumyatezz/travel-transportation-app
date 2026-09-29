import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen({ profileStats }) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>
        <Text style={styles.name}>Mira Cooper</Text>
        <Text style={styles.email}>mira@travelsmart.com</Text>
      </View>

      <View style={styles.statsGrid}>
        {profileStats.map((stat) => (
          <View key={stat.id} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.preferenceCard}>
        <Text style={styles.preferenceTitle}>Travel preferences</Text>
        <Text style={styles.preferenceText}>• Window seat</Text>
        <Text style={styles.preferenceText}>• Vegetarian meals</Text>
        <Text style={styles.preferenceText}>• Flexible departure times</Text>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    paddingHorizontal: 18,
    paddingTop: 28,
  },
  headerCard: {
    backgroundColor: '#0f172a',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 18,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#60a5fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 32,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  email: {
    color: '#cbd5e1',
    marginTop: 6,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.10,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  statValue: {
    color: '#0f172a',
    fontSize: 22,
    fontWeight: '700',
  },
  statLabel: {
    color: '#64748b',
    marginTop: 6,
    textAlign: 'center',
    fontSize: 12,
  },
  preferenceCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  preferenceTitle: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 12,
  },
  preferenceText: {
    color: '#475569',
    fontSize: 15,
    marginBottom: 8,
  },
});
