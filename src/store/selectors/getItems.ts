import getStore from '../store';
export default () => {
    return getStore().items;
}