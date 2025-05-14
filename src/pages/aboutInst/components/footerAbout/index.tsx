import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../styles';

interface FooterAboutProps {
  onPressBack: () => void;
}

export const FooterAbout = ({ onPressBack }: FooterAboutProps) => {
  return (
    <View style={styles.footer}>
      <View style={styles.contactContainer}>
        <FontAwesome name="phone" size={20} color="white" />
        <Text style={styles.contactText}>(00) 1234-5678</Text>
      </View>

      <View style={styles.socialIcons}>
        <FontAwesome name="facebook" size={24} color="white" style={styles.icon} />
        <FontAwesome name="instagram" size={24} color="white" style={styles.icon} />
      </View>

      <TouchableOpacity onPress={onPressBack}>
        <Text style={styles.voltarPagPrincipal}>Voltar à Página Principal</Text>
      </TouchableOpacity>
    </View>
  );
};