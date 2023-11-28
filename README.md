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

### 单体应用架构演变

早期的单体应用在本地电脑上进行代码开发，那时候的通用开发架构大致如下：

先用Koa开发后端系统，本地电脑上的浏览器访问开发好的后端服务。等到所有软件开发流程走完后就需要部署上线。现在一般是部署到阿里云服务器上。此时要把代码运行在阿里云服务器上就需要上传代码到代码仓库,在服务器上监测代码仓库的提交变动拉代码下来，然后配合PM2、Nginx部署，同时该服务器上还要跑mysql服务。当流量稍微高一点后，一台服务器上又跑后端服务又跑mysql服务，性能会受到影响，所以一般单独出一台服务器专门跑mysql服务以便后端服务发起CRUD请求。

这就是一个典型的单体应用，这类架构设计对小系统来说基本没啥问题且需要的开发者人数较少。

但技术不能脱离业务，随着业务的复杂，技术上也随即暴露出问题，尤其是面对大流量、大并发。对于单体应用有很多痛点，如：git代码管理引起的回归测试、后端多编程语言屎山代码等。

就拿本仓库的项目来说，我不仅仅要开发Vue的web网站，还需要开发CMS后台管理，这两者都需要登录、注册、照片资源的管理等功能，由同一个mysql提供数据库服务，并跑通CRUD操作，此时PM提出需求又要加入小程序，这三者之间的功能有共同的地方也有各自特有的地方。相信你已经看到了，这类设计有几个痛点：功能需求增多、并发流量增加、代码复用、系统间相互调用、接口对外对内提供服务、离线数据分析业务系统同时影响数据库性能和业务、数据库被多个服务依赖无法拆分升级、某个服务写的不好导致全系统性能拉低、开发测试部署拉跨等。

解决如上问题：前后端分离，将业务抽象成一个个服务，设计成计算机总线式。即以代码模块化、服务方式管理，这样就解决了代码复用的问题，但此时的架构设计还是依赖了同一个mysql服务，数据库成为性能瓶颈，同时因为改动表结构代码可能产生非预期后果而不得不做回归测试。此时就需要继续拆。

为了进一步解决上述问题，需要为每个服务配备单独的mysql服务或redis服务等。此时各个服务间的通信就可以通过MQ的帮助(RabbitMQ等)来解耦消息。但这样拆分也产生一个问题，比如本仓库的订单服务需要查询商品，但是商品在商品服务且商品服务的数据库表也和商品服务一起独立了，此时的订单服务查询商品还能直接连商品服务的mysql吗？理论上可以，但是实际上不行，破坏了服务间的独立性。所以仍然要走商品服务开放的端口进行查询商品，商品服务不得不写查询商品的接口但隔离性很好。各个服务通过网络相互通信，且不需要部署在同一台机器上。

以上服务还是暴露出一系列问题：当外部网站请求上面设计的后端系统中的订单服务，订单服务对外暴露出89端口，但网站发起的一般是http请求，就意味着订单服务要支持HTTP协议，串联出各个独立出来的服务都要支持HTTP协议，但后端系统内部的各个服务间相互通信因为HTTP协议而性能低。这时需要考虑对内走内部请求不走HTTP转而走RPC就像本地函数一样调用，对外才走HTTP。这就是分层的微服务架构设计：RPC层的每个服务都走RPC，RPC层上再设计HTTP层走HTTP对外提供服务。同时HTTP层的服务不要mysql服务，直接调用RPC层的Mysql服务即可。（即我们常分为web服务层+service服务层，service服务层为web服务层提供服务，且service服务层的各个服务间又可以相互调用）。这样的好处是服务使用的编程语言无所谓、组件随便。

### 微服务之痛

分层的微服务架构设计也带来一些问题难以回避：web服务层中的服务调用service服务层的服务必须要知道ip地址和端口号、众多服务是否健康并及时感知。这时就可以请出**注册中心**：没写完一个服务的代码就将该服务注册ip和端口号，注册中心可以定时检查服务是否健康。然后还需要请出**服务发现**：当服务间相互调用时，需要向服务发现进行查询服务并返回ip和端口号，然后再通过ip地址和端口号进行连接通信。此外，还需要请出**配置中心**：各个服务启动需要相关配置信息比如mysql的连接配置信息等，改某个服务的配置就显得异常麻烦，而通过配置中心，服务每次启动只需要去配置中心进行读取配置即可，当每次修改完配置后，配置中心主动通知服务。没完，还需要请出**链路追踪**：服务间的调用链路可能很长，当后端服务出现问题需要性能分析排查时，通过链路追踪进行记录信息。最后一个需要请出的是**服务网关**：web服务层的每个服务暴露出自己的端口，让网站记住这么多http端口肯定不现实，微服务网关就可以整合，根据路由配置决定调用哪个http服务，最常见的路由、服务发现、鉴权、熔断、ip黑白名单、负载均衡等。

> 通过后端架构设计的演进，不难发现计算机的魅力，没有什么事情是解决不了的，不行就拆，这也是计算机网络分层设计的重要思想。

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
