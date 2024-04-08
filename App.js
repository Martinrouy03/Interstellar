import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const imdbLogo = {
  uri: "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png",
};

export default function App() {
  const matthew = require("./assets/matthew.jpg");
  const anne = require("./assets/anne.jpg");
  const jessica = require("./assets/jessica.jpg");
  const mackenzie = require("./assets/mackenzie.jpg");
  return (
    <View style={{ gap: 10, backgroundColor: "black" }}>
      <View
        style={{
          padding: 10,
          backgroundColor: "#393939",
          height: 50,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          source={imdbLogo}
          style={{ width: 60, height: 30 }}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={{ padding: 10, backgroundColor: "#212121", gap: 10 }}>
        <Text style={{ color: "white", fontSize: 30 }}>Interstellar</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ color: "gray" }}>2014</Text>
          <Text style={{ color: "gray" }}>PG-13</Text>
          <Text style={{ color: "gray" }}>2h49min</Text>
          <Text style={{ color: "gray" }}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./assets/film.jpg")}
            style={{ width: 110, height: 150 }}
            resizeMode="contain"
          ></Image>
          <View style={{ paddingHorizontal: 10, flex: 1, gap: 10 }}>
            <Text style={{ color: "white" }}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#0277BD",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  paddingVertical: 5,
                }}
              >
                + ADD TO WATCH LIST
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <FontAwesome name="star" size={24} color="yellow" />
            <Text style={{ color: "white", fontWeight: "bold" }}>8.6/10</Text>
            <Text style={{ color: "gray", fontSize: 10 }}>1.1M</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <FontAwesome name="star-o" size={24} color="white" />
            <Text style={{ color: "white" }}>RATE THIS</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                backgroundColor: "darkgreen",
                color: "white",
                padding: 2,
              }}
            >
              74
            </Text>
            <Text style={{ color: "white" }}>Metascore</Text>
            <Text style={{ color: "gray", fontSize: 10 }}>
              46 critic reviews
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          padding: 10,
          backgroundColor: "#212121",
        }}
        // contentContainerStyle={{ alignItems: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Top Billed Cast</Text>
          <Text style={{ color: "#0277BD", fontWeight: "bold" }}>SEE ALL</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.actordiv}>
            <Image
              source={matthew}
              style={styles.img}
              resizeMode="contain"
            ></Image>
            <View style={styles.actor}>
              <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                Matthew McConaughey
              </Text>
              <Text style={styles.nickname}>Cooper</Text>
            </View>
          </View>
          <View style={styles.actordiv}>
            <Image
              source={matthew}
              style={styles.img}
              resizeMode="contain"
            ></Image>
            <View style={styles.actor}>
              <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                Matthew McConaughey
              </Text>
              <Text style={styles.nickname}>Cooper</Text>
            </View>
          </View>
          <View style={styles.actordiv}>
            <Image
              source={matthew}
              style={styles.img}
              resizeMode="contain"
            ></Image>
            <View style={styles.actor}>
              <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                Matthew McConaughey
              </Text>
              <Text style={styles.nickname}>Cooper</Text>
            </View>
          </View>
          <View style={styles.actordiv}>
            <Image
              source={matthew}
              style={styles.img}
              resizeMode="contain"
            ></Image>
            <View style={styles.actor}>
              <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                Matthew McConaughey
              </Text>
              <Text style={styles.nickname}>Cooper</Text>
            </View>
          </View>
        </ScrollView>
        <View>
          <View>
            <Text>Director</Text>
            <Text>Christopher Nolan</Text>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  img: { width: 150, height: 220 },
  actordiv: { marginRight: 5 },
  actor: {
    width: 150,
    height: "auto",
    padding: 10,
    backgroundColor: "#2A2A2A",
  },
  text: {
    color: "white",
    overflow: "hidden",
  },
  nickname: {
    color: "gray",
  },
});
