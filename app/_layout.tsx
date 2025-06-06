import { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Orbitron_400Regular, Orbitron_700Bold, Orbitron_900Black } from '@expo-google-fonts/orbitron';
import { Exo_400Regular, Exo_600SemiBold, Exo_700Bold } from '@expo-google-fonts/exo';
import { Camera, Sparkles, User, Image, Home } from 'lucide-react-native';

export default function RootLayout() {
  useFrameworkReady();

  let [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    Orbitron_700Bold,
    Orbitron_900Black,
    Exo_400Regular,
    Exo_600SemiBold,
    Exo_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000012',
            borderTopWidth: 1,
            borderTopColor: '#FF00FF',
            height: 90,
            paddingBottom: 20,
            paddingTop: 10,
          },
          tabBarActiveTintColor: '#00FFFF',
          tabBarInactiveTintColor: '#666680',
          tabBarLabelStyle: {
            fontFamily: 'Orbitron_700Bold',
            fontSize: 10,
            textTransform: 'uppercase',
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="enhance"
          options={{
            title: 'Enhance',
            tabBarIcon: ({ color, size }) => <Sparkles color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="avatar"
          options={{
            title: 'Avatar',
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="filters"
          options={{
            title: 'Filters',
            tabBarIcon: ({ color, size }) => <Camera color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="gallery"
          options={{
            title: 'Gallery',
            tabBarIcon: ({ color, size }) => <Image color={color} size={size} />,
          }}
        />
      </Tabs>
      <StatusBar style="light" backgroundColor="#000012" />
    </>
  );
}