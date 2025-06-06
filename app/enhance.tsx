import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Upload, Sparkles, Zap, Palette, Download, Share2 } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function Enhance() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000012', '#001a33', '#003366']}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#00FFFF', '#0080FF']}
              style={styles.headerGradient}
            >
              <Text style={styles.headerTitle}>PHOTO ENHANCER</Text>
            </LinearGradient>
            <Text style={styles.subtitle}>AI-POWERED ENHANCEMENT</Text>
          </View>

          {/* Photo Upload Area */}
          <TouchableOpacity style={styles.uploadArea}>
            <LinearGradient
              colors={['#0080FF40', '#00FFFF40']}
              style={styles.uploadGradient}
            >
              <BlurView intensity={20} style={styles.uploadContent}>
                <Upload color="#00FFFF" size={48} />
                <Text style={styles.uploadTitle}>UPLOAD PHOTO</Text>
                <Text style={styles.uploadSubtitle}>Tap to select from gallery or take photo</Text>
              </BlurView>
            </LinearGradient>
          </TouchableOpacity>

          {/* Enhancement Options */}
          <View style={styles.enhancementOptions}>
            <Text style={styles.sectionTitle}>ENHANCEMENT MODES</Text>
            
            <View style={styles.optionGrid}>
              <TouchableOpacity style={styles.option}>
                <LinearGradient
                  colors={['#FF0080', '#FF4080']}
                  style={styles.optionGradient}
                >
                  <Sparkles color="#FFFFFF" size={24} />
                  <Text style={styles.optionText}>AUTO ENHANCE</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <LinearGradient
                  colors={['#8000FF', '#FF00FF']}
                  style={styles.optionGradient}
                >
                  <Zap color="#FFFFFF" size={24} />
                  <Text style={styles.optionText}>PORTRAIT MODE</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <LinearGradient
                  colors={['#FFFF00', '#FF8000']}
                  style={styles.optionGradient}
                >
                  <Palette color="#000012" size={24} />
                  <Text style={styles.optionText}>COLOR BOOST</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <LinearGradient
                  colors={['#00FF80', '#80FF00']}
                  style={styles.optionGradient}
                >
                  <Sparkles color="#000012" size={24} />
                  <Text style={styles.optionText}>SKIN SMOOTH</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* Preview Area */}
          <View style={styles.previewSection}>
            <Text style={styles.sectionTitle}>BEFORE & AFTER</Text>
            <View style={styles.previewContainer}>
              <View style={styles.previewPlaceholder}>
                <Text style={styles.placeholderText}>ORIGINAL</Text>
              </View>
              <View style={styles.previewPlaceholder}>
                <Text style={styles.placeholderText}>ENHANCED</Text>
              </View>
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
  uploadArea: {
    marginBottom: 30,
    borderRadius: 20,
    overflow: 'hidden',
  },
  uploadGradient: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#00FFFF',
  },
  uploadContent: {
    padding: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  uploadTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 18,
    color: '#00FFFF',
    marginTop: 10,
    letterSpacing: 1,
  },
  uploadSubtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    color: '#CCCCCC',
    marginTop: 5,
    textAlign: 'center',
  },
  enhancementOptions: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
    letterSpacing: 2,
  },
  optionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  optionGradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
  },
  optionText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 10,
    color: '#FFFFFF',
    marginTop: 8,
    letterSpacing: 1,
    textAlign: 'center',
  },
  previewSection: {
    marginBottom: 30,
  },
  previewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previewPlaceholder: {
    width: '48%',
    height: 150,
    backgroundColor: '#333366',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00FFFF',
  },
  placeholderText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 12,
    color: '#00FFFF',
    letterSpacing: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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