import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader';
import ProfItem from '../../components/ProfItem';

import style from './style';

function ProfList(){
    const [filterVisible, setFilterVisible] = useState(false);
    function toggleVisibility(){
        setFilterVisible(!filterVisible);
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
                    placeholder='Qual a matéria?'/>
                    <View style={style.inputGroup}>
                        <View style={style.inputBlock}>
                            <Text style={style.label}>Dia da semana</Text>
                            <TextInput
                            placeholderTextColor='#c1bccc'
                            style={style.input}
                            placeholder='Qual o dia?'/>
                        </View>
                        <View style={style.inputBlock}>
                            <Text style={style.label}>Horário</Text>
                            <TextInput
                            placeholderTextColor='#c1bccc'
                            style={style.input}
                            placeholder='Qual horário?'/>
                        </View>
                    </View>
                    <RectButton style={style.submit}>
                        <Text style={style.submitText}>Filtrar</Text>
                    </RectButton>
                </View>)}
            </PageHeader>
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

export default ProfList;