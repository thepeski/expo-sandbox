/* babel.config.js */

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        "@components": "./src/components",
                        "@constants": "./src/constants",
                        "@contexts": "./src/contexts",
                        "@hooks": "./src/hooks",
                        "@services": "./src/services",
                        "@utils": "./src/utils"
                    }
                }
            ]
        ]
    };
};