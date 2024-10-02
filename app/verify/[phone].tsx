import { defaultStyles } from '@/constants/Styles';
//import { isClerkAPIResponseError, useSignIn, useSignUp } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Colors from '@/constants/Colors';

const CELL_COUNT = 4;

const Page = () => {
  const { phone, signin } = useLocalSearchParams<{ phone: string; signin: string }>();
  const [code, setCode] = useState('');
  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();

  const router = useRouter();

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  useEffect(() => {
    if (code.length === 6) {
      if (signin === 'true') {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);

  const verifyCode = async () => {
    try {
      await signUp!.attemptPhoneNumberVerification({
        code,
      });
      await setActive!({ session: signUp!.createdSessionId });
    } catch (err) {
      console.log('error', JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert('Error', err.errors[0].message);
      } else {
        Alert.alert('Unknown error', 'Something went wrong. Please try again.');
      }
    }
  };

  const verifySignIn = async () => {
    try {
      await signIn!.attemptFirstFactor({
        strategy: 'phone_code',
        code,
      });
      await setActive!({ session: signIn!.createdSessionId });
    } catch (err) {
      console.log('error', JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert('Error', err.errors[0].message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[defaultStyles.header,styles.headerText]}>Verification</Text>
      <Text style={[defaultStyles.descriptionText,styles.descriptionText]}>
      Verify with the code sent on your mobile number
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <Fragment key={index}>
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[
                styles.cellRoot,
                isFocused && styles.focusCell,
                symbol ? styles.filledCell : undefined,
              ]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          </Fragment>
        )}
      />

      <TouchableOpacity
        style={[defaultStyles.pillButton, styles.enabled, { marginBottom: 20, width: '100%' }]}
        onPress={() => router.push({ pathname: `/homePage` })}
      >
        <Text style={defaultStyles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      <Link href="/login" replace asChild>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '400' }}>
            Haven’t received the code yet?
            <Text
              style={[defaultStyles.textLink, { color: Colors.green, fontSize: 16, fontWeight: '400' }]}
            >
              Resend!
            </Text>
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    paddingHorizontal: 20, 
   
  },
  codeFieldRoot: {
    marginVertical: 20,
    width: '100%', // Added width to take full available space
    flexDirection: 'row', // Ensures cells are in a row
    gap: 12,
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E3E3E3',
    borderWidth: 1,
    borderRadius: 8,
  },
  cellText: {
    color: '#000',
    fontSize: 26,
    textAlign: 'center',
  },
  focusCell: {
    paddingBottom: 8,
  },
  filledCell: {
    borderColor: Colors.green,
    borderWidth: 2,
  },
  enabled: {
    backgroundColor: Colors.green,
    borderRadius: 8,
  },

  headerText: {
    fontSize: 32,
    fontWeight:600,
    lineHeight:38,
    color:Colors.header,
    alignSelf: "flex-start",
    
  },

  descriptionText:{
    fontWeight:400,
    fontSize:18,
    lineHeight:26,
    color:"#64748B",
  }
});

export default Page;
