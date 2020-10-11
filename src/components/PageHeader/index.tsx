import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { Image, View, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import style from './style';

interface Props{
    tittle: string;
    right?: ReactNode;
}

const PageHeader: React.FC<Props> = ({tittle, children, right}) => {
    const {navigate} = useNavigation();
    function navigateBack(){
        navigate('Landing');
    }

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <BorderlessButton onPress={navigateBack}>
                    <Image source={backIcon} resizeMode='contain'/>
                </BorderlessButton>
                <Image source={logoImg} resizeMode='contain'/>
            </View>
            <View style={style.header}>
                <Text style={style.tittle}>{tittle}</Text> 
                {right}   
            </View>
            {children}
        </View>
    )
};

export default PageHeader;