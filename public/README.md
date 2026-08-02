# Public Assets

This folder contains static assets that are served directly.

## PDF.js Worker

The `pdf.worker.min.mjs` file is required for PDF rendering in the Reading Library.

### Updating the Worker

If you update the `pdfjs-dist` package, you need to copy the new worker file:

```bash
cp node_modules/pdfjs-dist/build/pdf.worker.min.mjs public/pdf.worker.min.mjs
```

This ensures the worker version matches the `pdfjs-dist` version used in the app.

