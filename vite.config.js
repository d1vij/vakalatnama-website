import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/vakalatnama-website/" : "/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        "login-user": "/src/pages/login/user/index.html",
        "login-advocate": "/src/pages/login/advocate/index.html",
        "chat-ai": "/src/pages/chat/ai/index.html",
        "chat-mediation": "/src/pages/chat/mediation/index.html",
      },
    },
  },
}));
