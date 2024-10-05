import { PaperProvider } from "react-native-paper";
import StackNavigator from "./Navigation/Stacknavigator";

export default function App() {
  return (
    <PaperProvider>
      <StackNavigator />
    </PaperProvider>
  );
}
