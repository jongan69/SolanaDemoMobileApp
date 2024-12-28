import "../global.css";
import { Slot } from "expo-router";
import Toast from 'react-native-toast-message';
import { WalletProvider } from "@/contexts/WalletContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { toastConfig } from "@/components/ToastConfig";
import { LogBox } from 'react-native';

// Suppress all warnings in development only
LogBox.ignoreAllLogs();

export default function Layout() {
  return (
    <ThemeProvider>
      <WalletProvider>
        <Slot />
        <Toast config={toastConfig} />
      </WalletProvider>
    </ThemeProvider>
  );
}
