import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from '@apollo/client';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import client from '@services/client';

import theme from './src/theme';

import { Home } from '@screens/Home';
import { Loading } from '@components';

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
        
        {fontsLoaded ? <Home /> : <Loading />}
      </ThemeProvider>
      </ApolloProvider>
  );
}
