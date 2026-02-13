# nuxthub/core#839 — `_payload.json` returns HTML on CF Pages

`payloadExtraction: true` + `ssr: false` + `cloudflare-pages` preset → `_payload.json` URLs serve `text/html` instead of `application/json`.

**Live repro**: https://nuxthub-839.pages.dev

```bash
curl -I https://nuxthub-839.pages.dev/_payload.json
# content-type: text/html;charset=utf-8  ← wrong

curl -I https://nuxthub-839.pages.dev/about/_payload.json
# content-type: text/html;charset=utf-8  ← wrong
```

No `_payload.json` files are generated during build, so CF Pages serves the SPA fallback HTML.
