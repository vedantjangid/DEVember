import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Markdown from 'react-native-markdown-display';

export default function EditorScreen() {

    const copy = `# h1 Heading 8-)

    **This is some bold text!**
    
    This is normal text
    `;

    return (
        <View style={styles.page}>
            <Markdown style={markdownStyles}>{copy}</Markdown>
        </View>
    )
}

const markdownStyles = StyleSheet.create({
    heading1: {
        fontFamily: 'Inter',
        marginBottom: 5,
        marginTop: 10,
        color: '#212020',
        lineHeight: 40
    },
    heading2: {
        fontFamily: 'InterSemi',
        marginBottom: 5,
        marginTop: 10,
        color: '#404040',
        lineHeight: 30
    },
    body: {
        fontFamily: 'Inter',
        fontSize: 16,
        lineHeight: 24
    }
})

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,


    }
})