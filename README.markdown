#jQuery ah-placeholder Plugin

*A plugin support placeholder attribute alternative.*

HTML5の仕様にあるplaceholder属性を、未対応のブラウザでも擬似的に使えるようにするjQueryプラグインです。title属性に入れた文字列を、プレースホルダー用のテキストとして扱います。

##使い方 - Usage

サンプル:

    <head>
    <script src="./js/jquery.ah-placeholder.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
    $(document).ready(function() {
        $('.jq-placeholder').ahPlaceholder({
            placeholderColor : 'darkgray',
            necessaryColor   : 'palevioletred'
        });
    });
    $(window).unload(function(){});
    </script>
    </head>
    <body>
    <form action="" method="get">
        <input type="text" name="string1" value="" title="(必須)プレースホルダーテキスト" class="jq-placeholder necessary" />
        <input type="text" name="string2" value="" title="プレースホルダーテキスト" class="jq-placeholder" />
        <input type="submit" name="submit" value="送信" />
    </form>
    </body>

##クレジット - Credit

Copyright 2011, Ayumu Sato ( http://havelog.ayumusato.com )