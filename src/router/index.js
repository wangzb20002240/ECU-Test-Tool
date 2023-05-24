import {createRouter, createWebHistory} from 'vue-router'
import ModuleTestingView from '@/views/sub-views/ModuleTestingView.vue'
import IntegrationTestingView from '@/views/sub-views/IntegrationTestingView.vue'
import TestUrl from "@/components/module-test/TestUrl.vue";
import TestPlay from "@/components/module-test/TestPlay.vue";
import TestSearch from "@/components/module-test/TestSearch.vue";
import TestLoginAndPlay from "@/components/integration-test/TestLoginAndPlay.vue";
import TestHistory from "@/components/integration-test/TestHistory.vue";
import TestLikeAndCoins from "@/components/integration-test/TestLikeAndCoins.vue";
import TestKeys from "@/components/data-test/TestKeys.vue";
import dataTestingView from "@/views/sub-views/DataTestingView.vue";

const routes = [
    {
        path: '/',
        redirect: '/module-testing-view'
    },
    {
        path: '/module-testing-view',
        component: ModuleTestingView,
        children:[
            {
                name: "test-url",
                path: '/module-testing-view/test-url',
                component: TestUrl,
            },
            {
                name: "test-search",
                path: '/module-testing-view/test-search',
                component: TestSearch,
            },
            {
                name: "test-play",
                path: '/module-testing-view/test-play',
                component: TestPlay,
            },
        ]
    },
    {
        path: '/integration-testing-view',
        component: IntegrationTestingView,
        children:[
            {
                name: "test-login-and-play",
                path: '/module-testing-view/test-login-and-play',
                component: TestLoginAndPlay,
            },
            {
                name: "test-history",
                path: '/module-testing-view/test-history',
                component: TestHistory,
            },
            {
                name: "test-like-and-coins",
                path: '/module-testing-view/test-like-and-coins',
                component: TestLikeAndCoins,
            },
        ]
    },
    {
        path: '/data-testing-view',
        component: dataTestingView,
        children:[
            {
                name: "test-keys",
                path: '/data-testing-view/test-keys',
                component: TestKeys,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
