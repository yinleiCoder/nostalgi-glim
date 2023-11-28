# Glimpse

**Glimpse**(微瞥) is a free, open-source photo applicaiton that allows you capture unforgettable moments. With its refined interface and powerful features, Glimpse offers users a cozy digital family album, aiming to capture the most beautiful moments in life.

## About

**Glimpse** is a cross-platform photo app that enables secure communication between devices using a REST API and HTTPS encryption.

## Screenshots

## Features

- **家庭成员共享**: 家庭为单位，可以邀请家庭成员加入应用，实现共享家庭相册。每个成员可以上传和浏览照片并通过评论和点赞进行互动。
- **备份与云同步**：自动备份照片到云端，确保数据安全，并支持多设备同步，方便用户在不同设备上查看和管理照片。(当然，服务器可由用户自己托管放置在家庭的NAS服务器上，以保证隐私数据安全)
- **时间轴回顾**：时间年轮的顺序回顾家庭照片，轻松追溯和分享家庭的美好瞬间。
- **智能分类和标签**：自动识别照片中的人物、地点、时间，并自动生成相应的标签，以便家庭成员更容易浏览和查找照片。
- **隐私设置**：自定义照片的分享权限，保护家庭照片的隐私安全的同时，隔绝家庭中的个人私密隐私。
- **美化工具**：照片的编辑工具，如滤镜、修图等，让用户能够在应用内直接美化照片，提供写真级人像的美化体验。
- **活动日历**：家庭活动与相册结合，用户可以在日历中查看家庭成员的生日、重要事件，并直接浏览与该活动相关的照片。
- **人脸识别搜索**：人脸识别来标注、过滤、搜索照片，快速定位成员的照片。
- **打印服务**：在线打印服务，批量选择并打印精选的照片，制作实体相册或其他个性化的家庭纪念品。
- **批量管理并同步iCloud**：我们发现，apple的icloud一个很头疼的点是不能批量或一次性下载自己的照片，这个问题会得到解决并及时同步iCloud，减少用户的操作负担。
- **家庭故事地图**：地图上标记家庭活动的地点，创建一个家庭故事地图，呈现家庭在不同地方的美好回忆。
- **附近AirDrop分享**：及时分享拍摄的照片和视频到附近的手机设备。(抛弃微信文件传输助手吧)
- **声音记录**：美好的回忆不止停留在视频和照片，为照片添加语音评论，记录当时的心情和回忆。
- **那年今日**：应用会定期向用户推送那年今日的美好瞬间，激发回忆和情感。

> Take note: 如果你还有好的想法，请提交issue或微信与我沟通，感谢你的建议。

## Download

It is recommended to download the app either from an app store or from a package manager.But the app has an auto-update.

| Web | Windows | macOS | Linux | Android | iOS |
| --- | --- | --- | --- | --- | --- |
| Chrome | MSIX Installer | App Store | TAR | Google Play Store | App Store | 
| Firefox | EXE Installer | DMG Installer | AppImage | APK | | 
| Microsoft Edge | Portable ZIP | Homebrew |  | | | 

## How it Works

**Glimpse** uses a secure communication protocol that allows devices to communicate with each other using a REST API. All data is sent securely over HTTPS.

For more information on the **Glimpse**, see the documentation.

## Getting Started

To compile **Glimpse** from source code, follow these steps:

1. install Flutter、Vue、Go.
2. Clone the **Glimpse** repository.
3. Run `cd src` to enter the vue directory.
4. Run `npm install` to  download dependencies.
5. Run `npm run dev` to start the application.

It's possible that the issue is caused by a mismatch between the required Node version and the installed Node version.

**Glimpse** uses `nvm` to manage the project Node version.

## Contributing

I welcome contributions from anyone interested in helping imporve **Glimpse**. If you'd like to contribute, there are a few ways to get involved:

### Translation

You can help translate this app to other languages!

1. Fork this repository
2. Choose one
   - Add missing translations in existing languages: Only update `_missing_translations_<locale>.json` in `src/assets/i18n`
   - Fix existing translations: Update `strings_<locale>.i18n.json` in `src/assets/i18n`
   - Add new languages: Create a new file
3. Optional: Re-run this app
   - Make sure you have run this app once
   - Update translations via npm or flutter
   - Run the application via npm or flutter 
4. Open a pull request

> Take note: Fields decorated with @ are not meant to be translated; they are not used in the app in any way, being merely informative text about the file or to give context to the translator.

### Bug fixes and improvements

- Bug Fixes: If you find a bug, please create a pull request with a clear description of the issue and how to fix it.
- Improvements: Have an idea for how to improve **Glimpse**? Please create an issue first to discuss why the improvement is needed.

> Thanks!

## Building

These commands are intended for maintainers only.

### Web

```
npm run dev
```

### Server

```
go run main.go
```

### Android

#### Traditional APK

```
flutter build apk
```

#### AppBundle for Google Play

```
flutter build appbundle
```

### iOS

```
flutter build ipa
```

### macOS

```
flutter build macos
```

### Windows

#### Traditional

```
flutter build windows
```

#### Local MSIX App 

```
flutter pub run msix:create
```

### Linux

#### Traditional

```cmd
flutter build linux
```

#### AppImage

```cmd
appimage-builder --recipe AppImageBuilder.yml
```
