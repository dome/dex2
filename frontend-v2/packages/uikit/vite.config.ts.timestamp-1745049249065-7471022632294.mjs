// vite.config.ts
import { defineConfig } from "file:///Users/dome/devel-dex/IceCreamSwapUi/node_modules/.pnpm/vite@4.5.3_@types+node@22.5.2_terser@5.31.6/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///Users/dome/devel-dex/IceCreamSwapUi/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.8.0_@types+node@22.5.2_terser@5.31.6_vite@4.5.3_@types+node@22.5.2_terser@5.31.6_/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import dts from "file:///Users/dome/devel-dex/IceCreamSwapUi/node_modules/.pnpm/vite-plugin-dts@3.5.3_@types+node@22.5.2_rollup@2.78.0_typescript@5.2.2_vite@4.5.3_@types+node@22.5.2_terser@5.31.6_/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@pancakeswap/uikit",
  version: "0.63.4",
  description: "Set of UI components for pancake projects",
  type: "module",
  main: "dist/index.cjs",
  module: "dist/index.js",
  types: "dist/index.d.ts",
  sideEffects: [
    "*.css.ts",
    "src/css/**/*",
    "src/theme/**/*"
  ],
  exports: {
    "./package.json": "./package.json",
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./styles": {
      import: "./dist/style.css",
      require: "./dist/style.css"
    },
    "./css/atoms": {
      import: "./src/css/atoms.ts",
      types: "./dist/css/atoms.d.ts"
    },
    "./css/responsiveStyle": {
      import: "./src/css/responsiveStyle.ts",
      types: "./dist/css/responsiveStyle.d.ts"
    }
  },
  repository: "https://github.com/pancakeswap/pancake-toolkit/tree/master/packages/pancake-uikit",
  license: "MIT",
  private: true,
  scripts: {
    build: "vite build",
    dev: "vite build --watch --mode development",
    start: "pnpm storybook",
    lint: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "format:check": "prettier --check --loglevel error 'src/**/*.{js,jsx,ts,tsx}'",
    "format:write": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'",
    storybook: "storybook dev -p 6006",
    "build:storybook": "storybook build",
    test: "vitest --run",
    "update:snapshot": "vitest -u",
    prepublishOnly: "pnpm run pkg:build",
    clean: "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  devDependencies: {
    "@babel/core": "^7.20.12",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "@pancakeswap/farms": "workspace:*",
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/pools": "workspace:*",
    "@pancakeswap/sdk": "workspace:*",
    "@pancakeswap/swap-sdk-core": "workspace:*",
    "@pancakeswap/token-lists": "workspace:*",
    "@pancakeswap/tokens": "workspace:*",
    "@pancakeswap/utils": "workspace:*",
    "@pancakeswap/v3-sdk": "workspace:*",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-typescript": "^8.2.1",
    "@rollup/plugin-url": "^6.0.0",
    "@storybook/addon-a11y": "^7.0.7",
    "@storybook/addon-actions": "^7.0.7",
    "@storybook/addon-essentials": "^7.0.7",
    "@storybook/addon-links": "^7.0.7",
    "@storybook/builder-vite": "^7.0.7",
    "@storybook/react": "^7.0.7",
    "@storybook/react-vite": "^7.0.7",
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^12.1.3",
    "@types/d3": "^7.4.0",
    "@types/js-cookie": "^3.0.2",
    "@types/lodash": "^4.14.168",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.0.6",
    "@types/react-router-dom": "^5.1.7",
    "@types/react-transition-group": "^4.4.1",
    "@types/styled-system__should-forward-prop": "^5.1.2",
    "@vanilla-extract/vite-plugin": "^3.8.0",
    "@vitejs/plugin-react": "4.0.0",
    "babel-jest": "^29.3.1",
    "babel-loader": "^9.1.2",
    "babel-plugin-styled-components": "^1.12.0",
    d3: "^7.8.2",
    jest: "29.3.1",
    "jest-environment-jsdom": "^29.3.1",
    "jest-styled-components": "^7.0.8",
    "js-cookie": "*",
    "next-themes": "^0.2.1",
    polished: "^4.2.2",
    react: "^18.2.0",
    "react-countup": "^6.4.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-is": "^17.0.2",
    "react-markdown": "^6.0.2",
    "react-redux": "^8.0.5",
    "react-router-dom": "^5.2.0",
    "react-transition-group": "*",
    "remark-gfm": "*",
    rollup: "^2.70.1",
    "rollup-plugin-node-builtins": "^2.1.2",
    storybook: "^7.0.7",
    "styled-components": "6.0.7",
    "themeprovider-storybook": "^1.7.2",
    "ts-jest": "^27.1.3",
    viem: "1.2.9",
    vite: "^4.3.1",
    "vite-plugin-dts": "^3.5.3",
    "vite-tsconfig-paths": "^4.0.3",
    vitest: "^0.27.2",
    wagmi: "^1.3.10"
  },
  peerDependencies: {
    "@sentry/nextjs": "^7.52.1",
    "js-cookie": "*",
    next: "*",
    "next-seo": "*",
    "next-themes": "^0.2.1",
    react: "^18.2.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-transition-group": "*",
    "remark-gfm": "*",
    "styled-components": "6.0.7",
    viem: "1.2.9"
  },
  dependencies: {
    "@pancakeswap/farms": "workspace:*",
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/localization": "workspace:*",
    "@pancakeswap/pools": "workspace:*",
    "@pancakeswap/sdk": "workspace:*",
    "@pancakeswap/swap-sdk-core": "workspace:*",
    "@pancakeswap/token-lists": "workspace:*",
    "@pancakeswap/tokens": "workspace:*",
    "@pancakeswap/v3-sdk": "workspace:*",
    "@popperjs/core": "^2.9.2",
    "@radix-ui/react-dismissable-layer": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.0",
    "@styled-system/should-forward-prop": "^5.1.5",
    "@types/styled-system": "^5.1.17",
    "@vanilla-extract/css": "^1.13.0",
    "@vanilla-extract/css-utils": "^0.1.3",
    "@vanilla-extract/recipes": "^0.5.0",
    "@vanilla-extract/sprinkles": "^1.6.1",
    "bignumber.js": "^9.0.0",
    clsx: "^1.2.1",
    csstype: "^3.1.2",
    "date-fns": "^2.29.3",
    deepmerge: "^4.0.0",
    "framer-motion": "10.16.4",
    "lightweight-charts": "^4.0.1",
    lodash: "^4.17.20",
    "react-popper": "^2.3.0",
    "styled-system": "^5.1.5",
    tslib: "^2.2.0"
  },
  publishConfig: {
    access: "public"
  }
};

