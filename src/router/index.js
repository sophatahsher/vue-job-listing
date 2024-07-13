import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobDetailView from "@/views/JobDetailView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobDetailView,
        },
        {
            path: '/jobs/add',
            name: 'post job',
            component: AddJobView,
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'Page Not Found',
            component: NotFoundView,
        }
    ]
});

export default router;