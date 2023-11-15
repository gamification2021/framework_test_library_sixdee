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
    
export function loadGame(): Promise<string> {
  return FrameworkTestLibrarySixdee.loadGame();
}
