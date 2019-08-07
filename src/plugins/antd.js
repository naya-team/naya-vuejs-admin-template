import {
  Button,
  Layout,
  Icon,
  Menu,
} from 'ant-design-vue';

const Antd = {};

Antd.install = (Vue) => {
  Vue.use(Button);
  Vue.use(Layout);
  Vue.use(Icon);
  Vue.use(Menu);
};

export default Antd;
