import { Image, Text, TextInput, TextInputBase, TouchableOpacity, View } from "react-native";
import { styles } from '@/styles'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Ionicons name='arrow-back' size={25} />
          <Image source={require('@/assets/images/logo.png')} />
        </View>
        <Text style={styles.largeText}>Sign in to you</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        <View style={styles.formGroup}>
          {/*EMAIL ADDRESS*/}
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType='email-address'
              style={styles.inputField} />
          </View>
          {/*PASSWORD*/}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name='eye-slash' size={24}
                color="#7E7B7B" />
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>
            OR
          </Text>
          <View style={styles.divider}></View>
        </View>

        {/*SOCIAL MEDIA LOGIN*/}
        <View style={styles.socialMediaButtonGroup}>
          {/*GOOGLE*/}
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText} >
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          {/*FACEBOOK*/}
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />

              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don't have an account?</Text>
          <Text style={styles.subTextJoin}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider >
  );
}
