import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader';
import ProfItem, { Prof } from '../../components/ProfItem';
import AsyncStorage from '@react-native-community/async-storage';

import style from './style';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

function ProfList(){
    const [favorites,setFavorites] = useState<number[]>([]);
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if (response) {
                const favoritedProfs = JSON.parse(response);
                const favoritedIDs = favoritedProfs.map((prof: Prof) =>{
                    return prof.id;
                })
                setFavorites(favoritedIDs)
            }
        })
    }
    const [teachers, setTeachers] = useState([]);
    const [filterVisible, setFilterVisible] = useState(false);
    function toggleVisibility(){
        setFilterVisible(!filterVisible);
    };

    const [subject,setSubject] = useState('');
    const [week_day,setWeek_day] = useState('');
    const [time,setTime] = useState('');

    useFocusEffect(() => {
        loadFavorites();
    })

    async function filtersSubmit(){
        loadFavorites();
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        });

        setTeachers(
            response.data
        )
    }

    return (
        <View style={style.container}>
            <PageHeader tittle='Proffys disponíveis' right={(
                <BorderlessButton onPress={toggleVisibility}>
                    <Feather name="filter" size={20} color='#fff'/>
                </BorderlessButton>
            )}>
                {filterVisible && (<View style={style.searchForm}>
                    <Text style={style.label}>Matéria</Text>
                    <TextInput
                    placeholderTextColor='#c1bccc'
                    style={style.input}
                    placeholder='Qual a matéria?'
                    value={subject}
                    onChangeText={text=>setSubject(text)}/>
                    <View style={style.inputGroup}>
                        <View style={style.inputBlock}>
                            <Text style={style.label}>Dia da semana</Text>
                            <TextInput
                            placeholderTextColor='#c1bccc'
                            style={style.input}
                            placeholder='Qual o dia?'
                            value={week_day}
                            onChangeText={text=>setWeek_day(text)}/>
                        </View>
                        <View style={style.inputBlock}>
                            <Text style={style.label}>Horário</Text>
                            <TextInput
                            placeholderTextColor='#c1bccc'
                            style={style.input}
                            placeholder='Qual horário?'
                            value={time}
                            onChangeText={text=>setTime(text)}/>
                        </View>
                    </View>
                    <RectButton style={style.submit} onPress={filtersSubmit}>
                        <Text style={style.submitText}>Filtrar</Text>
                    </RectButton>
                </View>)}
            </PageHeader>
            <ScrollView style={style.profList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 24
            }}>
                {teachers.map((teacher: Prof) =>{ 
                return (<ProfItem key={teacher.id} prof={teacher}
                    favorited={favorites.includes(teacher.id)}/>)})}
            </ScrollView>
        </View>
    )
};

export default ProfList;