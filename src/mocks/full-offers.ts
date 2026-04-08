import { FullOffer } from '../types/offer';

export const fullOffers: FullOffer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
      'Coffee machine',
      'Wi-Fi',
      'Kitchen'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '2',
    title: 'Cozy room in the heart of Paris',
    type: 'room',
    price: 100,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.7,
    description: 'A historical building in the Latin Quarter.\nThis cozy room offers a authentic Parisian experience with a view of narrow charming streets.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Cabel TV', 'Fridge'],
    host: {
      name: 'Claude',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '3',
    title: 'Luxury Hotel with Grand Place view',
    type: 'hotel',
    price: 250,
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    description: 'Experience the heart of Belgium in this premium hotel.\nHigh-class service and elegant interiors for a perfect stay.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Air conditioning', 'Minibar', 'Towels', 'Breakfast'],
    host: {
      name: 'Hotel Manager',
      avatarUrl: 'img/avatar.svg',
      isPro: true
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 2,
  },
  {
    id: '4',
    title: 'Modern House in a quiet district',
    type: 'house',
    price: 180,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 52.3809553943508,
        longitude: 6.776314,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.9,
    description: 'Spacious modern house perfect for a family trip.\nGarden and private parking included.',
    bedrooms: 4,
    goods: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Dishwasher', 'Fridge', 'Parking'],
    host: {
      name: 'Dieter',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    maxAdults: 6,
  }
];

