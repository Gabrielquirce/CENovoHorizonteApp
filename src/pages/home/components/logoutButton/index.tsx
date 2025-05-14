import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles';

type LogoutButtonProps = {
  onPress: () => void;
};

export const LogoutButton = ({ onPress }: LogoutButtonProps) => (
  <TouchableOpacity style={styles.logoutButton} onPress={onPress}>
    <Text style={styles.logoutText}>Sair</Text>
  </TouchableOpacity>
);