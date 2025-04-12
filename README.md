## Node.jsがなくても使えるテンプレートフレームワークを作成しました。

## 使用方法
base.zipの中身を解凍し、「　js　」フォルダの中のadd.jsを参照します。

add.jsの中にはサイトのテンプレートがそのまま格納されています。

ここにお好きなサイトのテンプレートを入れてください。

サイト全体を使う場合は、divで囲い、allなどのクラスを付けておいて下さい。

変更したい範囲をdivなどで囲い、一意のクラス名を付けておいてください。


###  index.htmlの中身を見てみましょう

```
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="p_temp all">
    <div class="rep_content">
        <h1>Hello World</h1>
    </div>
</div>
    
    <script>var javascript_file_line_load = ['add.js', 'temp.js','tab.js'];</script>
    <script src="js/javascript_file_line_load.js"></script>
</body>
</html>



```
rep_contentがadd.jsに記載されているどこの要素なのかを確認しながら、rep_contentの中身を変更してみてください。





このテンプレートフレームワークは、replaceで囲まれた要素の中身をtemplateとして扱います。

add.jsでは、replaceに囲まれた、サイト全体を一つのテンプレートとして記載し、これをhtmlに追加する処理をしています。

呼び出す側は、クラスを引数として設定でき、テンプレート側の一致した要素のinnerhtml要素を、置換します。


つまり、上の
```
<div class="p_temp all">
    <div class="rep_content">
        <h1>Hello World</h1>
    </div>
</div>

```

は、テンプレートallを参照し、
その中の
rep_contentの中身を置換するように設定してあるということです。

テンプレート呼び出しをする要素には、p_tempを記載する必要があります。
