import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'framework_test_library_sixdee' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const FrameworkTestLibrarySixdee = NativeModules.FrameworkTestLibrarySixdee
  ? NativeModules.FrameworkTestLibrarySixdee
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );
    
    function loadGame(msisdn: String, baseUrl: String, subscriptionId: String, language: String, token: String): Promise<string> {
      return FrameworkTestLibrarySixdee.loadGame(msisdn, baseUrl, subscriptionId, language, token);
    }
    
    export { loadGame };