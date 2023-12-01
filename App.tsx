import { ApolloProvider } from '@apollo/client';
import client from '@services/client';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Loading } from '@components';
import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </ApolloProvider>
  );
}
