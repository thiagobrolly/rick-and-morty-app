import { StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import theme from './src/theme';
import client from '@services/client';
import { Loading } from '@components';
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
