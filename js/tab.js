
/*

<div class="accordion">
    <div class="slide-down-accordion">
        <div class="slide-down-content">
            これはコンテンツ1です。
        </div>
    </div>
    <div onclick="toggleContent(this)" class="btn">コンテンツ1を表示</div>

</div>

*/
function toggleContent(button) {
    const accordions = document.querySelectorAll('.accordion');
    const currentaccordion = button.parentElement;
    const currentContent = currentaccordion.querySelector('.slide-down-accordion');
    const isActive = currentContent.style.maxHeight !== '0px' && currentContent.style.maxHeight !== '';

    accordions.forEach(accordion => {
        const content = accordion.querySelector('.slide-down-accordion');
        const btn = accordion.querySelector('.btn');
        
        if (accordion === currentaccordion) {
            // 現在のコンテンツをトグル
            if (isActive) {
                content.style.maxHeight = '0';
                button.textContent = button.textContent.replace('非表示', '表示');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                button.textContent = button.textContent.replace('表示', '非表示');
            }
        } else {
            // 他のコンテンツを非表示
            content.style.maxHeight = '0';
            btn.textContent = btn.textContent.replace('非表示', '表示');
        }
    });

}



// Style要素の作成
const style = document.createElement('style');
style.textContent = `
    .slide-down-accordion {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    }
`;

// headに追加
document.head.appendChild(style);

