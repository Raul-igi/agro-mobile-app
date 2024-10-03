import Colors from "@/constants/Colors";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { TouchableOpacity,Text } from "react-native";
//import { GestureHandlerRootView } from "react-native-gesture-handler";
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
import "react-native-reanimated";
import * as SecureStore from "expo-secure-store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer=createDrawerNavigator();




// Cache the Clerk JWT
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  const router = useRouter();
  const {isLoaded,isSignedIn}=useAuth();
  const segments =useSegments() ; // will help us to know where we  currently are on the app.

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(()=>{
    console.log('isSignedIn', isSignedIn);
    
    if(!isLoaded)return;

    const inAuthGroup =segments[0] ==='(authenticated)';

    if (isSignedIn && !inAuthGroup){
       router.replace('/(authenticated)/(tabs)/home');
    }else if (!isSignedIn){
      router.replace('/');
    }

  },[isSignedIn])

  if (!loaded || !isLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="verification" options={{ headerShown: false }} />
      <Stack.Screen name="newLivestock" options={{ headerShown: false }} /> 
      <Stack.Screen name="registeredFarmer/crops" options={{ headerShown: false }} />
      <Stack.Screen name="newFarmer" options={{ headerShown: false }} /> 
      <Stack.Screen name="newCooperative" options={{ headerShown: false }} /> 
      <Stack.Screen name="newCooperativeAgronomies" options={{ headerShown: false }} /> 
      <Stack.Screen name="newCooperativeVeterinaries" options={{ headerShown: false }} /> 




      <Stack.Screen
        name="agronomies/homePage"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: {backgroundColor:Colors.topSide},
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                {/* <Ionicons name="arrow-back" size={24} color={Colors.dark} /> */}
              </Link>
            </TouchableOpacity>
          ),
        }}
      />


      <Stack.Screen
        name="veterinaies/homePage"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: {backgroundColor:Colors.topSide},
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                {/* <Ionicons name="arrow-back" size={24} color={Colors.dark} /> */}
              </Link>
            </TouchableOpacity>
          ),
        }}
      />












      <Stack.Screen
        name="signup"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                <Ionicons name="arrow-back" size={24} color={Colors.primary} />
              </Link>
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity>
              <Link href={"/help"}>
                <Ionicons
                  name="help-circle-outline"
                  size={24}
                  color={Colors.dark}
                />
              </Link>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                {/* <Ionicons name="arrow-back" size={24} color={Colors.primary} /> */}
              </Link>
            </TouchableOpacity>
          ),

          // headerRight: () => (
          //   <TouchableOpacity>
          //     <Link href={"/help"}>
          //       <Ionicons
          //         name="help-circle-outline"
          //         size={24}
          //         color={Colors.dark}
          //       />
          //     </Link>
          //   </TouchableOpacity>
          // ),
        }}
      />

      <Stack.Screen
        name="help"
        options={{
          title: "Help",
          presentation: "modal",
          headerBackTitle: "",
          headerStyle: { backgroundColor: "#F2F2F2" },
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                <Ionicons name="arrow-back" size={24} color={Colors.primary} />
              </Link>
            </TouchableOpacity>
          ),
        }}
      />







<Stack.Screen
        name="homePage"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: {backgroundColor:Colors.topSide},
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                <Ionicons name="arrow-back" size={24} color={Colors.dark} />
              </Link>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                <Ionicons name="ellipsis-vertical-sharp" size={24} color={Colors.dark} />
              </Link>
            </TouchableOpacity>
          ),
        }}
      />









<Stack.Screen
        name="registeredFarmer"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: {backgroundColor:Colors.topSide},
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                {/* <Ionicons name="arrow-back" size={24} color={Colors.dark} /> */}
              </Link>
            </TouchableOpacity>
          ),
        }}
      />

<Stack.Screen
        name="farmerRegistrationFlow/newFarmer"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: {backgroundColor:Colors.topSide},
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                {/* <Ionicons name="arrow-back" size={24} color={Colors.dark} /> */}
              </Link>
            </TouchableOpacity>
          ),
        }}
      />




<Stack.Screen
        name="slaughter"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: {backgroundColor:Colors.topSide},
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                {/* <Ionicons name="arrow-back" size={24} color={Colors.dark} /> */}
              </Link>
            </TouchableOpacity>
          ),
        }}
      />


<Stack.Screen
        name="ecoYield"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: {backgroundColor:Colors.topSide},
          headerLeft: () => (
            <TouchableOpacity>
              <Link href={"/"}>
                {/* <Ionicons name="arrow-back" size={24} color={Colors.dark} /> */}
              </Link>
            </TouchableOpacity>
          ),
        }}
      />


    </Stack>
    
  );
};





// const profileScreenWidthDrawer =() =>{
//   return(
//   <Drawer.Navigator 
//   initialRouteName="" 
//   drawerContent={() =>{}}>
//     <Drawer.Screen name={slaughter}/>

//   </Drawer.Navigator>);
// }







const RootLayoutNav = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <InitialLayout />
      </GestureHandlerRootView>
    </ClerkProvider>
  );
};

 export default RootLayoutNav;





