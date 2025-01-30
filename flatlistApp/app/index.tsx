/** @format */

import { Text, View, StyleSheet, FlatList } from "react-native";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { dataType, DATA } from "../data/appData";

export default function Index() {
    // create func to call on item click. pass the item in as param
    const handleRowPress = (item: dataType) => {
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
                        ItemSeparatorComponent={() => (
                            <ListItemSeparator color="#54789380" />
                        )}
                        renderItem={({ item }) => (
                            <ListItem
                                item={item}
                                isSelected={item.id === selectedId}
                                handleRowPress={(item) => handleRowPress(item)}
                            />
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
});
