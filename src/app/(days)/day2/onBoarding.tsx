import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Stack, router } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut, BounceInRight, BounceOutLeft, SlideInRight, SlideOutRight, SlideInLeft, SlideOutLeft } from 'react-native-reanimated';


const onBoarding = () => {

    const [screenIndex, setScreenIndex] = useState(0)

    const onBoardingSteps = [{
        icon: 'command',
        title: 'Track every transaction',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consequuntur sapiente culpa earum et magni sint mollitia omnis incidunt modi, tempore velit dolor accusamus iure aspernatur cumque placeat quasi.'

    },
    {
        icon: 'share',
        title: 'Be care free',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consequuntur sapiente culpa earum et magni sint mollitia omnis incidunt modi, tempore velit dolor accusamus iure aspernatur cumque placeat quasi.'

    },
    {
        icon: 'activity',
        title: 'Just with a tap of a button',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consequuntur sapiente culpa earum et magni sint mollitia omnis incidunt modi, tempore velit dolor accusamus iure aspernatur cumque placeat quasi.'

    }]

    const data = onBoardingSteps[screenIndex]

    const lastScreen = onBoarding.length - 1

    const onContinue = () => {
        const isLastScreen = screenIndex === onBoardingSteps.length - 1
        if (isLastScreen) {
            endOnBoarding()
        }
        else {
            setScreenIndex(screenIndex + 1)
        }
    }

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnBoarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };


    const endOnBoarding = () => {
        setScreenIndex(0)
        router.back()
    }


    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );



    return (

        <SafeAreaView style={styles.page}>

            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style='light' />
            <View style={styles.stepIndicatorContainer} >

                {onBoardingSteps.map((step, index) => (
                    <View key={step.title} style={[styles.stepIndiacator, { backgroundColor: index === screenIndex ? '#CEF202' : '#FDFDFD' }]} />
                ))}
            </View>
            <GestureDetector gesture={swipes}>
                <View style={styles.pageContent} key={screenIndex}>


                    <Animated.View entering={FadeIn} exiting={FadeOut}>

                        <Feather style={styles.image} name={data.icon as any} size={50} color="#CEF202" />
                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text entering={SlideInRight} exiting={SlideOutLeft} style={styles.title}>{data.title}</Animated.Text>
                        <Animated.Text entering={FadeIn.delay(200)} exiting={FadeOut} style={styles.description}>{data.description}
                        </Animated.Text>
                        <View style={styles.buttonsRow}>
                            <Pressable onPress={endOnBoarding}>

                                <Text style={styles.buttonsText}>Skip</Text>
                            </Pressable>

                            <Pressable style={styles.buttons} onPress={onContinue}>
                                <Text style={styles.buttonsText}>Continue</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>

    )
}

export default onBoarding

const styles = StyleSheet.create({
    page: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A'
        ,
    },
    title: {
        fontSize: 48,
        color: '#FDFDFD',
        fontWeight: 'bold',
        marginTop: 50,
        fontFamily: 'InterSemi',
        letterSpacing: 1.2
    },
    description: {
        fontSize: 18,
        // textAlign: 'center',
        // marginHorizontal: 20,
        marginTop: 10,
        color: 'gray',
        lineHeight: 24
    },
    image: {
        marginTop: 50,
        fontSize: 150,
        alignSelf: 'center'
    },
    footer: {
        marginTop: 'auto'
    },
    pageContent: {
        padding: 20,
        flex: 1
    },
    buttonsRow: {
        marginTop: 15,
        // display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20
    },
    buttons: {
        backgroundColor: '#302E38',
        borderRadius: 50,

        alignItems: 'center',
        flex: 1

    },
    buttonsText: {
        fontSize: 16,
        fontFamily: 'InterSemi',
        color: '#FDFDFD',

        padding: 15,
        paddingHorizontal: 25
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 7,
        marginHorizontal: 15

    },
    stepIndiacator: {
        flex: 1,
        height: 3,
        borderRadius: 20
    }

})