// vite.config.ts
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(package_default.peerDependencies), ...Object.keys(package_default.dependencies), "crypto"]
    }
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short"
    }),
    dts()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2RvbWUvZGV2ZWwtZGV4L0ljZUNyZWFtU3dhcFVpL3BhY2thZ2VzL3Vpa2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZG9tZS9kZXZlbC1kZXgvSWNlQ3JlYW1Td2FwVWkvcGFja2FnZXMvdWlraXQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2RvbWUvZGV2ZWwtZGV4L0ljZUNyZWFtU3dhcFVpL3BhY2thZ2VzL3Vpa2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgZm9ybWF0czogW1wiY2pzXCIsIFwiZXNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKSwgLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyksIFwiY3J5cHRvXCJdLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbih7XG4gICAgICBpZGVudGlmaWVyczogXCJzaG9ydFwiLFxuICAgIH0pLFxuICAgIGR0cygpLFxuICBdLFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAcGFuY2FrZXN3YXAvdWlraXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC42My40XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZXQgb2YgVUkgY29tcG9uZW50cyBmb3IgcGFuY2FrZSBwcm9qZWN0c1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJtYWluXCI6IFwiZGlzdC9pbmRleC5janNcIixcbiAgXCJtb2R1bGVcIjogXCJkaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCJkaXN0L2luZGV4LmQudHNcIixcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCIqLmNzcy50c1wiLFxuICAgIFwic3JjL2Nzcy8qKi8qXCIsXG4gICAgXCJzcmMvdGhlbWUvKiovKlwiXG4gIF0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuL3BhY2thZ2UuanNvblwiOiBcIi4vcGFja2FnZS5qc29uXCIsXG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguY2pzXCJcbiAgICB9LFxuICAgIFwiLi9zdHlsZXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCJcbiAgICB9LFxuICAgIFwiLi9jc3MvYXRvbXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL3NyYy9jc3MvYXRvbXMudHNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvY3NzL2F0b21zLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2Nzcy9yZXNwb25zaXZlU3R5bGVcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL3NyYy9jc3MvcmVzcG9uc2l2ZVN0eWxlLnRzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2Nzcy9yZXNwb25zaXZlU3R5bGUuZC50c1wiXG4gICAgfVxuICB9LFxuICBcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcGFuY2FrZXN3YXAvcGFuY2FrZS10b29sa2l0L3RyZWUvbWFzdGVyL3BhY2thZ2VzL3BhbmNha2UtdWlraXRcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJkZXZcIjogXCJ2aXRlIGJ1aWxkIC0td2F0Y2ggLS1tb2RlIGRldmVsb3BtZW50XCIsXG4gICAgXCJzdGFydFwiOiBcInBucG0gc3Rvcnlib29rXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50ICdzcmMvKiovKi57anMsanN4LHRzLHRzeH0nXCIsXG4gICAgXCJmb3JtYXQ6Y2hlY2tcIjogXCJwcmV0dGllciAtLWNoZWNrIC0tbG9nbGV2ZWwgZXJyb3IgJ3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fSdcIixcbiAgICBcImZvcm1hdDp3cml0ZVwiOiBcInByZXR0aWVyIC0td3JpdGUgJ3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fSdcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBkZXYgLXAgNjAwNlwiLFxuICAgIFwiYnVpbGQ6c3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGJ1aWxkXCIsXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IC0tcnVuXCIsXG4gICAgXCJ1cGRhdGU6c25hcHNob3RcIjogXCJ2aXRlc3QgLXVcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwicG5wbSBydW4gcGtnOmJ1aWxkXCIsXG4gICAgXCJjbGVhblwiOiBcInJtIC1yZiAudHVyYm8gJiYgcm0gLXJmIG5vZGVfbW9kdWxlcyAmJiBybSAtcmYgZGlzdFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMjAuMTJcIixcbiAgICBcIkBiYWJlbC9wcmVzZXQtZW52XCI6IFwiXjcuMjAuMlwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1yZWFjdFwiOiBcIl43LjE4LjZcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9mYXJtc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvaG9va3NcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3Bvb2xzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9zZGtcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3N3YXAtc2RrLWNvcmVcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3Rva2VuLWxpc3RzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC90b2tlbnNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3V0aWxzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC92My1zZGtcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tanNvblwiOiBcIl40LjEuMFwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdFwiOiBcIl44LjIuMVwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tdXJsXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWExMXlcIjogXCJeNy4wLjdcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tYWN0aW9uc1wiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1lc3NlbnRpYWxzXCI6IFwiXjcuMC43XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWxpbmtzXCI6IFwiXjcuMC43XCIsXG4gICAgXCJAc3Rvcnlib29rL2J1aWxkZXItdml0ZVwiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjcuMC43XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjUuMTEuNlwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xMi4xLjNcIixcbiAgICBcIkB0eXBlcy9kM1wiOiBcIl43LjQuMFwiLFxuICAgIFwiQHR5cGVzL2pzLWNvb2tpZVwiOiBcIl4zLjAuMlwiLFxuICAgIFwiQHR5cGVzL2xvZGFzaFwiOiBcIl40LjE0LjE2OFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuMjFcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMC42XCIsXG4gICAgXCJAdHlwZXMvcmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjEuN1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjogXCJeNC40LjFcIixcbiAgICBcIkB0eXBlcy9zdHlsZWQtc3lzdGVtX19zaG91bGQtZm9yd2FyZC1wcm9wXCI6IFwiXjUuMS4yXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luXCI6IFwiXjMuOC4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIjQuMC4wXCIsXG4gICAgXCJiYWJlbC1qZXN0XCI6IFwiXjI5LjMuMVwiLFxuICAgIFwiYmFiZWwtbG9hZGVyXCI6IFwiXjkuMS4yXCIsXG4gICAgXCJiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHNcIjogXCJeMS4xMi4wXCIsXG4gICAgXCJkM1wiOiBcIl43LjguMlwiLFxuICAgIFwiamVzdFwiOiBcIjI5LjMuMVwiLFxuICAgIFwiamVzdC1lbnZpcm9ubWVudC1qc2RvbVwiOiBcIl4yOS4zLjFcIixcbiAgICBcImplc3Qtc3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNy4wLjhcIixcbiAgICBcImpzLWNvb2tpZVwiOiBcIipcIixcbiAgICBcIm5leHQtdGhlbWVzXCI6IFwiXjAuMi4xXCIsXG4gICAgXCJwb2xpc2hlZFwiOiBcIl40LjIuMlwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1jb3VudHVwXCI6IFwiXjYuNC4wXCIsXG4gICAgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI6IFwiKlwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtaXNcIjogXCJeMTcuMC4yXCIsXG4gICAgXCJyZWFjdC1tYXJrZG93blwiOiBcIl42LjAuMlwiLFxuICAgIFwicmVhY3QtcmVkdXhcIjogXCJeOC4wLjVcIixcbiAgICBcInJlYWN0LXJvdXRlci1kb21cIjogXCJeNS4yLjBcIixcbiAgICBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjogXCIqXCIsXG4gICAgXCJyZW1hcmstZ2ZtXCI6IFwiKlwiLFxuICAgIFwicm9sbHVwXCI6IFwiXjIuNzAuMVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi1ub2RlLWJ1aWx0aW5zXCI6IFwiXjIuMS4yXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJeNy4wLjdcIixcbiAgICBcInN0eWxlZC1jb21wb25lbnRzXCI6IFwiNi4wLjdcIixcbiAgICBcInRoZW1lcHJvdmlkZXItc3Rvcnlib29rXCI6IFwiXjEuNy4yXCIsXG4gICAgXCJ0cy1qZXN0XCI6IFwiXjI3LjEuM1wiLFxuICAgIFwidmllbVwiOiBcIjEuMi45XCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuMy4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMy41LjNcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4wLjNcIixcbiAgICBcInZpdGVzdFwiOiBcIl4wLjI3LjJcIixcbiAgICBcIndhZ21pXCI6IFwiXjEuMy4xMFwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAc2VudHJ5L25leHRqc1wiOiBcIl43LjUyLjFcIixcbiAgICBcImpzLWNvb2tpZVwiOiBcIipcIixcbiAgICBcIm5leHRcIjogXCIqXCIsXG4gICAgXCJuZXh0LXNlb1wiOiBcIipcIixcbiAgICBcIm5leHQtdGhlbWVzXCI6IFwiXjAuMi4xXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRldmljZS1kZXRlY3RcIjogXCIqXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1yZWR1eFwiOiBcIl44LjAuNVwiLFxuICAgIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiOiBcIipcIixcbiAgICBcInJlbWFyay1nZm1cIjogXCIqXCIsXG4gICAgXCJzdHlsZWQtY29tcG9uZW50c1wiOiBcIjYuMC43XCIsXG4gICAgXCJ2aWVtXCI6IFwiMS4yLjlcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAcGFuY2FrZXN3YXAvZmFybXNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL2hvb2tzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9sb2NhbGl6YXRpb25cIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3Bvb2xzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9zZGtcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3N3YXAtc2RrLWNvcmVcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3Rva2VuLWxpc3RzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC90b2tlbnNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3YzLXNka1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcG9wcGVyanMvY29yZVwiOiBcIl4yLjkuMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpc21pc3NhYmxlLWxheWVyXCI6IFwiXjEuMC4zXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiOiBcIl4xLjAuMFwiLFxuICAgIFwiQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcFwiOiBcIl41LjEuNVwiLFxuICAgIFwiQHR5cGVzL3N0eWxlZC1zeXN0ZW1cIjogXCJeNS4xLjE3XCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L2Nzc1wiOiBcIl4xLjEzLjBcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3QvY3NzLXV0aWxzXCI6IFwiXjAuMS4zXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3JlY2lwZXNcIjogXCJeMC41LjBcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3Qvc3ByaW5rbGVzXCI6IFwiXjEuNi4xXCIsXG4gICAgXCJiaWdudW1iZXIuanNcIjogXCJeOS4wLjBcIixcbiAgICBcImNsc3hcIjogXCJeMS4yLjFcIixcbiAgICBcImNzc3R5cGVcIjogXCJeMy4xLjJcIixcbiAgICBcImRhdGUtZm5zXCI6IFwiXjIuMjkuM1wiLFxuICAgIFwiZGVlcG1lcmdlXCI6IFwiXjQuMC4wXCIsXG4gICAgXCJmcmFtZXItbW90aW9uXCI6IFwiMTAuMTYuNFwiLFxuICAgIFwibGlnaHR3ZWlnaHQtY2hhcnRzXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJsb2Rhc2hcIjogXCJeNC4xNy4yMFwiLFxuICAgIFwicmVhY3QtcG9wcGVyXCI6IFwiXjIuMy4wXCIsXG4gICAgXCJzdHlsZWQtc3lzdGVtXCI6IFwiXjUuMS41XCIsXG4gICAgXCJ0c2xpYlwiOiBcIl4yLjIuMFwiXG4gIH0sXG4gIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJVLFNBQVMsb0JBQW9CO0FBQ3hXLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sU0FBUzs7O0FDRmhCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixNQUFRO0FBQUEsRUFDUixNQUFRO0FBQUEsRUFDUixRQUFVO0FBQUEsRUFDVixPQUFTO0FBQUEsRUFDVCxhQUFlO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1Qsa0JBQWtCO0FBQUEsSUFDbEIsS0FBSztBQUFBLE1BQ0gsUUFBVTtBQUFBLE1BQ1YsU0FBVztBQUFBLElBQ2I7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EseUJBQXlCO0FBQUEsTUFDdkIsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFjO0FBQUEsRUFDZCxTQUFXO0FBQUEsRUFDWCxTQUFXO0FBQUEsRUFDWCxTQUFXO0FBQUEsSUFDVCxPQUFTO0FBQUEsSUFDVCxLQUFPO0FBQUEsSUFDUCxPQUFTO0FBQUEsSUFDVCxNQUFRO0FBQUEsSUFDUixnQkFBZ0I7QUFBQSxJQUNoQixnQkFBZ0I7QUFBQSxJQUNoQixXQUFhO0FBQUEsSUFDYixtQkFBbUI7QUFBQSxJQUNuQixNQUFRO0FBQUEsSUFDUixtQkFBbUI7QUFBQSxJQUNuQixnQkFBa0I7QUFBQSxJQUNsQixPQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakIsZUFBZTtBQUFBLElBQ2YscUJBQXFCO0FBQUEsSUFDckIsdUJBQXVCO0FBQUEsSUFDdkIsc0JBQXNCO0FBQUEsSUFDdEIsc0JBQXNCO0FBQUEsSUFDdEIsc0JBQXNCO0FBQUEsSUFDdEIsb0JBQW9CO0FBQUEsSUFDcEIsOEJBQThCO0FBQUEsSUFDOUIsNEJBQTRCO0FBQUEsSUFDNUIsdUJBQXVCO0FBQUEsSUFDdkIsc0JBQXNCO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUEsSUFDdkIsdUJBQXVCO0FBQUEsSUFDdkIsNkJBQTZCO0FBQUEsSUFDN0Isc0JBQXNCO0FBQUEsSUFDdEIseUJBQXlCO0FBQUEsSUFDekIsNEJBQTRCO0FBQUEsSUFDNUIsK0JBQStCO0FBQUEsSUFDL0IsMEJBQTBCO0FBQUEsSUFDMUIsMkJBQTJCO0FBQUEsSUFDM0Isb0JBQW9CO0FBQUEsSUFDcEIseUJBQXlCO0FBQUEsSUFDekIsNkJBQTZCO0FBQUEsSUFDN0IsMEJBQTBCO0FBQUEsSUFDMUIsYUFBYTtBQUFBLElBQ2Isb0JBQW9CO0FBQUEsSUFDcEIsaUJBQWlCO0FBQUEsSUFDakIsZ0JBQWdCO0FBQUEsSUFDaEIsb0JBQW9CO0FBQUEsSUFDcEIsMkJBQTJCO0FBQUEsSUFDM0IsaUNBQWlDO0FBQUEsSUFDakMsNkNBQTZDO0FBQUEsSUFDN0MsZ0NBQWdDO0FBQUEsSUFDaEMsd0JBQXdCO0FBQUEsSUFDeEIsY0FBYztBQUFBLElBQ2QsZ0JBQWdCO0FBQUEsSUFDaEIsa0NBQWtDO0FBQUEsSUFDbEMsSUFBTTtBQUFBLElBQ04sTUFBUTtBQUFBLElBQ1IsMEJBQTBCO0FBQUEsSUFDMUIsMEJBQTBCO0FBQUEsSUFDMUIsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLElBQ2YsVUFBWTtBQUFBLElBQ1osT0FBUztBQUFBLElBQ1QsaUJBQWlCO0FBQUEsSUFDakIsdUJBQXVCO0FBQUEsSUFDdkIsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osa0JBQWtCO0FBQUEsSUFDbEIsZUFBZTtBQUFBLElBQ2Ysb0JBQW9CO0FBQUEsSUFDcEIsMEJBQTBCO0FBQUEsSUFDMUIsY0FBYztBQUFBLElBQ2QsUUFBVTtBQUFBLElBQ1YsK0JBQStCO0FBQUEsSUFDL0IsV0FBYTtBQUFBLElBQ2IscUJBQXFCO0FBQUEsSUFDckIsMkJBQTJCO0FBQUEsSUFDM0IsV0FBVztBQUFBLElBQ1gsTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsbUJBQW1CO0FBQUEsSUFDbkIsdUJBQXVCO0FBQUEsSUFDdkIsUUFBVTtBQUFBLElBQ1YsT0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLGtCQUFvQjtBQUFBLElBQ2xCLGtCQUFrQjtBQUFBLElBQ2xCLGFBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLGVBQWU7QUFBQSxJQUNmLE9BQVM7QUFBQSxJQUNULHVCQUF1QjtBQUFBLElBQ3ZCLGFBQWE7QUFBQSxJQUNiLGVBQWU7QUFBQSxJQUNmLDBCQUEwQjtBQUFBLElBQzFCLGNBQWM7QUFBQSxJQUNkLHFCQUFxQjtBQUFBLElBQ3JCLE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2Qsc0JBQXNCO0FBQUEsSUFDdEIsc0JBQXNCO0FBQUEsSUFDdEIsNkJBQTZCO0FBQUEsSUFDN0Isc0JBQXNCO0FBQUEsSUFDdEIsb0JBQW9CO0FBQUEsSUFDcEIsOEJBQThCO0FBQUEsSUFDOUIsNEJBQTRCO0FBQUEsSUFDNUIsdUJBQXVCO0FBQUEsSUFDdkIsdUJBQXVCO0FBQUEsSUFDdkIsa0JBQWtCO0FBQUEsSUFDbEIscUNBQXFDO0FBQUEsSUFDckMsd0JBQXdCO0FBQUEsSUFDeEIsc0NBQXNDO0FBQUEsSUFDdEMsd0JBQXdCO0FBQUEsSUFDeEIsd0JBQXdCO0FBQUEsSUFDeEIsOEJBQThCO0FBQUEsSUFDOUIsNEJBQTRCO0FBQUEsSUFDNUIsOEJBQThCO0FBQUEsSUFDOUIsZ0JBQWdCO0FBQUEsSUFDaEIsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLElBQ1osV0FBYTtBQUFBLElBQ2IsaUJBQWlCO0FBQUEsSUFDakIsc0JBQXNCO0FBQUEsSUFDdEIsUUFBVTtBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsSUFDaEIsaUJBQWlCO0FBQUEsSUFDakIsT0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLGVBQWlCO0FBQUEsSUFDZixRQUFVO0FBQUEsRUFDWjtBQUNGOzs7QURoS0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE9BQU8sSUFBSTtBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsR0FBRyxPQUFPLEtBQUssZ0JBQUksZ0JBQWdCLEdBQUcsR0FBRyxPQUFPLEtBQUssZ0JBQUksWUFBWSxHQUFHLFFBQVE7QUFBQSxJQUM3RjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLHFCQUFxQjtBQUFBLE1BQ25CLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxFQUNOO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
