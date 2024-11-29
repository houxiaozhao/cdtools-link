const CONFIG = {
    analytics: {
        baidu: '7fdd626d87b4c2ab5afee04e5fcd0b9d',
        ga: 'ca-pub-3594081485685271',
        la: '3KHNju0NS6KdmK8g'
    },
    ui: {
        sidebarWidth: '384px',
        mobileBreakpoint: '640px'
    }
};

const links = [
    {
        title: '图片工具',
        icon: '🖼️',
        items: [
            { text: '图片转Excel', url: 'https://img2excel.cdtools.click', description: '图片转 Excel 在线工具' },
            { text: '图片压缩', url: 'https://compress.cdtools.click', description: '在线图片压缩工具，帮助你轻松压缩图片。' },
            { text: '图片分割工具', url: 'https://cut.cdtools.click', description: '专业的图片分割工具，支持朋友圈九宫格切图，完全免费且无限制使用。注重隐私保护，本地处理，永不上传。' }
        ]
    },
    {
        title: 'PDF工具',
        icon: '📄',
        items: [
            { text: 'PDF转扫描件', url: 'https://scan.cdtools.click', description: '能够让 PDF 看起来就像是扫描件一样的纯前端网站' }
        ]
    },
    {
        title: '开发工具',
        icon: '⚙️',
        items: [
            { text: 'Github加速', url: 'https://gh-proxy.cdtools.click', description: 'GitHub 文件加速下载服务' },
            { text: 'Cloudflare优选IP', url: 'https://cf-ip.cdtools.click', description: 'Cloudflare 优选IP' },
            { text: 'Cron表达式', url: 'https://cron.cdtools.click', description: '在线 cron 表达式生成器，帮助你轻松生成和管理 cron 表达式。' }
        ]
    },
    {
        title: '设计工具',
        icon: '🎨',
        items: [
            { text: '配色工具', url: 'https://prism.cdtools.click', description: '专业的在线配色工具，帮助设计师和开发者创建和谐、一致且符合无障碍标准的配色方案' },
            { text: '在线画板工具', url: 'https://paint.cdtools.click', description: 'Paint Board是一款免费的在线画板工具，提供12种专业画笔和丰富的绘画功能。支持多端操作，注重用户隐私，让创作充满趣味性。我们的画板工具完全免费，无需下载，即开即用。提供自由绘画、形状绘制、图片编辑等多样功能，让您的艺术创作更加便捷有趣。' }
        ]
    },
    {
        title: '实用工具',
        icon: '🛠️',
        items: [
            { text: '临时邮箱', url: 'https://email.cdtools.click', description: '一键工具临时邮箱提供免费、安全的临时邮箱服务。无需注册即可使用,帮助您保护隐私,避免垃圾邮件。' },
            { text: '学生证生成器', url: 'https://studentid.cdtools.click', description: '用户可以自定义学生证信息，并通过交互式界面实时预览效果。' },
            { text: '国家2000坐标系转换', url: 'https://cgcs2000.cdtools.click', description: 'WGS-84 至 CGCS2000 坐标转换器' },
            { text: '静谧空间', url: 'https://peace.cdtools.click', description: '静谧空间(peace.cdtools.click)为您提供优质的白噪声、双耳节拍、自然环境声和冥想音频。包括白噪声、双耳节拍、蓝噪声、棕噪声、瀑布声等多种助眠音效，帮助您放松身心，改善睡眠质量。' },
        ]
    },
    {
        title: '个人站点',
        icon: '👤',
        items: [
            { text: '我的博客', url: 'https://blog.cdtools.click', description: 'houxiaozhao 部落格' }
        ]
    }
];

