import vPermission from "./permission";
import type { App } from "vue";

const setupDirectives =async (app: App) => {
new Promise(async (resolve,reject) => {
    app.directive("permission", vPermission);
    resolve(true);
})
};

export default setupDirectives;
