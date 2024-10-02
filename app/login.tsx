import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { useRouter,Link } from "expo-router";
import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";


enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [countryCode, setCountryCode] = useState("+250");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  const router = useRouter();
  const { signIn } = useSignIn();

  // const onSignIn = async (type: SignInType) => {
  //   if (type === SignInType.Phone) {
  //     try {
  //       const fullPhoneNumber = `${countryCode}${phoneNumber}`;
  //       const { supportedFirstFactors } = await signIn!.create({
  //         identifier: fullPhoneNumber,
  //       });
  //       const firstPhoneFactor: any = supportedFirstFactors.find(
  //         (factor: any) => factor.strategy === "phone_code"
  //       );

  //       const { phoneNumberId } = firstPhoneFactor;

  //       await signIn!.prepareFirstFactor({
  //         strategy: "phone_code",
  //         phoneNumberId,
  //       });

  //       router.push({
  //         pathname: "/verify/[phone]",
  //         params: { phone: fullPhoneNumber, signin: "true" },
  //       });
  //     } catch (err) {
  //       console.log("error", JSON.stringify(err, null, 2));
  //       if (
  //         isClerkAPIResponseError(err) &&
  //         err.errors[0].code === "form_identifier_not_found"
  //       ) {
  //         Alert.alert("Error", err.errors[0].message);
  //       }
  //     }
  //   }
  // };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={styles.innerContainer}>
        <Text style={[defaultStyles.header, styles.headerText]}>
          Let’s get you started
        </Text>

        <View style={styles.inputField}>
          <Text style={styles.label}>Phone Number</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[
              
              styles.input,styles.inputEnable
            ]}
            placeholder="Enter Phone Number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

      
        
              
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,styles.enabled,
             
            { marginBottom: 20, width:"100%" },
          ]}
           //onPress={() => router.push({pathname:`/verify/[phone]`})}
           onPress={() => router.push({pathname:`/newLivestock`})}

        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>
       
       

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  innerContainer: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "flex-start", // Align everything to the start (left)
  },

  headerText: {
    fontSize: 32,
    fontWeight:600,
    lineHeight:38,
    color:Colors.header,
    alignSelf: "flex-start", // Ensure the header is left-aligned
    marginBottom: 20,
  },

  inputField: {
    marginBottom: 10,
    alignSelf: "flex-start", // Align the input label to the left
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color:"#475569",
    lineHeight:20,
  },

  inputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 40,
  },

  input: {
    flex: 1,
    height: 50,
  },

  inputEnable: {
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 20,
    width: "100%", // Ensure full width for the input
  },

  inputDisable: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 20,
    width: "100%", // Ensure full width for the input
  },

  enabled: {
    backgroundColor: Colors.green,
    borderRadius:8
  },

  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Page;