(function () {
    // 检查是否已经加载了菜单
    if (document.querySelector('#cdtools-menu')) {
        return;
    }

    // 添加统计和广告代码
    function insertAnalytics() {
        // 51LA统计
        if (!document.getElementById('LA_COLLECT')) {
            const la = document.createElement('script');
            la.charset = 'UTF-8';
            la.id = 'LA_COLLECT';
            la.src = '//sdk.51.la/js-sdk-pro.min.js';
            la.onload = function () {
                LA.init({ id: CONFIG.analytics.la, ck: CONFIG.analytics.la });
            };
            document.head.appendChild(la);
        }

        // Google AdSense
        if (!document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
            const adsense = document.createElement('script');
            adsense.async = true;
            adsense.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CONFIG.analytics.ga}`;
            adsense.crossOrigin = 'anonymous';
            document.head.appendChild(adsense);
        }

        // 百度统计
        if (!document.querySelector('script[src*="hm.baidu.com/hm.js"]')) {
            const baidu = document.createElement('script');
            baidu.text = `
                var _hmt = _hmt || [];
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?${CONFIG.analytics.baidu}";
                    var s = document.getElementsByTagName("script")[0]; 
                    s.parentNode.insertBefore(hm, s);
                })();
            `;
            document.head.appendChild(baidu);
        }
    }

    // 在页面加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertAnalytics);
    } else {
        insertAnalytics();
    }

    // 创建独立的样式，避免与主网站样式冲突
    const style = document.createElement('style');
    style.textContent = `
        #cdtools-menu * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, sans-serif;
        }

        /* 亮色主题（默认） */
        #cdtools-menu {
            --cdtools-bg: #ffffff;
            --cdtools-text: #374151;
            --cdtools-border: #e5e7eb;
            --cdtools-hover-bg: rgba(0, 0, 0, 0.05);
            --cdtools-secondary-text: #6b7280;
            --cdtools-shadow: rgba(0, 0, 0, 0.1);
            --cdtools-tooltip-bg: #1f2937;
            --cdtools-tooltip-text: #ffffff;
            --cdtools-overlay-bg: rgba(0, 0, 0, 0.5);
        }

        /* 深色主题 */
        #cdtools-menu.dark-theme {
            --cdtools-bg: #1f2937;
            --cdtools-text: #f3f4f6;
            --cdtools-border: #374151;
            --cdtools-hover-bg: rgba(255, 255, 255, 0.1);
            --cdtools-secondary-text: #9ca3af;
            --cdtools-shadow: rgba(0, 0, 0, 0.3);
            --cdtools-tooltip-bg: #374151;
            --cdtools-tooltip-text: #ffffff;
            --cdtools-overlay-bg: rgba(0, 0, 0, 0.7);
        }
        
        #cdtools-menu .cdtools-fixed {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999999;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        #cdtools-menu .cdtools-button {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            background: var(--cdtools-bg);
            border: 1px solid var(--cdtools-border);
            border-radius: 8px;
            box-shadow: 0 1px 3px var(--cdtools-shadow);
            color: var(--cdtools-text);
            text-decoration: none;
            font-size: 14px;
            transition: all 0.2s;
            cursor: pointer;
        }

        #cdtools-menu .cdtools-button:hover {
            box-shadow: 0 4px 6px var(--cdtools-shadow);
            border-color: var(--cdtools-border);
        }

        #cdtools-menu .cdtools-overlay {
            position: fixed;
            inset: 0;
            background: var(--cdtools-overlay-bg);
            z-index: 999998;
            display: none;
        }

        #cdtools-menu .cdtools-sidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            width: ${CONFIG.ui.sidebarWidth};
            background: var(--cdtools-bg);
            z-index: 999999;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        }

        #cdtools-menu .cdtools-sidebar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid var(--cdtools-border);
        }

        #cdtools-menu .cdtools-sidebar-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--cdtools-text);
            margin: 0;
        }

        #cdtools-menu .cdtools-sidebar-buttons {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        #cdtools-menu .cdtools-theme-btn,
        #cdtools-menu .cdtools-close-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            color: var(--cdtools-text);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
        }

        #cdtools-menu .cdtools-theme-btn:hover,
        #cdtools-menu .cdtools-close-btn:hover {
            background: var(--cdtools-hover-bg);
        }

        #cdtools-menu .cdtools-close-btn {
            font-size: 24px;
            line-height: 1;
        }

        #cdtools-menu .theme-icon-light,
        #cdtools-menu.dark-theme .theme-icon-dark {
            display: block;
        }

        #cdtools-menu .theme-icon-dark,
        #cdtools-menu.dark-theme .theme-icon-light {
            display: none;
        }

        #cdtools-menu .cdtools-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            border-bottom: 1px solid var(--cdtools-border);
        }

        #cdtools-menu .cdtools-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--cdtools-text);
        }

        #cdtools-menu .cdtools-search {
            padding: 12px 16px;
            border-bottom: 1px solid var(--cdtools-border);
        }

        #cdtools-menu .cdtools-search input {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--cdtools-border);
            border-radius: 6px;
            font-size: 14px;
            outline: none;
            transition: all 0.2s;
            background: var(--cdtools-bg);
            color: var(--cdtools-text);
        }

        #cdtools-menu .cdtools-search input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        #cdtools-menu .cdtools-category-title {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            color: var(--cdtools-text);
            margin-bottom: 12px;
        }

        #cdtools-menu .cdtools-item {
            position: relative;
            display: block;
            padding: 12px;
            border: 1px solid var(--cdtools-border);
            border-radius: 8px;
            text-decoration: none;
            background: var(--cdtools-bg);
            transition: all 0.2s;
        }

        #cdtools-menu .cdtools-item:hover {
            box-shadow: 0 4px 6px var(--cdtools-shadow);
        }

        #cdtools-menu .cdtools-item-title {
            font-size: 14px;
            font-weight: 500;
            color: var(--cdtools-text);
            margin-bottom: 4px;
        }

        #cdtools-menu .cdtools-item-desc {
            font-size: 12px;
            color: var(--cdtools-secondary-text);
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        #cdtools-menu .cdtools-copy-btn {
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 4px;
            border: none;
            background: transparent;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
            border-radius: 4px;
            color: var(--cdtools-text);
        }

        #cdtools-menu .cdtools-copy-btn:hover {
            background: var(--cdtools-hover-bg);
        }

        #cdtools-menu .cdtools-copy-tooltip {
            position: absolute;
            top: -30px;
            right: 0;
            background: var(--cdtools-tooltip-bg);
            color: var(--cdtools-tooltip-text);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            pointer-events: none;
            opacity: 0;
            transform: translateY(5px);
            transition: all 0.2s;
            white-space: nowrap;
        }

        @media (max-width: ${CONFIG.ui.mobileBreakpoint}) {
            #cdtools-menu .cdtools-sidebar {
                width: 100%;
            }
        }

        #cdtools-menu .cdtools-content {
            height: calc(100% - 65px);
            overflow-y: auto;
            padding: 16px;
            background: var(--cdtools-bg);
        }

        #cdtools-menu .cdtools-category {
            margin-bottom: 24px;
        }

        #cdtools-menu .cdtools-category-title span {
            margin-right: 8px;
        }

        #cdtools-menu .cdtools-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }

        #cdtools-menu .cdtools-item:hover .cdtools-copy-btn {
            opacity: 1;
        }

        #cdtools-menu .cdtools-copy-tooltip.show {
            opacity: 1;
            transform: translateY(0);
        }

        #cdtools-menu .cdtools-category.hidden {
            display: none;
        }

        #cdtools-menu .cdtools-item.hidden {
            display: none;
        }

        #cdtools-menu .cdtools-sidebar.active {
            transform: translateX(0);
        }
             .cdtools-item {
        position: relative;
      }
      .cdtools-item:hover::after {
        content: attr(data-description);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin: 0 10px 5px;
        padding: 5px 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 4px;
        font-size: 12px;
        max-width: 200px;
        width: max-content;
        white-space: normal;
        word-wrap: break-word;
        text-align: center;
        z-index: 1000;
        animation: tooltipFade 0.2s ease-in-out;
      }

      @keyframes tooltipFade {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(5px);
        }
        to {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    // 创建菜单HTML
    const container = document.createElement('div');
    container.id = 'cdtools-menu';

    let isMenuVisible = false;

    function toggleMenu() {
        isMenuVisible = !isMenuVisible;
        const overlay = container.querySelector('.cdtools-overlay');
        const sidebar = container.querySelector('.cdtools-sidebar');

        if (isMenuVisible) {
            overlay.style.display = 'block';
            sidebar.classList.add('active');
            searchInput.focus(); // 自动聚焦到搜索框
        } else {
            overlay.style.display = 'none';
            sidebar.classList.remove('active');
            searchInput.value = ''; // 清空搜索框
            handleSearch({ target: searchInput }); // 重置搜索结果
        }
    }

    container.innerHTML = `
        <div class="cdtools-fixed">
            <a href="https://cdtools.click" 
                target="_blank" 
                class="cdtools-button">
                <span class="cdtools-button-text">
                    <span class="cdtools-hide-mobile">一键工具 - </span>
                    <span>CDTools</span>
                </span>
            </a>
            <button class="cdtools-button" id="cdtools-toggle">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>
        </div>

        <div class="cdtools-overlay"></div>

        <div class="cdtools-sidebar">
            <div class="cdtools-sidebar-header">
                <h2 class="cdtools-sidebar-title">一键工具</h2>
                <div class="cdtools-sidebar-buttons">
                    <button class="cdtools-theme-btn" title="切换主题">
                        <svg class="theme-icon-light" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg class="theme-icon-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                    <button class="cdtools-close-btn" title="关闭">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="cdtools-search">
                <input type="text" placeholder="搜索工具..." id="cdtools-search-input">
            </div>
            <div class="cdtools-content">
                ${links.map(category => `
                    <div class="cdtools-category">
                        <h3 class="cdtools-category-title">
                            <span>${category.icon}</span>
                            ${category.title}
                        </h3>
                        <div class="cdtools-grid">
                            ${category.items.map(item => `
                                <a href="${item.url}" 
                                    target="_blank"
                                    class="cdtools-item"
                                    data-title="${item.text}"
                                    data-description="${item.description}">
                                    <div class="cdtools-item-title">${item.text}</div>
                                    <div class="cdtools-item-desc">${item.description}</div>
                                    <button class="cdtools-copy-btn" title="复制链接" data-url="${item.url}">
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                                        </svg>
                                        <div class="cdtools-copy-tooltip">已复制!</div>
                                    </button>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // 获取主题按钮
    const themeBtn = container.querySelector('.cdtools-theme-btn');

    // 检查本地存储的主题
    const savedTheme = localStorage.getItem('cdtools-theme');
    if (savedTheme === 'dark') {
        container.classList.add('dark-theme');
    }

    // 切换主题
    themeBtn.addEventListener('click', () => {
        container.classList.toggle('dark-theme');
        const isDark = container.classList.contains('dark-theme');
        localStorage.setItem('cdtools-theme', isDark ? 'dark' : 'light');
    });

    // 添加事件监听
    document.body.appendChild(container);

    const toggleBtn = container.querySelector('#cdtools-toggle');
    const closeBtn = container.querySelector('.cdtools-close-btn');
    const overlay = container.querySelector('.cdtools-overlay');
    const searchInput = container.querySelector('#cdtools-search-input');

    // 搜索功能
    function handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const categories = container.querySelectorAll('.cdtools-category');

        categories.forEach(category => {
            const items = category.querySelectorAll('.cdtools-item');
            let hasVisibleItems = false;

            items.forEach(item => {
                const title = item.getAttribute('data-title').toLowerCase();
                const description = item.getAttribute('data-description').toLowerCase();
                const isMatch = title.includes(searchTerm) || description.includes(searchTerm);

                item.classList.toggle('hidden', !isMatch);
                if (isMatch) hasVisibleItems = true;
            });

            category.classList.toggle('hidden', !hasVisibleItems);
        });
    }

    searchInput.addEventListener('input', handleSearch);

    toggleBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // 复制链接功能
    function copyToClipboard(text, button) {
        const tooltip = button.querySelector('.cdtools-copy-tooltip');

        // 创建临时文本区域
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);

        try {
            // 选择文本并复制
            textArea.select();
            document.execCommand('copy');

            // 显示提示
            tooltip.classList.add('show');

            // 2秒后隐藏提示
            setTimeout(() => {
                tooltip.classList.remove('show');
            }, 2000);
        } catch (err) {
            console.error('复制失败:', err);
        } finally {
            // 清理临时元素
            document.body.removeChild(textArea);
        }
    }

    container.addEventListener('click', (e) => {
        if (e.target.closest('.cdtools-copy-btn')) {
            e.preventDefault();
            const button = e.target.closest('.cdtools-copy-btn');
            const url = button.getAttribute('data-url');

            // 尝试使用新API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url)
                    .then(() => {
                        const tooltip = button.querySelector('.cdtools-copy-tooltip');
                        tooltip.classList.add('show');
                        setTimeout(() => {
                            tooltip.classList.remove('show');
                        }, 2000);
                    })
                    .catch(() => {
                        // 如果新API失败，使用兼容方法
                        copyToClipboard(url, button);
                    });
            } else {
                // 使用兼容方法
                copyToClipboard(url, button);
            }
        }
    });

    // 添加键盘快捷键支持
    document.addEventListener('keydown', (e) => {
        // Esc 键关闭侧边栏
        if (e.key === 'Escape' && isMenuVisible) {
            toggleMenu();
        }

        // Ctrl/Cmd + K 打开侧边栏
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault(); // 阻止浏览器默认行为
            if (!isMenuVisible) {
                toggleMenu();
            }
        }
    });
})();