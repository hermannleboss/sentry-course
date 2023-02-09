import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/main.pcss"

import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";
import packageJson from "../package.json"


const app = createApp(App)
Sentry.init({
    app,
    dsn: "https://8d447f1ea57e45bd8dd251991bf9707b@o4504645703172096.ingest.sentry.io/4504645717590016",
    logErrors: true,
    release: packageJson.version,
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

app.use(router)
.mount('#app')

