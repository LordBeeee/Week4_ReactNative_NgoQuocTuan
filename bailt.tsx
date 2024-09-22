import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const randomRool = () => Math.floor(Math.random() * 6) + 1

export default function App() {
  const [xucsacs, setxucsax] = useState([])

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setxucsax([...xucsacs, randomRool()])
        }}
      />
      {xucsacs.map((xucsac, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {xucsac}
        </Text>
      ))}
    </View>
  )
}