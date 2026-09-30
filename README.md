# StatusBar does nothing on iOS 27

Minimal React Native 0.87.1 app reproducing it. `App.tsx` calls
`StatusBar.setBarStyle('light-content')` on a light screen.

- iOS 18.5 simulator: the status bar icons turn white.
- iOS 27 simulator: they stay black, and UIKit logs
  `-[UIApplication setStatusBarStyle:animated:] API has been deprecated and is a no-op on 27.0 and later.`

## Run

```sh
npm install
cd ios && bundle exec pod install && cd ..
npm run ios
```

Build with Xcode 27 and pick an iOS 27 simulator to see the bug, an iOS 18 one to compare.

## One change from the template

`AppDelegate.swift` starts React Native from a `SceneDelegate`, and `Info.plist` declares it. An app
built with the iOS 27 SDK that does not adopt the UIScene life cycle exits at launch, so without
this the app would not open on iOS 27 at all. It is not related to the StatusBar bug.
`UIViewControllerBasedStatusBarAppearance` is left `false`, as the template has it and as
`RCTStatusBarManager` requires.
