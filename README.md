# youtube-wiundowtab-fullsize

グーグル拡張機能を使用したアプリになります
YouTubeのページを表示した状態で拡張機能のボタンを押すと
ウインドウサイズ目一杯までYoutubeの画面サイズを広げて利用できます
youtube動画で学習する際に画面が思うようにいかなかったのでctiさんの協力のもと作成しました


# Features
 
1つのモニターで複数のウインドウを表示してる際にyoutubeの場合
ウインドウを一定値以上に広げると右にナビゲーションバーが表示され
結果的に動画が小さくなってしまいます
今回作成したアプリはウインドウモードでもウインドウ内一杯で画面が表示されるように作成しています
 
# Requirement
 
*  Next.js
*  Tailwind
*  Chrome拡張機能（chrome-extension）
 
# Installation
 ~~~zsh
 git clone https://github.com/kitutune/import-youtube-fullsize.git
 cd import-youtube-fullsize.git
 yarn
 yarn dev
 ~~~
で、デフォルトのApp画面が開きます（ローカル環境で実行可能）
import-youtube-fullsizeファイルの中にある
YoutubeFullSizeWindow!!.zipを解凍すると中にreadmeがありますのでそちらを参考にお使いください
 
# Usage
本アプリはGoogleの拡張機能から使用することを前提にしています
拡張機能は[こちらから](https://import-youtube-fullsize.vercel.app/YoutubeFullSizeWindow.zip)ダウンロードすることも可能です
アプリ内デフォルトページ下部にもダウンロードリンクがあります（デフォルトページ外では表示されません）
<img width="203" alt="ボタン" src="https://user-images.githubusercontent.com/79749395/132093941-f55881ff-6771-4fdc-99e8-587cd1db4e41.png">
拡張機能追加後にyoutube表示しこちらのボタンを押せばウインドウモードでyoutubeがフルサイズで表示されます
 
# Note
 
デフォルトにyoutubeのページが表示されるようになっていますが著作権などある可能性があったのでyoutubeチャンネル
「しまぶーのIT大学」のしまぶー氏に許可をもらいデフォルトの画面に使わせていただいています。
 
# Author
 
作成情報を列挙する
 
* 作成者　kitutune　＋　Cti
* 所属 無

 
# License
MITライセンス


