import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { useWallet } from '@/contexts/WalletContext';
import { useStore } from '@/store';
import { createTransferTransaction } from '@/utils/transactions';
import { PublicKey } from '@solana/web3.js';

const HomeScreen = () => {
  const { walletType, publicKey, logout } = useWallet();
  const signTransaction = useStore(state => state.signTransaction)
  const exportKey = useStore(state => state.exportPrivateKey)

  const handleSignTransaction = async () => {
    const transaction = await createTransferTransaction(new PublicKey(publicKey), new PublicKey(publicKey), 1);
    await signTransaction(transaction);
  };

  const handleExportKey = async () => {
    const key = await exportKey();
    console.log(key);
  };

  return (
    <View className="flex-1 bg-neutral-800 p-5">
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl text-white font-bold mb-2.5">Wallet Connected</Text>
        <Text className="text-base text-neutral-300 mb-2.5">Connected with: {walletType}</Text>
        <Text className="text-base text-neutral-300 mb-2.5">Public Key: {publicKey}</Text>
        
        <View className="w-full max-w-[300px] mt-8">
          <Button 
            title="Sign Transaction" 
            onPress={handleSignTransaction}
          />
          {walletType === 'local' && (
            <View className="mt-2.5">
              <Button 
                title="Export Private Key" 
                onPress={handleExportKey}
              />
            </View>
          )}
          <View className="mt-2.5">
            <Button 
              title="Disconnect" 
              onPress={logout}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen 