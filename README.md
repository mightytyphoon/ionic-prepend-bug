# Ionic InsertBefore Bug Demo

*this bug demo report repo uses capacitor + ios for now , I will add android later if wanted but it's targeted at iOS users first*

## Description
*this repo shows a bug which happens when using element.insertBefore to prepend an element. In a browser prepending an element will only keep the container scrolled top if the container is already on top, else the container will keep its position. But in ionic the container is always scrolled to top when prepending elements*

## Quick start

* run npm i (takes some time)

1. this will install all needed dependencies
2. this will build the app as a post install
3. this will init ionic capacitor for iOS
4. this will launch Xcode

5. then you will need to 
   1. set up signing & capabilities
   2. apply the quick fixes on warning when building the app


### iOS in emulator
1. run npm dev:ios
2. set up the project in Xcode
   1. set up bundle name "ionic.io.scroll" for example
   2. set up Signing & Capabilities
3. launch app on emulator (not on device)

### iOS on device
1. run npm deploy:ios
2. set up the project in Xcode
   1. set up bundle name "ionic.io.scroll" for example
   2. set up Signing & Capabilities
3. launch app on connected device

### Android
to come

