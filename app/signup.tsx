import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { useSignUp } from "@clerk/clerk-expo";
import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";


const Page = () => {
  const [countryCode, setCountryCode] = useState("+250");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const router = useRouter();
  const { signUp } = useSignUp();
  

  const onSignup = async () => {
    if (phoneNumber.trim()) {
    }
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    router.push({
      pathname: "/verify/[phone]",
      params: { phone: fullPhoneNumber },
    });

    try {
      await signUp!.create({
        phoneNumber: fullPhoneNumber,
      });
      signUp!.preparePhoneNumberVerification();

      router.push({
        pathname: "/verify/[phone]",
        params: { phone: fullPhoneNumber },
      });
    } catch (error) {
      console.error("error signing up:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={[defaultStyles.header, { fontSize: 35 }]}>
          Let's get started!
        </Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your Phone number.We will send you a confirmation code there
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.CountryCodeFild}
            placeholder="Country Code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />

          <TextInput
            style={[
              phoneNumber !== "" ? styles.inputDisable : styles.inputEnable,
              { flex: 1 },
            ]}
            placeholder="Mobile Number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Link href={"/login"} replace asChild>
          <TouchableOpacity>
            <Text>
              Alreaady have an account?
              <Text style={defaultStyles.textLink}>Login</Text>
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }}/>

        
          
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}

          onPress={()=> router.push('/home')} //i'used router push for navigation
          //disabled={phoneNumber===""}
          
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>
        
        


      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },

  inputEnable: {
    borderColor: Colors.lightGray,
    borderWidth: 2,
    height: 50,
    borderRadius: 20,
    paddingLeft: 20,
    marginLeft: 10,
  },

  inputDisable: {
    borderColor: "black",
    borderWidth: 2,
    height: 50,
    borderRadius: 20,
    paddingLeft: 20,
    marginLeft: 10,
  },

  CountryCodeFild: {
    width: "15%",
    height: 50,
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
  },

  enabled: {
    backgroundColor: Colors.primary,
  },

  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Page;
