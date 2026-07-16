import DefaultTheme from 'vitepress/theme';
import { nextTick } from 'vue';
import type { EnhanceAppContext } from 'vitepress';
import './style.css';

/** 为已渲染的 Mermaid 容器绑定灯箱；图由插件异步插入，因此由观察器反复调用。 */
function bindMermaidZoom() {
  document.querySelectorAll<HTMLElement>('.mermaid').forEach((container) => {
    if (container.dataset.zoomBound) return;

    container.dataset.zoomBound = 'true';
    container.title = '点击放大';

    container.addEventListener('click', () => {
      const svg = container.querySelector('svg');
      if (!svg) return;

      const overlay = document.createElement('div');
      overlay.className = 'mermaid-zoom-overlay';

      const cloned = svg.cloneNode(true) as SVGElement;
      cloned.removeAttribute('width');
      cloned.removeAttribute('height');
      cloned.style.cssText = 'max-width:90vw;max-height:85vh;width:auto;height:auto;';

      const closeButton = document.createElement('button');
      closeButton.className = 'mermaid-zoom-close';
      closeButton.textContent = '✕';
      closeButton.setAttribute('aria-label', '关闭');

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') close();
      };
      const close = () => {
        document.removeEventListener('keydown', onKeyDown);
        overlay.remove();
      };

      closeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        close();
      });
      overlay.addEventListener('click', close);
      document.addEventListener('keydown', onKeyDown);

      overlay.append(cloned, closeButton);
      document.body.appendChild(overlay);
    });
  });
}

/** 持续监听异步 Mermaid 渲染和 VitePress 路由换页，避免固定延时错过绑定时机。 */
function setupMermaidZoom() {
  nextTick(() => {
    bindMermaidZoom();
    new MutationObserver(bindMermaidZoom).observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }: EnhanceAppContext) {
    if (typeof window === 'undefined') return;
    // 首次加载
    setupMermaidZoom();
    // 观察器可覆盖异步 Mermaid 渲染；此处保留路由后立即扫描以缩短普通换页的等待。
    router.onAfterRouteChanged = () => {
      nextTick(bindMermaidZoom);
    };
  }
};
