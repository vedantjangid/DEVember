import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import onBoarding from './onBoarding'

const day2 = () => {
    return (
        <View>
            <Stack.Screen options={{ title: 'Dat2: Onboarding' }} />
            <Text>day2
            </Text>
            <Link href="/day2/onBoarding" asChild >
                <Button title='go to onboarding screen' />
            </Link>
        </View>
    )
}

export default day2

const styles = StyleSheet.create({})