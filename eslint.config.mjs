import nextVitalsConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitalsConfig,
  {
    rules: {
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
    },
  },
];

export default eslintConfig;
