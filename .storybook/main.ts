import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    core: {
        builder: "@storybook/builder-vite",
    },
    viteFinal: async (config) => {
        config.resolve = config.resolve || {};

        config.resolve.alias = {
            ...config.resolve.alias,
            "@/components": path.resolve(__dirname, "../src/components"),
            "@/lib": path.resolve(__dirname, "../src/lib"),
        };
        return config;
    },
};
export default config;
