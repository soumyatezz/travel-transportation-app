import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

function FoodScreen({ foodSuggestions }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Food nearby</Text>

      {foodSuggestions.map((food) => (
        <View key={food.id} style={styles.card}>
          <Image source={{ uri: food.image }} style={styles.image} />
          <View style={styles.infoBlock}>
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.type}>{food.type}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.rating}>⭐ {food.rating}</Text>
              <Text style={styles.time}>{food.time}</Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.price}>{food.price}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Reserve</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default FoodScreen;

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
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 18,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: '100%',
    height: 190,
  },
  infoBlock: {
    padding: 16,
  },
  name: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 20,
  },
  type: {
    color: '#64748b',
    marginTop: 4,
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  rating: {
    color: '#0f172a',
    fontWeight: '600',
  },
  time: {
    color: '#1d4ed8',
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#0f172a',
    fontWeight: '800',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#0f172a',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
