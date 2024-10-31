import { ScrollView, View } from "react-native";
import { Header } from "../components/Header";
import Constants from "expo-constants";

/* Components */
import { Banner } from "../banner";
import { Search } from "../components/Search"
import { Section } from "../components/section/index"
import { Trending } from "../components/trending";
import { Restaurants } from "../components/restaurants";


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}>

      <View className="w-full px-4" style={{
        marginTop: statusBarHeight + 10
      }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        name="Comidas em altas"
        label="ver mais"
        size="text-2xl"
        action={() => {
          console.log("Clicou em ver mais")
        }}
      />

      <Trending />

      <Section
        name="Famosos na LuFood"
        label="ver todos"
        size="text-xl"
        action={() => {
          console.log("Clicou em ver todos")
        }}
      />

      <Restaurants />

    </ScrollView>
  );
}
