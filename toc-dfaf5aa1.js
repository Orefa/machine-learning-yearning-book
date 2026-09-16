// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">引言</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter1.html"><strong aria-hidden="true">1.</strong> 机器学习策略的原因</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter2.html"><strong aria-hidden="true">2.</strong> 如何使用本书来帮助您的团队</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter3.html"><strong aria-hidden="true">3.</strong> 预备知识和注释</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter4.html"><strong aria-hidden="true">4.</strong> 规模推动机器学习进步</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter5.html"><strong aria-hidden="true">5.</strong> 您的开发和测试集</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter6.html"><strong aria-hidden="true">6.</strong> 你的开发集和测试集应该来自相同的分布</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter7.html"><strong aria-hidden="true">7.</strong> 开发集/测试集需要多大</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter8.html"><strong aria-hidden="true">8.</strong> 为您的团队建立单一数字的评估指标以进行优化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter9.html"><strong aria-hidden="true">9.</strong> 优化指标和满足指标</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter10.html"><strong aria-hidden="true">10.</strong> 通过开发集和评估标准加速迭代</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter11.html"><strong aria-hidden="true">11.</strong> 何时更改开发/测试集和评估指标</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter12.html"><strong aria-hidden="true">12.</strong> 小结：建立开发集和测试集</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter13.html"><strong aria-hidden="true">13.</strong> 快速构建您的第一个系统，然后迭代</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter14.html"><strong aria-hidden="true">14.</strong> 误差分析：查看开发集样本以评估想法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter15.html"><strong aria-hidden="true">15.</strong> 在误差分析期间并行评估多个想法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter16.html"><strong aria-hidden="true">16.</strong> 清理错误标注的开发和测试集样本</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter17.html"><strong aria-hidden="true">17.</strong> 如果你有一个大的开发集，将其分成两个子集，只着眼于其中的一个</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter18.html"><strong aria-hidden="true">18.</strong> Eyeball 和 Blackbox 开发集应该多大？</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter19.html"><strong aria-hidden="true">19.</strong> 小贴士：基本误差分析</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter20.html"><strong aria-hidden="true">20.</strong> 偏差和方差：误差的两大来源</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter21.html"><strong aria-hidden="true">21.</strong> 偏差和方差的例子</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter22.html"><strong aria-hidden="true">22.</strong> 比较最优错误率</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter23.html"><strong aria-hidden="true">23.</strong> 处理偏差和方差</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter24.html"><strong aria-hidden="true">24.</strong> 偏差和方差间的权衡</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter25.html"><strong aria-hidden="true">25.</strong> 减少可避免偏差的方法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter26.html"><strong aria-hidden="true">26.</strong> 训练集上的误差分析</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter27.html"><strong aria-hidden="true">27.</strong> 减少方差的方法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter28.html"><strong aria-hidden="true">28.</strong> 诊断偏差和方差：学习曲线</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter29.html"><strong aria-hidden="true">29.</strong> 绘制训练误差曲线</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter30.html"><strong aria-hidden="true">30.</strong> 解读学习曲线：高偏差</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter31.html"><strong aria-hidden="true">31.</strong> 解释学习曲线：其他情况</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter32.html"><strong aria-hidden="true">32.</strong> 绘制学习曲线</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter33.html"><strong aria-hidden="true">33.</strong> 为何我们要与人类水平的表现作对比</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter34.html"><strong aria-hidden="true">34.</strong> 如何定义人类水平的表现</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter35.html"><strong aria-hidden="true">35.</strong> 超越人类水平表现</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter36.html"><strong aria-hidden="true">36.</strong> 何时应该在不同的分布下训练和测试</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter37.html"><strong aria-hidden="true">37.</strong> 如何决定是否使用所有数据</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter38.html"><strong aria-hidden="true">38.</strong> 如何决定是否包含不一致的数据</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter39.html"><strong aria-hidden="true">39.</strong> 加权数据</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter40.html"><strong aria-hidden="true">40.</strong> 从训练集到开发集的泛化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter41.html"><strong aria-hidden="true">41.</strong> 识别偏差、方差和数据不匹配误差</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter42.html"><strong aria-hidden="true">42.</strong> 处理数据不匹配</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter43.html"><strong aria-hidden="true">43.</strong> 人工数据合成</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter44.html"><strong aria-hidden="true">44.</strong> 优化验证测试</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter45.html"><strong aria-hidden="true">45.</strong> 优化验证集的一般形式</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter46.html"><strong aria-hidden="true">46.</strong> 强化学习样本</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter47.html"><strong aria-hidden="true">47.</strong> 端到端学习的兴起</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter48.html"><strong aria-hidden="true">48.</strong> 更多端到端学习示例</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter49.html"><strong aria-hidden="true">49.</strong> 端到端学习的优点和缺点</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter50.html"><strong aria-hidden="true">50.</strong> 选择流水线组件：数据可用性</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter51.html"><strong aria-hidden="true">51.</strong> 选择流水线组件：任务简单</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter52.html"><strong aria-hidden="true">52.</strong> 直接学习丰富的输出</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter53.html"><strong aria-hidden="true">53.</strong> 组件错误分析</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter54.html"><strong aria-hidden="true">54.</strong> 将错误归因于某个组件</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter55.html"><strong aria-hidden="true">55.</strong> 错误归因的一般情况</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter56.html"><strong aria-hidden="true">56.</strong> 组件错误分析和与人类水平的对比</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter57.html"><strong aria-hidden="true">57.</strong> 发现有瑕疵的ML流水线</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter58.html"><strong aria-hidden="true">58.</strong> 组建一个超级英雄团队——让你的队友阅读本书</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

