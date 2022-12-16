import type {App} from 'vue';
import {DBtn} from "@/components";

export default {
    install: (app: App) => {
        app.component('DBtn', DBtn);
    }
};

export {DBtn};