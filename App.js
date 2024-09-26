import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './index';
// import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (

    <PaperProvider>
      <Main />
    </PaperProvider>

  );
}


