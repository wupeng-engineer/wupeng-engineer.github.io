// /src/components/MessageBox/index.js

import toast from './toast.vue';
import loading from './loading.vue';
// 定义插件对象
var Toast = {};
var toastVM = null,
    loadNode = null,
    showLoad = false;

Toast.install = function(Vue, options) {
    const ToastBoxInstance = Vue.extend(toast);
    var opt = {
        time: '2500'
    };
    for (var property in options) {
        opt[property] = options[property];
    }
    const initInstance = () => {
        toastVM = new ToastBoxInstance()
        var tpl = toastVM.$mount().$el;
        document.body.appendChild(tpl);
        toastVM.show = true;
        setTimeout(function() {
            toastVM.show = false;
        }, opt.duration)
    };

    Vue.prototype.$toast = (options) => {
        if (!toastVM) {
            initInstance();
        }
        if (typeof options === 'string') {
            toastVM.content = options;
        } else if (typeof options === 'object') {
            Object.assign(toastVM, options);
        }
        return toastVM()
            .then(val => {
                toastVM = null;
                return Promise.resolve(val);
            })
            .catch(err => {
                toastVM = null;
                return Promise.reject(err);
            });

    };

    Vue.prototype.$loading = function(tips, type) {
        if (type == 'close') {
            loadNode.show = showLoad = true;
            showLoad = false;
        } else {
            if (showLoad) {
                // 如果loading还在，则不再执行
                return;
            }
            var loadTpl = Vue.extend(loading);
            loadNode = new loadTpl();
            var tpl = loadNode.$mount().$el;

            document.body.appendChild(tpl);
            loadNode.show = showLoad = true;
        }
    };

    ['open', 'close'].forEach(function(type) {
        Vue.prototype.$loading[type] = function(tips) {
            return Vue.prototype.$loading(tips, type)
        }
    });
};
export default Toast;
/**
 * his.$msgBox.showMsgBox({
 *    title: '添加分类',
 *    content: '请填写分类名称',
 *    isShowInput: true
 *}).then(async (val) => {
 *    // ...        
 *}).catch(() => {
 *    // ...
 *});    
 */