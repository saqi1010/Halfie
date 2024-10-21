import {  View } from 'react-native'
import React from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import hooks from './hooks'
const ProfileScreen = () => {
  const { signOut,accountDelete} = hooks()
  return (
    <View style={styles.mainContainer}>
   <GridentButton
            extrenalStyle={styles.extrenalStyle}
            onClick={signOut}
            buttonText='Sign Out'
          />
          <GridentButton
            extrenalStyle={styles.extrenalStyle}
            onClick={accountDelete}
            buttonText='Account Delete'
          />
    </View>
  )
}
export default ProfileScreen
