import { TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';

interface NavButtonProps {
  route: string;
  text: string;
  style?: object;
  textStyle?: object;
}

export const NavButton = ({ route, text, style, textStyle }: NavButtonProps) => (
  <TouchableOpacity
    onPress={() => router.push(route)}
    style={style}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);