import React from 'react';
import { Button } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

export default function PlusButton({ onPress, focused }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
                colors={
                    focused ?
                        ['#F92B7F', '#F58524']
                        :
                        ['#d6d9d9', '#e9e9e9']
                }
                start={[0.2, 0.3]}
            >
                <AntDesign
                    name="plus"
                    size={35}
                    color="#f7f7f8"
                />
            </Button>
        </TouchableWithoutFeedback>
    );
}