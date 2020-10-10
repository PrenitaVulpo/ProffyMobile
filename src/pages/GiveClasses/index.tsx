import React from 'react';
import {View, ImageBackground, Text} from 'react-native';

import style from "./style";
import bgImg from "../../assets/images/give-classes-background.png";
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){
    const {goBack} = useNavigation();

    function navigateBack(){
        goBack();
    }
    return (
    <View style={style.container}>
        <ImageBackground resizeMode='contain' source={bgImg} style={style.content}>
            <Text style={style.tittle}>Quer ser um proffy?</Text>
            <Text style={style.description}>
                Para começar, você precisa se cadastrar na nossa plataforma web. 
            </Text>
        </ImageBackground>
        <RectButton 
        onPress={navigateBack}
        style={style.okButton}>
            <Text style={style.okText}>Tudo bem</Text>
        </RectButton>
    </View>
    );
}

export default GiveClasses; 