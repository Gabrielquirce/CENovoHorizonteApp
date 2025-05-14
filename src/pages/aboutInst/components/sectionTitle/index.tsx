import React from 'react';
import { Text } from 'react-native';
import { styles } from '../../styles';

export const SectionTitle = ({ children }: { children: string }) => (
  <Text style={styles.sectionTitle}>{children}</Text>
);