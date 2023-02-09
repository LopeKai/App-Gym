import { useState } from 'react'
import { VStack, HStack, FlatList, Heading, Text } from 'native-base'

import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'
import { ExerciseCard } from '@components/ExerciseCard'

export function Home() {
    const [group, setGroup] = useState(['Peito', 'Ombro', 'Perna', 'Costa'])
    const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levatamento terra'])
    const [groupSelected, setGroupSelected] = useState('Peito')
    
    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={group}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{
                    px: 8
                }}
                my={10}
                maxH={10}
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md">
                        Exercícios
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{
                        paddingBottom: 20
                    }}
                />

            </VStack>
        </VStack>
    )
}