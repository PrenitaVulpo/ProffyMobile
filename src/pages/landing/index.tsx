import React, { useEffect, useState } from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import landingImg from "../../assets/images/landing.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import studyIcon from "../../assets/images/icons/study.png"
import heartIcon from "../../assets/images/icons/heart.png"
import api from '../../services/api';


function landing (){ 
    const {navigate} = useNavigation();

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=>{
        api.get('connections').then(response => {
        console.log(response)
        const total = response.data.total;
        setTotalConnections(total);
        })
    },[]);

    function navigateToGiveClasses(){
        navigate('GiveClasses');
    }

    function navigateToStudy(){
        navigate('Study');
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
                onPress={navigateToStudy}
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
                já são {totalConnections} conexões realizadas {' '} 
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
};

export default landing;
