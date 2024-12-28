import { View } from "react-native";
import LoginScreen from "./LoginScreen";
import { useEffect } from "react";
import { router, usePathname } from "expo-router";
import { useWallet } from "@/contexts/WalletContext";
import Toast from "react-native-toast-message";


export default function Index() {
  const pathname = usePathname();
  const { isAuthenticated } = useWallet();
  console.log(pathname);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home/(root)")
      Toast.show({
        type: "success",
        text1: "Welcome to the app!",
        text2: "It's time to lock in.",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "You are not logged in.",
      });
    };
  }, [isAuthenticated]);

  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  );
}
