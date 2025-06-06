import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Download, Share2, Trash2, Heart, Eye } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function Gallery() {
  // Mock gallery data
  const galleryItems = [
    { id: '1', type: 'enhanced', title: 'SELFIE ENHANCED', likes: 12 },
    { id: '2', type: 'avatar', title: 'CYBERPUNK AVATAR', likes: 8 },
    { id: '3', type: 'filtered', title: 'NEON FILTER', likes: 15 },
    { id: '4', type: 'enhanced', title: 'GROUP PHOTO', likes: 6 },
    { id: '5', type: 'avatar', title: 'HOLOGRAM AVATAR', likes: 20 },
    { id: '6', type: 'filtered', title: 'Y2K RETRO', likes: 11 },
    { id: '7', type: 'enhanced', title: 'PORTRAIT MODE', likes: 9 },
    { id: '8', type: 'filtered', title: 'MATRIX EFFECT', likes: 14 },
  ];

  const getGradientColors = (type: string) => {
    switch (type) {
      case 'enhanced': return ['#00FFFF', '#0080FF'];
      case 'avatar': return ['#FF00FF', '#8000FF'];
      case 'filtered': return ['#80FF00', '#00FF80'];
      default: return ['#FFFF00', '#FF8000'];
    }
  };

  const renderGalleryItem = ({ item, index }: any) => (
    <TouchableOpacity style={styles.galleryItem}>
      <LinearGradient
        colors={getGradientColors(item.type)}
        style={styles.itemGradient}
      >
        <BlurView intensity={30} style={styles.itemContent}>
          <Image color="#FFFFFF" size={40} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.itemStats}>
            <Heart color="#FF0080" size={14} />
            <Text style={styles.likesText}>{item.likes}</Text>
          </View>
        </BlurView>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000012', '#0d1a33', '#1a0d33']}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#80FF00', '#00FF80']}
              style={styles.headerGradient}
            >
              <Text style={styles.headerTitle}>MY GALLERY</Text>
            </LinearGradient>
            <Text style={styles.subtitle}>YOUR DIGITAL CREATIONS</Text>
          </View>

          {/* Stats */}
          <View style={styles.statsSection}>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <LinearGradient
                  colors={['#00FFFF', '#0080FF']}
                  style={styles.statGradient}
                >
                  <Text style={styles.statNumber}>24</Text>
                  <Text style={styles.statLabel}>ENHANCED</Text>
                </LinearGradient>
              </View>

              <View style={styles.statItem}>
                <LinearGradient
                  colors={['#FF00FF', '#8000FF']}
                  style={styles.statGradient}
                >
                  <Text style={styles.statNumber}>12</Text>
                  <Text style={styles.statLabel}>AVATARS</Text>
                </LinearGradient>
              </View>

              <View style={styles.statItem}>
                <LinearGradient
                  colors={['#80FF00', '#00FF80']}
                  style={styles.statGradient}
                >
                  <Text style={styles.statNumber}>18</Text>
                  <Text style={styles.statLabel}>FILTERED</Text>
                </LinearGradient>
              </View>

              <View style={styles.statItem}>
                <LinearGradient
                  colors={['#FFFF00', '#FF8000']}
                  style={styles.statGradient}
                >
                  <Text style={styles.statNumber}>156</Text>
                  <Text style={styles.statLabel}>LIKES</Text>
                </LinearGradient>
              </View>
            </View>
          </View>

          {/* Filter Tabs */}
          <View style={styles.filterTabs}>
            <TouchableOpacity style={styles.filterTab}>
              <LinearGradient
                colors={['#FFFFFF', '#CCCCCC']}
                style={styles.activeTab}
              >
                <Text style={styles.activeTabText}>ALL</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterTab}>
              <Text style={styles.inactiveTabText}>ENHANCED</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterTab}>
              <Text style={styles.inactiveTabText}>AVATARS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterTab}>
              <Text style={styles.inactiveTabText}>FILTERS</Text>
            </TouchableOpacity>
          </View>

          {/* Gallery Grid */}
          <View style={styles.galleryGrid}>
            <FlatList
              data={galleryItems}
              renderItem={renderGalleryItem}
              numColumns={2}
              columnWrapperStyle={styles.row}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
            />
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickAction}>
              <LinearGradient
                colors={['#00FFFF', '#0080FF']}
                style={styles.quickGradient}
              >
                <Download color="#000012" size={20} />
                <Text style={styles.quickText}>DOWNLOAD ALL</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickAction}>
              <LinearGradient
                colors={['#FF00FF', '#8000FF']}
                style={styles.quickGradient}
              >
                <Share2 color="#FFFFFF" size={20} />
                <Text style={styles.quickText}>SHARE SELECTED</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerGradient: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 22,
    color: '#000012',
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    color: '#80FF00',
    marginTop: 10,
    letterSpacing: 1,
  },
  statsSection: {
    marginBottom: 25,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '23%',
    marginBottom: 10,
  },
  statGradient: {
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 16,
    color: '#000012',
    letterSpacing: 1,
  },
  statLabel: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 8,
    color: '#000012',
    marginTop: 2,
    letterSpacing: 1,
  },
  filterTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  filterTab: {
    flex: 1,
    marginHorizontal: 2,
  },
  activeTab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTabText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 10,
    color: '#000012',
    letterSpacing: 1,
  },
  inactiveTabText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 10,
    color: '#666680',
    textAlign: 'center',
    paddingVertical: 10,
    letterSpacing: 1,
  },
  galleryGrid: {
    marginBottom: 25,
  },
  row: {
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  itemGradient: {
    borderRadius: 15,
  },
  itemContent: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
    height: 120,
    justifyContent: 'center',
  },
  itemTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 9,
    color: '#FFFFFF',
    marginTop: 8,
    letterSpacing: 1,
    textAlign: 'center',
  },
  itemStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  likesText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: 3,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickAction: {
    width: '48%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  quickGradient: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  quickText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 11,
    color: '#FFFFFF',
    marginLeft: 8,
    letterSpacing: 1,
  },
});