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
                        ['#fff', '#ccc']
                        : ['#F92B7F', '#F58524']
                }
                start={[0.8, 1]}
            >
                <AntDesign
                    name="plus"
                    size={35}
                    color="#fff"
                />
            </Button>
        </TouchableWithoutFeedback>
    );
}