import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import {useFocusEffect} from '@react-navigation/native'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import ProfItem, { Prof } from '../../components/ProfItem';

import style from './style';

function Favorites(){
    const [favorites,setFavorites] = useState([]);
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if (response) {
                const favoritedProfs = JSON.parse(response);
            
                setFavorites(favoritedProfs)
            }
        })
    }
    useFocusEffect(() => {
        loadFavorites();
    })
    return (
        <View style={style.container}>
            <PageHeader tittle='Proffys disponíveis'/>
            <ScrollView style={style.profList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 24
            }}>
                {favorites.map((prof: Prof)=>{
                    return (
                        <ProfItem key={prof.id} prof={prof} favorited/>
                    );
                })}
            </ScrollView>
        </View>
    )
};

export default Favorites;