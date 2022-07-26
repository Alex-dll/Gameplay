import { StatusBar } from "expo-status-bar";
import SignIn from "./src/screens/SignIn";

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
