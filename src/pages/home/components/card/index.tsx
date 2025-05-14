import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles';

type CardProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

export const Card = ({ title, subtitle, onPress }: CardProps) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
  </TouchableOpacity>
);