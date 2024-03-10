import {resolve} from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main:resolve(__dirname,
                    "index.html"),
                    login:resolve(__dirname,
                        "login.html"),
                        menu:resolve(__dirname,
                            "Menu.html"),
                            order:resolve(__dirname,
                                "Order.html"),
                                contact:resolve(__dirname,
                                    "Order.html"),
                                    about:resolve(__dirname,
                                        "About.html"),
            }
        }
    }
});