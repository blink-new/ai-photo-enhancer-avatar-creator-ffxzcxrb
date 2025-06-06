import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Camera, Filter, Palette, Sparkles, Download, Share2 } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function Filters() {
  const filterCategories = [
    { name: 'Y2K RETRO', color: ['#FF00FF', '#8000FF'] },
    { name: 'NEON GLOW', color: ['#00FFFF', '#0080FF'] },
    { name: 'CYBERPUNK', color: ['#FF0080', '#FF4080'] },
    { name: 'HOLOGRAM', color: ['#80FF00', '#00FF80'] },
    { name: 'VAPORWAVE', color: ['#FFFF00', '#FF8000'] },
    { name: 'MATRIX', color: ['#00FF00', '#008000'] },
  ];

  const backgroundEffects = [
    { name: 'SPACE', color: ['#000033', '#330066'] },
    { name: 'CITY', color: ['#FF0080', '#8000FF'] },
    { name: 'GRID', color: ['#00FFFF', '#0080FF'] },
    { name: 'LASER', color: ['#FF00FF', '#FF0080'] },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000012', '#1a0033', '#0d1a33']}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#00FFFF', '#80FF00']}
              style={styles.headerGradient}
            >
              <Text style={styles.headerTitle}>FILTERS & FX</Text>
            </LinearGradient>
            <Text style={styles.subtitle}>Y2K STYLE FILTERS</Text>
          </View>

          {/* Photo Upload Area */}
          <TouchableOpacity style={styles.photoArea}>
            <LinearGradient
              colors={['#00FFFF40', '#80FF0040']}
              style={styles.photoGradient}
            >
              <BlurView intensity={20} style={styles.photoContent}>
                <Camera color="#00FFFF" size={48} />
                <Text style={styles.photoTitle}>ADD PHOTO</Text>
                <Text style={styles.photoSubtitle}>Camera or Gallery</Text>
              </BlurView>
            </LinearGradient>
          </TouchableOpacity>

          {/* Filter Categories */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FILTER PACKS</Text>
            <View style={styles.filterGrid}>
              {filterCategories.map((filter, index) => (
                <TouchableOpacity key={index} style={styles.filterOption}>
                  <LinearGradient
                    colors={filter.color}
                    style={styles.filterGradient}
                  >
                    <Filter color="#FFFFFF" size={20} />
                    <Text style={styles.filterText}>{filter.name}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Background Effects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>BACKGROUNDS</Text>
            <View style={styles.backgroundGrid}>
              {backgroundEffects.map((bg, index) => (
                <TouchableOpacity key={index} style={styles.backgroundOption}>
                  <LinearGradient
                    colors={bg.color}
                    style={styles.backgroundGradient}
                  >
                    <Palette color="#FFFFFF" size={20} />
                    <Text style={styles.backgroundText}>{bg.name}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Special Effects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SPECIAL FX</Text>
            <View style={styles.effectsGrid}>
              <TouchableOpacity style={styles.effectOption}>
                <LinearGradient
                  colors={['#FF00FF', '#8000FF']}
                  style={styles.effectGradient}
                >
                  <Sparkles color="#FFFFFF" size={24} />
                  <Text style={styles.effectText}>GLITCH</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.effectOption}>
                <LinearGradient
                  colors={['#00FFFF', '#0080FF']}
                  style={styles.effectGradient}
                >
                  <Sparkles color="#000012" size={24} />
                  <Text style={styles.effectText}>HOLOGRAM</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.effectOption}>
                <LinearGradient
                  colors={['#FFFF00', '#FF8000']}
                  style={styles.effectGradient}
                >
                  <Sparkles color="#000012" size={24} />
                  <Text style={styles.effectText}>CHROME</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.effectOption}>
                <LinearGradient
                  colors={['#80FF00', '#00FF80']}
                  style={styles.effectGradient}
                >
                  <Sparkles color="#000012" size={24} />
                  <Text style={styles.effectText}>NEON</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <LinearGradient
                colors={['#00FFFF', '#0080FF']}
                style={styles.buttonGradient}
              >
                <Download color="#000012" size={20} />
                <Text style={styles.buttonText}>SAVE</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <LinearGradient
                colors={['#FF00FF', '#8000FF']}
                style={styles.buttonGradient}
              >
                <Share2 color="#FFFFFF" size={20} />
                <Text style={styles.buttonText}>SHARE</Text>
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
    color: '#00FFFF',
    marginTop: 10,
    letterSpacing: 1,
  },
  photoArea: {
    marginBottom: 30,
    borderRadius: 20,
    overflow: 'hidden',
  },
  photoGradient: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#00FFFF',
  },
  photoContent: {
    padding: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  photoTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 18,
    color: '#00FFFF',
    marginTop: 10,
    letterSpacing: 1,
  },
  photoSubtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    color: '#CCCCCC',
    marginTop: 5,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
    letterSpacing: 2,
  },
  filterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  filterOption: {
    width: '48%',
    marginBottom: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  filterGradient: {
    padding: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  filterText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 9,
    color: '#FFFFFF',
    marginTop: 5,
    letterSpacing: 1,
  },
  backgroundGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  backgroundOption: {
    width: '48%',
    marginBottom: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  backgroundGradient: {
    padding: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  backgroundText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 9,
    color: '#FFFFFF',
    marginTop: 5,
    letterSpacing: 1,
  },
  effectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  effectOption: {
    width: '48%',
    marginBottom: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  effectGradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 12,
  },
  effectText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 10,
    color: '#FFFFFF',
    marginTop: 5,
    letterSpacing: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    width: '48%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  buttonGradient: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 8,
    letterSpacing: 1,
  },
});