import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import ProfItem from '../../components/ProfItem';

import style from './style';

function Favorites(){
    return (
        <View style={style.container}>
            <PageHeader tittle='Proffys disponíveis'/>
            <ScrollView style={style.profList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 24
            }}>
                <ProfItem/>
                <ProfItem/>
                <ProfItem/>
                <ProfItem/>
                <ProfItem/>
            </ScrollView>
        </View>
    )
};

export default Favorites;