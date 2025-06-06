import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Camera, Shuffle, Download, Share2, Sparkles, Zap } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function Avatar() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000012', '#330066', '#660033']}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#FF00FF', '#8000FF']}
              style={styles.headerGradient}
            >
              <Text style={styles.headerTitle}>AI AVATAR</Text>
            </LinearGradient>
            <Text style={styles.subtitle}>CREATE YOUR DIGITAL SELF</Text>
          </View>

          {/* Avatar Preview */}
          <View style={styles.avatarPreview}>
            <LinearGradient
              colors={['#FF00FF40', '#8000FF40']}
              style={styles.previewGradient}
            >
              <BlurView intensity={20} style={styles.previewContent}>
                <User color="#FF00FF" size={80} />
                <Text style={styles.previewText}>YOUR AVATAR</Text>
                <Text style={styles.previewSubtext}>Upload photo to generate</Text>
              </BlurView>
            </LinearGradient>
          </View>

          {/* Avatar Styles */}
          <View style={styles.stylesSection}>
            <Text style={styles.sectionTitle}>AVATAR STYLES</Text>
            
            <View style={styles.styleGrid}>
              <TouchableOpacity style={styles.styleOption}>
                <LinearGradient
                  colors={['#FF0080', '#FF4080']}
                  style={styles.styleGradient}
                >
                  <Sparkles color="#FFFFFF" size={24} />
                  <Text style={styles.styleText}>CYBERPUNK</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.styleOption}>
                <LinearGradient
                  colors={['#00FFFF', '#0080FF']}
                  style={styles.styleGradient}
                >
                  <Zap color="#000012" size={24} />
                  <Text style={styles.styleText}>NEON</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.styleOption}>
                <LinearGradient
                  colors={['#FFFF00', '#FF8000']}
                  style={styles.styleGradient}
                >
                  <User color="#000012" size={24} />
                  <Text style={styles.styleText}>ANIME</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.styleOption}>
                <LinearGradient
                  colors={['#80FF00', '#00FF80']}
                  style={styles.styleGradient}
                >
                  <Sparkles color="#000012" size={24} />
                  <Text style={styles.styleText}>HOLOGRAM</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.styleOption}>
                <LinearGradient
                  colors={['#FF00FF', '#8000FF']}
                  style={styles.styleGradient}
                >
                  <Zap color="#FFFFFF" size={24} />
                  <Text style={styles.styleText}>MATRIX</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.styleOption}>
                <LinearGradient
                  colors={['#FF8000', '#FF0080']}
                  style={styles.styleGradient}
                >
                  <User color="#FFFFFF" size={24} />
                  <Text style={styles.styleText}>RETRO</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionSection}>
            <TouchableOpacity style={styles.uploadButton}>
              <LinearGradient
                colors={['#FF00FF', '#8000FF']}
                style={styles.uploadGradient}
              >
                <Camera color="#FFFFFF" size={24} />
                <Text style={styles.uploadText}>UPLOAD PHOTO</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.randomButton}>
              <LinearGradient
                colors={['#00FFFF', '#0080FF']}
                style={styles.randomGradient}
              >
                <Shuffle color="#000012" size={20} />
                <Text style={styles.randomText}>RANDOM STYLE</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.bottomButtons}>
              <TouchableOpacity style={styles.bottomButton}>
                <LinearGradient
                  colors={['#80FF00', '#00FF80']}
                  style={styles.bottomGradient}
                >
                  <Download color="#000012" size={18} />
                  <Text style={styles.bottomText}>SAVE</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.bottomButton}>
                <LinearGradient
                  colors={['#FFFF00', '#FF8000']}
                  style={styles.bottomGradient}
                >
                  <Share2 color="#000012" size={18} />
                  <Text style={styles.bottomText}>SHARE</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
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
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    color: '#FF00FF',
    marginTop: 10,
    letterSpacing: 1,
  },
  avatarPreview: {
    marginBottom: 30,
    borderRadius: 20,
    overflow: 'hidden',
  },
  previewGradient: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF00FF',
  },
  previewContent: {
    padding: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  previewText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 18,
    color: '#FF00FF',
    marginTop: 15,
    letterSpacing: 1,
  },
  previewSubtext: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    color: '#CCCCCC',
    marginTop: 5,
  },
  stylesSection: {
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
  styleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  styleOption: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  styleGradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
  },
  styleText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 10,
    color: '#FFFFFF',
    marginTop: 8,
    letterSpacing: 1,
  },
  actionSection: {
    gap: 15,
  },
  uploadButton: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  uploadGradient: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  uploadText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 10,
    letterSpacing: 1,
  },
  randomButton: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  randomGradient: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  randomText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 14,
    color: '#000012',
    marginLeft: 8,
    letterSpacing: 1,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomButton: {
    width: '48%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  bottomGradient: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  bottomText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 12,
    color: '#000012',
    marginLeft: 5,
    letterSpacing: 1,
  },
});