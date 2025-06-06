import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Camera, Sparkles, User, Zap, Star, Upload } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000012', '#1a0033', '#330066']}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#FF00FF', '#00FFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.headerGradient}
            >
              <Text style={styles.headerTitle}>AI PHOTO</Text>
              <Text style={styles.headerSubtitle}>ENHANCER</Text>
            </LinearGradient>
            <Text style={styles.tagline}>TRANSFORM • ENHANCE • CREATE</Text>
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <Text style={styles.sectionTitle}>QUICK START</Text>
            
            <TouchableOpacity style={styles.primaryAction}>
              <LinearGradient
                colors={['#FF0080', '#FF4080', '#FF8080']}
                style={styles.actionGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <BlurView intensity={20} style={styles.actionContent}>
                  <Upload color="#FFFFFF" size={32} />
                  <Text style={styles.actionTitle}>UPLOAD PHOTO</Text>
                  <Text style={styles.actionSubtitle}>Enhance in seconds</Text>
                </BlurView>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.actionGrid}>
              <TouchableOpacity style={styles.gridAction}>
                <LinearGradient
                  colors={['#00FFFF', '#0080FF']}
                  style={styles.gridGradient}
                >
                  <Sparkles color="#000012" size={24} />
                  <Text style={styles.gridText}>ENHANCE</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gridAction}>
                <LinearGradient
                  colors={['#FFFF00', '#FF8000']}
                  style={styles.gridGradient}
                >
                  <User color="#000012" size={24} />
                  <Text style={styles.gridText}>AVATAR</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gridAction}>
                <LinearGradient
                  colors={['#80FF00', '#00FF80']}
                  style={styles.gridGradient}
                >
                  <Camera color="#000012" size={24} />
                  <Text style={styles.gridText}>FILTERS</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gridAction}>
                <LinearGradient
                  colors={['#FF00FF', '#8000FF']}
                  style={styles.gridGradient}
                >
                  <Zap color="#000012" size={24} />
                  <Text style={styles.gridText}>EFFECTS</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* Features */}
          <View style={styles.features}>
            <Text style={styles.sectionTitle}>POWERED BY AI</Text>
            
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <Star color="#00FFFF" size={20} />
                <Text style={styles.featureText}>INSTANT ENHANCEMENT</Text>
              </View>
              <View style={styles.featureItem}>
                <Star color="#FF00FF" size={20} />
                <Text style={styles.featureText}>CUSTOM AVATARS</Text>
              </View>
              <View style={styles.featureItem}>
                <Star color="#FFFF00" size={20} />
                <Text style={styles.featureText}>Y2K FILTERS</Text>
              </View>
              <View style={styles.featureItem}>
                <Star color="#80FF00" size={20} />
                <Text style={styles.featureText}>SOCIAL READY</Text>
              </View>
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
    marginBottom: 40,
  },
  headerGradient: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#FF00FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  headerTitle: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 28,
    color: '#000012',
    textAlign: 'center',
    letterSpacing: 3,
  },
  headerSubtitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 24,
    color: '#000012',
    textAlign: 'center',
    letterSpacing: 2,
  },
  tagline: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    color: '#00FFFF',
    marginTop: 15,
    letterSpacing: 2,
    textAlign: 'center',
  },
  quickActions: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 2,
  },
  primaryAction: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  actionGradient: {
    borderRadius: 20,
  },
  actionContent: {
    padding: 30,
    alignItems: 'center',
    borderRadius: 20,
  },
  actionTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 10,
    letterSpacing: 1,
  },
  actionSubtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    color: '#CCCCCC',
    marginTop: 5,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridAction: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  gridGradient: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
  gridText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 12,
    color: '#000012',
    marginTop: 8,
    letterSpacing: 1,
  },
  features: {
    alignItems: 'center',
  },
  featureList: {
    width: '100%',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  featureText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 15,
    letterSpacing: 1,
  },
});