/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a5fc9fccb1fa09b1f52ca52d261e7fe2"
  },
  {
    "url": "about-me/index.html",
    "revision": "9e886110bbeed3b031896b6347596f5d"
  },
  {
    "url": "assets/css/0.styles.08fa36bf.css",
    "revision": "d11c19f89937e6ff1fdea80be1e138ed"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3886c34d.js",
    "revision": "eb1cedbdf59d1b51dcfa5d63cffe26b7"
  },
  {
    "url": "assets/js/11.17963d25.js",
    "revision": "bc01d47255dcbef4cd0b83bedcad2c1d"
  },
  {
    "url": "assets/js/12.aeb2d86b.js",
    "revision": "7f5049a9a1a81708e4bf7a46ad106d3a"
  },
  {
    "url": "assets/js/13.8bcf5818.js",
    "revision": "1667fcafa7d0f6408ca14da9737d23f8"
  },
  {
    "url": "assets/js/14.9b4eed0f.js",
    "revision": "bcdb0d59734361c082e7c2bf1de3b216"
  },
  {
    "url": "assets/js/15.eb2175b6.js",
    "revision": "ee73528c3f50b8c3a2ee407beb4f21dc"
  },
  {
    "url": "assets/js/16.07855c81.js",
    "revision": "9832c372d20f8d69158257281342124b"
  },
  {
    "url": "assets/js/17.82feff9f.js",
    "revision": "c97a07b0fc517e25861ad6656efdd136"
  },
  {
    "url": "assets/js/18.cd0e305c.js",
    "revision": "5ee4a53a287fd281d107b108ecc03edb"
  },
  {
    "url": "assets/js/2.cc318784.js",
    "revision": "ab723a6981d04927fe207b5a60e083a8"
  },
  {
    "url": "assets/js/3.c7960a37.js",
    "revision": "3920006c689fddae3ec7a3050751d79d"
  },
  {
    "url": "assets/js/4.2eb58728.js",
    "revision": "e1e53ad39192725594fcd6c3022e4c3c"
  },
  {
    "url": "assets/js/5.b2139297.js",
    "revision": "95b8ef15a8b96437d9200e3d02bda47b"
  },
  {
    "url": "assets/js/6.f1d6eec4.js",
    "revision": "3fb7121388b097d41c5a4b58873bbad0"
  },
  {
    "url": "assets/js/7.22155590.js",
    "revision": "aecbc1172390d61f5c58443925406da6"
  },
  {
    "url": "assets/js/8.5dc29e39.js",
    "revision": "b34dbf1ec6191d9fa77a136b2de3e3a9"
  },
  {
    "url": "assets/js/9.9144997d.js",
    "revision": "41dae985a4c34a90293e53168e742d7c"
  },
  {
    "url": "assets/js/app.00f45d69.js",
    "revision": "fca6f1afebb8bd99079356680b44da0c"
  },
  {
    "url": "git/branch.html",
    "revision": "1b35e9f7aaa22759d19c944953bbb96d"
  },
  {
    "url": "git/command.html",
    "revision": "1c07e39583bb6a9dcd1b9b2c9a263686"
  },
  {
    "url": "git/install.html",
    "revision": "4d504f5f669d221976a98a7f918e8d3e"
  },
  {
    "url": "git/introduction.html",
    "revision": "931ef75c9cc59fc1b35c66585242e0c9"
  },
  {
    "url": "git/resolveConflict.html",
    "revision": "139d0dd62c7fcff4636b8ac766018dc2"
  },
  {
    "url": "git/teamwork.html",
    "revision": "e3ac65a982222f69420d39c0c79cfc8a"
  },
  {
    "url": "img/logo.png",
    "revision": "fda8745ad4a10bf78989fce2a3efa41e"
  },
  {
    "url": "index.html",
    "revision": "207ba292a9cf0d43e0b30001cceb3f01"
  },
  {
    "url": "js/index.html",
    "revision": "82aae597914b175830ec5c7b22a2cff2"
  },
  {
    "url": "js/js.html",
    "revision": "8b2de305816458420327264f6b5ee6ef"
  },
  {
    "url": "js/js1.html",
    "revision": "3002013f3ff54ecb8a7f1872580135ad"
  },
  {
    "url": "js/themeConfig.js",
    "revision": "55cc042736a2b4f5a1c0fb54f4f342b3"
  },
  {
    "url": "node/index.html",
    "revision": "d56441998317f4805df779f226602637"
  },
  {
    "url": "node/js.html",
    "revision": "14c22251bd3d833c2b9d8d79c38736f3"
  },
  {
    "url": "node/js1.html",
    "revision": "486d64f8e90dcbe3778af5d89c99f3a3"
  },
  {
    "url": "zh/index.html",
    "revision": "02388b4eb773c8e160f9b5ace0d66e75"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
