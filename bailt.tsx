import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const randomRool = () => Math.floor(Math.random() * 5) + 1

export default function App() {
  const [diceRolls, setDiceRolls] = useState([])

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls([...diceRolls, randomRool()])
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}