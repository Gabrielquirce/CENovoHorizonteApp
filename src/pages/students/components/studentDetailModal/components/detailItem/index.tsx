import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface DetailItemProps {
    onPress?: () => void;
  label: string;
  value?: string;
}

export default function DetailItem({ label, value }: DetailItemProps) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value || 'Não informado'}</Text>
    </View>
  );
}