import { Image } from 'expo-image';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderBtn from './header-btn';

export default function MainHeader() {
  return (
    <View style={styles.container}>
      {/* left section */}
      <View style={styles.leftContainer}>
        <Image
          source={require('../../assets/images/Instagram_title.png')}
          contentFit='cover'
          style={{ width: 120, height: 40 }}
        />
        <Pressable>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={25}
            color='black'
          />
        </Pressable>
      </View>

      {/* right section */}
      {/* on click takes you to another route */}
      <View style={styles.rightContainer}>
        {/*/notifications and /messages */}
        <HeaderBtn iconName='heart' route='/post' />
        <HeaderBtn iconName='facebook-messenger' route='/post' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBlockColor: 'black',
    borderWidth: 4
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    gap: 20,
    marginRight: 3
  },
})
