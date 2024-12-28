import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { useStore } from '../store';
import { useTheme } from '@/contexts/ThemeContext';

const LoginScreen = () => {
  const login = useStore(state => state.login);
  const isLoading = useStore(state => state.isLoading);
  const { colors } = useTheme();  
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', padding: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ 
          fontSize: 24, 
          color: colors.text, 
          marginBottom: 10,
          fontWeight: 'bold' 
        }}>
          Welcome to Solana Wallet
        </Text>
        <Text style={{ 
          fontSize: 16, 
          color: colors.secondaryText, 
          marginBottom: 40 
        }}>
          Choose how you'd like to get started
        </Text>
        
        <View style={{ width: '100%', maxWidth: 300 }}>
          <Button 
            title="Connect Phantom Wallet" 
            onPress={() => login('phantom')}
            disabled={isLoading}
          />
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginVertical: 20 
          }}>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
            <Text style={{ color: colors.secondaryText, marginHorizontal: 10 }}>or</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
          </View>
          <Button 
            title="Create New Wallet" 
            onPress={() => login('local')}
            disabled={isLoading}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen; 