<SafeAreaView
  style={[
    styles.app,
    {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column",
    },
  ]}
>
  <HomeScreen />
  <NavigationBar />
</SafeAreaView>;

<View style={{ flex: 3 }}>
  <WebView
    source={{
      uri: "https://goo.gl/maps/gEGQRQJVqPC9z7aL8",
    }}
    style={{
      resizeMode: "cover",
      flex: 1,
      automaticallyAdjustContentInsets: true,
      bounces: false,
    }}
  />
</View>;
