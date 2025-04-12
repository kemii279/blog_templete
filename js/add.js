// 追加したいHTMLコード
let codeToAdd = `
<div class = "replace">
<div class="accordion">
    <div class="slide-down-accordion">
        <div class="slide-down-content">
            これはコンテンツ1です。
        </div>
    </div>
    <div onclick="toggleContent(this)" class="btn">コンテンツ1を表示</div>

</div>




 <div class="all">

    
    <header>
        <div class="container header-inner">
            <div class="logo">Simple Blog</div>
            <a href="#" class="home-link">HOME</a>
        </div>
    </header>
    
    <div class="container">
        <main class="main-content">
            <article class="rep_content">
                <h1>ブログ記事のタイトル</h1>
                <p>ここにブログ記事の本文が入ります。シンプルで読みやすいデザインを心がけています。青白を基調とした配色で、落ち着いた雰囲気を演出しています。</p>
                <p>レスポンシブデザインに対応しているので、スマートフォンでも快適に閲覧できます。フォントサイズも適切に調整してあります。</p>
            </article>
            
            <aside class="sidebar">
                <section class="related-posts">
                    <h2>関連記事</h2>
                    <div class="related-post">
                        <a href="#">関連記事タイトル1</a>
                    </div>
                    <div class="related-post">
                        <a href="#">関連記事タイトル2</a>
                    </div>
                    <div class="related-post">
                        <a href="#">関連記事タイトル3</a>
                    </div>
                </section>
            </aside>
        </main>
    </div>
    
    <footer>
        <div class="container">
            <p>&copy; 2023 Simple Blog. All rights reserved.</p>
        </div>
    </footer>
</div>


</div>


`;
document.body.insertAdjacentHTML('beforeend', codeToAdd);
