import { FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import hooks from './hooks';
import ProfileHeader from '../../components/atoms/ProfileHeader';
import metrics from '../../theme/metrics';
import GlobalSearch from '../../components/molecules/GlobalSearch';
import NotificationSvg from '../../assets/svg/BellSvg.svg';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';
const ViewOrderScreen = () => {
  const {
    filteredData,
    renderViewOrderDate,
    navigateToNotification,
    setSearchQuery,
    searchQuery
  } = hooks();
  return (
    <View style={styles.mainContainer}>
                  <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

      <ProfileHeader />
      <View style={styles.searchContainer}>
      <GlobalSearch setValue={(query) => setSearchQuery(query)} value={searchQuery} /> 
        <TouchableOpacity onPress={navigateToNotification} style={styles.marginLeftContianer}>
          <NotificationSvg
            height={metrics.changeByMobileDPI(27.75)}
            width={metrics.changeByMobileDPI(27.25)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        {filteredData && (
          <FlatList
            data={filteredData} 
            renderItem={renderViewOrderDate}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default ViewOrderScreen;
