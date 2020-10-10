# Ionic InsertBefore Bug Demo

*this bug demo report repo uses capacitor + ios for now , I will add android later if wanted but it's targeted at iOS users first*

## Description
*this repo shows a bug which happens when using element.insertBefore to prepend an element. In a browser prepending an element will only keep the container scrolled top if the container is already on top, else the container will keep its position. But in ionic the container is always scrolled to top when prepending elements*

## Quick start

* run npm i (takes some time)
1. this will install all needed dependencies
2. this will build the app as a post install
3. this will init ionic capacitor for iOS
4. this will launch Xcode with livereload enabled

5. then you will need to select your simulator in Xcode (iphone 8 for example) & press run

you will be able to see it in browser here : http://localhost:8100

**it will not work on a real device, for real device use npm run deploy:ios**


### iOS live in emulator & browser
1. run npm dev:ios
2. set up the project in Xcode
   1. set up bundle name "ionic.io.scroll" for example
   2. set up Signing & Capabilities
3. launch app on emulator (not on device)
4. App will be also at http://localhost:8100

### iOS on device
1. run npm deploy:ios
2. set up the project in Xcode
   1. set up bundle name "ionic.io.scroll" for example
   2. set up Signing & Capabilities
3. launch app on connected device

### Android
Todo

