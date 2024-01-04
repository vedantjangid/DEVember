import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'


const day2 = () => {
    return (
        <View>
            <Stack.Screen options={{ title: 'Day2: MarkDownEditor' }} />
            <Text>Day details screen
            </Text>
            <Link href="/day3/editor" asChild >
                <Button title='go to Editor' />
            </Link>
        </View>
    )
}

export default day2

const styles = StyleSheet.create({})