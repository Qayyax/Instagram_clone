import { Pressable } from "react-native";
import { Href, useRouter } from 'expo-router';
import { FontAwesome6 } from "@expo/vector-icons";

type Props = {
  iconName: keyof typeof FontAwesome6.glyphMap;
  route: Href;
}

export default function HeaderBtn({ iconName, route }: Props) {
  const router = useRouter();

  /**
   * Handles route based on the string passed to the HeaderBtn props
   * <HeaderBtn route='/post-notifications' />
  **/
  const handleRoute = () => {
    router.push(route);
  }

  return (
    <Pressable onPress={handleRoute}>
      <FontAwesome6
        name={iconName}
        size={30}
      />
    </Pressable>
  );
}

