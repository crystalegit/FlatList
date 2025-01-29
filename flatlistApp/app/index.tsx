/** @format */

import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";

export default function Index() {
    type dataType = {
        id: string; //unique identifier for each list element
        title: string; //display
    };

    const DATA: dataType[] = [
        { id: "1", title: "first" },
        { id: "2", title: "sec" },
        { id: "3", title: "thrird" },
    ];

    // create func to call on item click. pass the item in as param
    const selectedListItem = (item: dataType) => {
        console.log(item.title + " clicked");
        setSelectedId(item.id);
    };

    const [selectedId, setSelectedId] = useState<string>("");

    return (
        <View style={defaultStyles.container}>
            <View style={defaultStyles.titleContainer}>
                <Text style={defaultStyles.title}>
                    Insert AMAZING Title Here :3!
                </Text>
            </View>
            <View style={[defaultStyles.textContainer, { flex: 1 }]}>
                <View style={styles.flatlist}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item: dataType) => item.id}
                        extraData={selectedId}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => selectedListItem(item)}
                            >
                                <View
                                    style={[
                                        styles.titleContainer,
                                        {
                                            backgroundColor:
                                                item.id === selectedId
                                                    ? colors.primary
                                                    : colors.secondary,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.titleText,
                                            {
                                                color:
                                                    item.id === selectedId
                                                        ? colors.text.light
                                                        : colors.text.dark,
                                            },
                                        ]}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        alignItems: "center",
    },
    titleContainer: {
        marginTop: 5,
        width: 300,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    titleText: {
        fontSize: 24,
        padding: 10,
    },
});
