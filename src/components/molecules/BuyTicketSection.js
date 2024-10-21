import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import metrics from '../../theme/metrics'
import MaleSvg from '../../assets/svg/MaleSvg.svg'
import FemaleSvg from '../../assets/svg/FemaleSvg.svg'
import font from '../../theme/font'
import colors from '../../theme/color'
import moment from 'moment'
const BuyTicketSection = ({data}) => {
    const duration = moment.duration(moment().diff(moment(data.bookingStartDate)));
    const formattedDuration = `${duration.days()} DD:${duration.hours()} HH:${duration.minutes()} MM`;
   const closebooking = data[0].registrationStatus == 'closed-booking' ? 'CLOSE' :'OPEN'
    let svg = [<MaleSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />, <FemaleSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />]
    const renderSolts = ({ item, index }) => {
        return (
            <View style={[styles.slotsContainer,index == 0 && styles.marginRightContiner]}>
                {svg[index]}
                <Text style={styles.maleFontStyle}>{index == 0 ? data[0].availableMaleSlots : data[0].availablefemaleSlots } Slots Left</Text>
            </View>
        )
    }
    return (
        <View>
            <View style={[styles.flexDirectionContainer,styles.marginBottomContainer]}>
                <Text style={styles.titleFontStyle}>Buy Your Ticket</Text>
                <Text style={styles.attendingFontStyle}>{data[0].totalAttending} Attending</Text>
            </View>
            <View style={styles.flexDirectionContainer}>
                <Text style={styles.registerationOpenFontStyle}>Registration Status: {closebooking}</Text>
                <Text style={styles.daysFontStyle}>{formattedDuration}</Text>
            </View>
            <View style={styles.flexContainer}>
                <Text style={styles.suggestionFontStyle}>Please note that no <Text style={styles.refundFontStyle}>Refunds</Text> are possible after the <Text style={styles.registerationFontStyle}>Registration Status has been assigned to Closed.</Text></Text>
                <FlatList data={[1,2]}
                    contentContainerStyle={styles.contentContainerStyle}
                    renderItem={renderSolts} />
                    {
                        (data[0].currency).toUpperCase() != (data[0].priceDetails.currency).toUpperCase()  ?
                        <View style={styles.flexRowContainer}>
                        <Text style={styles.aedFontStyle}>{(data[0].currency).toUpperCase()}{'\n'}{data[0].price}</Text>
                        <Text style={styles.aedFontStyle}>{(data[0].priceDetails.currency).toUpperCase()}{'\n'} {data[0].priceDetails.price}</Text>
                        </View>
                        :
                        <Text style={styles.aedFontStyle}>{(data[0].currency).toUpperCase()}{'\n'}{data[0].price}</Text>
                    }
                 
                    {(data[0].currency).toUpperCase() != (data[0].priceDetails.currency).toUpperCase() &&

                        <View style={styles.convertingContainer}>
                    <Text style={styles.convertFontStyle}>{(data[0].currency).toUpperCase()} {data[0].price} = {(data[0].priceDetails.currency).toUpperCase()} {data[0].priceDetails.price}</Text>
                    </View>
                    }
            </View>
        </View>
    )
}

export default BuyTicketSection

const styles = StyleSheet.create({
    titleFontStyle:{
        fontSize:font.size.font16,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
    },
    flexRowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    attendingFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandBold,
        color:colors.graySolid,
    },
    registerationOpenFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandRegular,
        color:colors.graySolid,
    },
    daysFontStyle:{
        fontSize:font.size.font10,
        fontFamily:font.type.quicksandBold,
        color:colors.graySolid,
    },
    suggestionFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
    },
    refundFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandBold,
        color:colors.linkBlue,
    },
    registerationFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandBold,
        color:colors.graySolid,
    },
    aedFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.quicksandSemiBold,
        color:colors.black,
        alignSelf:'center',
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(10),
        marginHorizontal:metrics.changeByMobileDPI(15)
    },
    slotsContainer:{
        height:metrics.changeByMobileDPI(75),
        width:metrics.changeByMobileDPI(75),
        borderRadius:metrics.changeByMobileDPI(5),
        borderWidth:1,
        borderColor:colors.tomatoRed,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.tomatoRed + 10
    },
    maleFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
    },
    contentContainerStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:metrics.changeByMobileDPI(20)
    },
    marginRightContiner:{
        marginRight:metrics.changeByMobileDPI(15)
    },
    flexDirectionContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:metrics.changeByMobileDPI(5)
    },
    marginBottomContainer:{
        marginBottom:metrics.changeByMobileDPI(10)
    },
    convertFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandSemiBold,
        color:colors.tomatoRed,
    },
    convertingContainer:{
        height:metrics.changeByMobileDPI(38),
        backgroundColor:colors.lightGray,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        marginBottom:metrics.changeByMobileDPI(20),
        marginTop:metrics.changeByMobileDPI(20),
        elevation:5
    }
})