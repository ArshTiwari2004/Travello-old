import { FaMapMarkerAlt, FaLandmark, FaUtensils, FaCamera, FaPalette, FaMedal } from 'react-icons/fa';
export const globalUsers = [
  { id: 1, name: 'John Doe', location: 'Maharashtra', score: 9500, badges: ['CityExplorer', 'FoodExplorer', 'GoldMedalist'], avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Jane Smith', location: 'Tamil Nadu', score: 9200, badges: ['CulturalAmbassador', 'HeritageHunter', 'SilverMedalist'], avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Mike Johnson', location: 'Uttar Pradesh', score: 8900, badges: ['PhotoPro', 'ArtAdmirer', 'BronzeMedalist'], avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Emily Brown', location: 'Delhi', score: 8700, badges: ['CityExplorer', 'FoodExplorer'], avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, name: 'David Lee', location: 'Maharashtra', score: 8500, badges: ['HeritageHunter', 'PhotoPro'], avatar: 'https://i.pravatar.cc/150?img=5' },
  // ... Add 15 more users with varying scores and badges
];

export const badgeIcons = {
  CityExplorer: FaMapMarkerAlt,
  CulturalAmbassador: FaLandmark,
  FoodExplorer: FaUtensils,
  HeritageHunter: FaLandmark,
  ArtAdmirer: FaPalette,
  PhotoPro: FaCamera,
  GoldMedalist: FaMedal,
  SilverMedalist: FaMedal,
  BronzeMedalist: FaMedal,
};

