import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles';

type Props = {
  onPress: () => void;
};

export const BackButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.voltarPagPrincipal}>Voltar à Página Principal</Text>
  </TouchableOpacity>
);