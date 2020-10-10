import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import landingImg from "../../assets/images/landing.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import studyIcon from "../../assets/images/icons/study.png"
import heartIcon from "../../assets/images/icons/heart.png"


function landing (){ 
    const {navigate} = useNavigation();

    function navigateToGiveClasses(){
        navigate('GiveClasses');
    }

    return (
        <View style={style.container}>
            <Image source={landingImg} style={style.banner}/>
            <Text style={style.title}>
                Seja bem-vindo(a), {'\n'}
                <Text style={style.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={style.buttonsContainer}>
                <RectButton 
                
                style={[style.buttons, style.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={style.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton 
                onPress={navigateToGiveClasses}
                style={[style.buttons, style.buttonSecondary]}>
                    <Image source={giveClassesIcon}/>
                    <Text style={style.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={style.totalConnections}>
                já são 15 conexões realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
};

export default landing;
