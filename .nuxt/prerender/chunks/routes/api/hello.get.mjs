import { defineEventHandler, getQuery } from 'file:///Users/maxi/repros/nuxthub-839/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';

const hello_get = defineEventHandler((event) => {
  const { page } = getQuery(event);
  return { message: `Hello from ${page || "home"}`, timestamp: Date.now() };
});

export { hello_get as default };
//# sourceMappingURL=hello.get.mjs.map
