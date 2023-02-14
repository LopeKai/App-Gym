import { useState } from 'react';
import { Heading, VStack, SectionList, Text} from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'

export function History() {
    const [exercies, setExercises] = useState([
        {
            title: '29.08.22',
            data: ['Puxada Frontal', 'Remada unilateral'],
        },

        {
            title: '27.08.22',
            data: ['Puxada Frontal'],
        },
    ])

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercicíos" />

            <SectionList
                sections={exercies}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercies.length === 0 && {
                    flex: 1,
                    justifyContent: 'center'
                }}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Não há exercícios registrado ainda.
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>
    )
}