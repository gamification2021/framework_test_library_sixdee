package com.frameworktestlibrarysixdee

import android.content.Intent
import com.app.spin_and_win.SpinAndWinActivity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class FrameworkTestLibrarySixdeeModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun multiply(a: Double, b: Double, promise: Promise) {
    promise.resolve(a * b)
  }

  @ReactMethod
  fun loadGame(promise: Promise) {
    val i = Intent(currentActivity, SpinAndWinActivity::class.java)
    i.flags = Intent.FLAG_ACTIVITY_NEW_TASK
    currentActivity!!.startActivity(i)
    promise.resolve("game loaded...")
  }

  companion object {
    const val NAME = "FrameworkTestLibrarySixdee"
  }
}
