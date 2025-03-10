// 多语言支持模块
const I18N = {
    // 当前语言
    locale: 'zh',
    
    // 语言数据
    data: {},
    
    // 初始化
    init: function(defaultLocale = 'zh') {
        // 从localStorage获取用户之前选择的语言，如果没有则使用默认语言
        this.locale = localStorage.getItem('app_locale') || defaultLocale;
        
        // 加载语言文件
        this.loadLocaleData(this.locale)
            .then(() => {
                // 应用语言到页面
                this.applyLocale();
                
                // 设置语言切换事件
                this.setupLanguageSwitcher();
            })
            .catch(error => {
                console.error('Failed to load locale data:', error);
            });
    },
    
    // 加载语言文件
    loadLocaleData: function(locale) {
        return fetch(`/locales/${locale}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load locale: ${locale}`);
                }
                return response.json();
            })
            .then(data => {
                this.data = data;
                return data;
            });
    },
    
    // 切换语言
    changeLocale: function(locale) {
        this.locale = locale;
        localStorage.setItem('app_locale', locale);
        
        // 加载新语言文件并应用
        this.loadLocaleData(locale)
            .then(() => {
                this.applyLocale();
            })
            .catch(error => {
                console.error('Failed to change locale:', error);
            });
    },
    
    // 应用语言到页面
    applyLocale: function() {
        // 获取所有带有data-i18n属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            // 根据元素类型设置翻译文本
            if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'email' || el.type === 'password')) {
                if (el.placeholder) {
                    el.placeholder = translation;
                } else {
                    el.value = translation;
                }
            } else if (el.tagName === 'META' && el.name === 'description') {
                el.content = translation;
            } else {
                el.textContent = translation;
            }
        });
        
        // 更新语言切换器的显示
        const langSwitcher = document.getElementById('language-switcher');
        if (langSwitcher) {
            langSwitcher.value = this.locale;
        }
    },
    
    // 获取翻译文本
    getTranslation: function(key) {
        // 支持嵌套键，如 'app.home.title'
        const keys = key.split('.');
        let translation = this.data;
        
        for (const k of keys) {
            if (translation && translation[k] !== undefined) {
                translation = translation[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key; // 如果找不到翻译，返回键名
            }
        }
        
        return translation;
    },
    
    // 设置语言切换器
    setupLanguageSwitcher: function() {
        const langSwitcher = document.getElementById('language-switcher');
        if (langSwitcher) {
            langSwitcher.value = this.locale;
            
            langSwitcher.addEventListener('change', (e) => {
                this.changeLocale(e.target.value);
            });
        }
    }
};

// 页面加载完成后初始化多语言支持
document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
});