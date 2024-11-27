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
            { text: '配色工具', url: 'https://prism.cdtools.click', description: '专业的在线配色工具，帮助设计师和开发者创建和谐、一致且符合无障碍标准的配色方案' }
        ]
    },
    {
        title: '实用工具',
        icon: '🛠️',
        items: [
            { text: '临时邮箱', url: 'https://email.cdtools.click', description: '一键工具临时邮箱提供免费、安全的临时邮箱服务。无需注册即可使用,帮助您保护隐私,避免垃圾邮件。' },
            { text: '学生证生成器', url: 'https://studentid.cdtools.click', description: '用户可以自定义学生证信息，并通过交互式界面实时预览效果。' },
            { text: '国家2000坐标系转换', url: 'https://cgcs2000.cdtools.click', description: 'WGS-84 至 CGCS2000 坐标转换器' }
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

    // 创建独立的样式，避免与主网站样式冲突
    const style = document.createElement('style');
    style.textContent = `
        #cdtools-menu * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, sans-serif;
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
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            color: #374151;
            text-decoration: none;
            font-size: 14px;
            transition: all 0.2s;
            cursor: pointer;
        }

        #cdtools-menu .cdtools-button:hover {
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border-color: #d1d5db;
        }

        #cdtools-menu .cdtools-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 999998;
            display: none;
        }

        #cdtools-menu .cdtools-sidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            width: 384px;
            background: white;
            z-index: 999999;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        }

        @media (max-width: 640px) {
            #cdtools-menu .cdtools-sidebar {
                width: 100%;
            }
        }

        #cdtools-menu .cdtools-sidebar.active {
            transform: translateX(0);
        }

        #cdtools-menu .cdtools-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            border-bottom: 1px solid #e5e7eb;
        }

        #cdtools-menu .cdtools-title {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
        }

        #cdtools-menu .cdtools-content {
            height: calc(100% - 65px);
            overflow-y: auto;
            padding: 16px;
        }

        #cdtools-menu .cdtools-category {
            margin-bottom: 24px;
        }

        #cdtools-menu .cdtools-category-title {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            color: #1f2937;
            margin-bottom: 12px;
        }

        #cdtools-menu .cdtools-category-title span {
            margin-right: 8px;
        }

        #cdtools-menu .cdtools-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }

        #cdtools-menu .cdtools-item {
            display: block;
            padding: 12px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            text-decoration: none;
            background: white;
            transition: all 0.2s;
        }

        #cdtools-menu .cdtools-item:hover {
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        #cdtools-menu .cdtools-item-title {
            font-size: 14px;
            font-weight: 500;
            color: #1f2937;
            margin-bottom: 4px;
        }

        #cdtools-menu .cdtools-item-desc {
            font-size: 12px;
            color: #6b7280;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
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
        } else {
            overlay.style.display = 'none';
            sidebar.classList.remove('active');
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
            <div class="cdtools-header">
                <h2 class="cdtools-title">一键工具 - CDTools</h2>
                <button class="cdtools-button" id="cdtools-close">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
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
                                    class="cdtools-item">
                                    <div class="cdtools-item-title">${item.text}</div>
                                    <div class="cdtools-item-desc">${item.description}</div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // 添加事件监听
    document.body.appendChild(container);

    const toggleBtn = container.querySelector('#cdtools-toggle');
    const closeBtn = container.querySelector('#cdtools-close');
    const overlay = container.querySelector('.cdtools-overlay');

    toggleBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
})();