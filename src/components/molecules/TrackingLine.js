import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import metrics from '../../theme/metrics'
import colors from '../../theme/color'

const TrackingLine = ({ component, svg }) => {
  return (
    <View style={styles.mainTrackingContainer}>
      <View style={styles.centerLineContainer}>
        {svg}
        <View style={styles.line}></View>
      </View>
      {component}
    </View>
  )
}

export default TrackingLine

const styles = StyleSheet.create({
  mainTrackingContainer: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal:metrics.changeByMobileDPI(20),
    marginTop:metrics.changeByMobileDPI(10)
  },
  line: {
    width: metrics.changeByMobileDPI(1.5),
    backgroundColor: colors.graySolid,
    flex: 1,
    marginTop:metrics.changeByMobileDPI(10)
  },
  centerLineContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginRight:metrics.changeByMobileDPI(20)
  }
})
