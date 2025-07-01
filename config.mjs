export default {
    /**
     * 是否添加对 React 的支持
     * 
     * 如果设置为 true，则会对打包产物按照 CoCo 手册中对 React 打包的[说明](https://codemao.yuque.com/kzbwh0/coco_guide/tew2fmihgp8bqsu7#NPPMu)进行修改。
     */
    supportReact: true,
    /**
     * 打包产物的许可证信息
     */
    license: {
        /**
         * 许可证名称
         */
        name: 'MIT',
        /**
         * 许可证 URL
         */
        url: 'https://opensource.org/license/MIT',
        /**
         * 许可证作者
         */
        author: '刘lyxAndy'
    },
    /**
     * 添加到打包产物许可证行后的附加代码
     */
    additionalCode: `window=this.window;document=this.document;location=this.location;navigator=this.navigator;`,
}