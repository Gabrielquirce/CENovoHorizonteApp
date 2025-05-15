import React from 'react';
import { Text, TextStyle } from 'react-native';
import { styles } from '../styles';

type SectionTitleProps = {
  title: string;
  style?: TextStyle;
};

export const SectionTitle = ({ title, style }: SectionTitleProps) => {
  return (
    <Text style={[styles.sectionTitle, style]}>
      {title}
    </Text>
  );
};