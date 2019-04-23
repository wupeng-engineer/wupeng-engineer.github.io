import toast from './toast.vue';
import loading from './loading.vue';
// 定义插件对象
const Toast = {};

Toast.install = function(Vue, options) {
    console.log("options", options);
    var toastVM, loadVM;
    Vue.prototype.$toast = (_opt, callback) => {
        const toastTip = Vue.extend(toast);
        toastVM = new toastTip({ data: _opt });
        var tpl = toastVM.$mount().$el;
        document.body.appendChild(tpl);
        callback && callback();
    };
    ["success", "error", "info", "warn"].forEach(type => {
        Vue.prototype.$toast[type] = (opt, callback) => {
            opt.type = type;
            return Vue.prototype.$toast(opt, callback);
        };
    });
    Vue.prototype.$loading = (_opt, type, callback) => {
        if (type == 'close') {
            if (!loadVM)
                return;
            loadVM.$mount().$destroy(true);
            loadVM.$mount().$el.parentNode.removeChild(loadVM.$mount().$el);
            loadVM = null;
        } else {
            if (loadVM)
                return;
            var loadTpl = Vue.extend(loading);
            loadVM = new loadTpl({ data: { content: _opt } });
            var tpl = loadVM.$mount().$el;
            document.body.appendChild(tpl);
        }
        callback && callback();
    };

    ['open', 'close'].forEach(type => {
        Vue.prototype.$loading[type] = (_opt, callback) => {
            return Vue.prototype.$loading(_opt, type, callback)
        }
    });
};
export default Toast;