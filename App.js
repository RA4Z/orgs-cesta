import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import * as SplashScreen from 'expo-splash-screen';

import mock from './src/mocks/cesta'
import Cesta from './src/telas/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  SplashScreen.preventAutoHideAsync()
    .then(() => {
      // Suas ações aqui, como carregar dados iniciais ou redirecionar o usuário
    })
    .finally(() => SplashScreen.hideAsync());

  if(!fonteCarregada) {
    return null
  }

  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
