import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import { styles } from '../../styles';

type HeaderProps = {
  title: string;
  logo: ImageSourcePropType;
};

export const Header = ({ title, logo }: HeaderProps) => (
  <View style={styles.header}>
    <Image source={logo} style={styles.headerImage} />
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);