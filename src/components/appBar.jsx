import React from "react";
import { View, ViewPropTypes, StyleSheet, ScrollView} from "react-native";
import StyledText from "./stiledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";



const AppBarTap = ({children, to}) => {
    const {pathname} = useLocation();
    const active = pathname === to;

    const textStyle = [
        styles.text,
        active && styles.active
    ]
    
   return(
    <Link to={to}>
        <StyledText fontWeight='bold' style={textStyle}>
            {children}
        </StyledText>
    </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
                <AppBarTap to='/'>Home</AppBarTap>
                <AppBarTap to='/traffic-ticket'>Multa</AppBarTap>
                <AppBarTap to='/contact'>Contacto</AppBarTap>
                <AppBarTap to='/about'>About</AppBarTap>
                <AppBarTap to='/signin'>Sign in</AppBarTap>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: theme.appBar.primary,
        paddingLeft: 10,
    },
    scroll:{
        paddingBottom: 15
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.appBar.textActive
    }
})

export default AppBar;