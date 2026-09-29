export const tripSummary = {
  destination: 'Paris, France',
  departure: 'Tue, 15 Oct',
  status: 'On time',
  eta: '3h 40m',
  transport: 'High-speed train',
  price: '$128',
  seat: 'Seat 7A',
};

export const quickActions = [
  { id: '1', title: 'Book ride', icon: '🚗' },
  { id: '2', title: 'Find hotels', icon: '🏨' },
  { id: '3', title: 'Plan trip', icon: '🧭' },
  { id: '4', title: 'Save route', icon: '⭐' },
];

export const routeOptions = [
  {
    id: '1',
    title: 'Train to Paris',
    type: 'Rail',
    price: '$128',
    duration: '3h 40m',
    badge: 'Fastest',
    departure: '08:25 AM',
    arrival: '12:05 PM',
  },
  {
    id: '2',
    title: 'Flight to Paris',
    type: 'Air',
    price: '$210',
    duration: '1h 15m',
    badge: 'Popular',
    departure: '06:40 AM',
    arrival: '08:00 AM',
  },
  {
    id: '3',
    title: 'Coach to Lyon',
    type: 'Coach',
    price: '$54',
    duration: '5h 10m',
    badge: 'Budget',
    departure: '09:10 AM',
    arrival: '02:20 PM',
  },
];

export const foodSuggestions = [
  {
    id: '1',
    name: 'Le Petit Boulot',
    type: 'French Bistro',
    rating: '4.8',
    time: '12 min away',
    price: '$$$',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2',
    name: 'Mimoza Street Cafe',
    type: 'Coffee & Brunch',
    rating: '4.6',
    time: '9 min away',
    price: '$$',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '3',
    name: 'Saffron Table',
    type: 'Mediterranean',
    rating: '4.9',
    time: '15 min away',
    price: '$$$',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
  },
];

export const profileStats = [
  { id: '1', label: 'Trips saved', value: '12' },
  { id: '2', label: 'Miles tracked', value: '2,430' },
  { id: '3', label: 'Loyalty points', value: '840' },
];
