# pages
https://miyasaka-monoxer.github.io/pages/

## 記事追加の手順
1. `R000000.html` を作成
   - ODP 画像も設定する
2. `settings.json` に記述を追加
   - ローカル（VSCode）でのテスト用
   - GitHub Pages では，特に設定しなくても `/R000000` で `/R000000.html` が出る（ `.html` が補完される）
   - それを再現するため， `setting.json` で `liveServer.settings.mount` に値を追加する
     + `["/R000000", "./R000000.html"]`
3. `index.html` からリンクを貼る
   - `/R000000` の形にしておく
4. `feed.atom` にアイテムを追加

## 参考にしたもの
貴重な知見を参考にさせていただきました。

シングルページに複数のTwitter･Facebook用のOGP設定をする
https://yamada-original.com/1328/

Github Pages で .htaccess の代わりに javascript のみでURLの rewrite を実現してパーマリンクを有効にする
https://qiita.com/h-kuwayama/items/6d429b3bd7f730e5b13b

【2022年 デザイナー向け】Webデザインの横幅（コンテンツ幅）は何pxにする？
https://moromi.net/artbord-size/

【2021年版】OGPの設定方法と最適なOGP画像サイズまとめ
https://www.sungrove.co.jp/ogp-setting/