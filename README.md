# tsdown-preact-shadcn-template

**Special notice for this template:**

shadcn/ui is not designed for Preact. To make it easy to use shadcn/ui with Preact, there are some `tsconfig.paths` set
up to alias certain React imports to their Preact counterparts or `preact/compat`.

By default, when adding a new shadcn/ui component, the first import will be:

```tsx
import * as React from "react";
```

While this will work just fine, if that line is not removed before building, tsdown will include the `preact/compat`
module, which will inflate your bundle size - so make sure to remove that first import before committing your new
component.

___

This is a template for building Preact component libraries, using shadcn/ui components and styled with TailwindCSS and
bundled with tsdown. For more information on the tooling, or to follow a guide on setting this up yourself, check out
my [article](https://bosher.co.nz).

## Features

- Preact 10
- shadcn/ui
- Fast and tiny builds thanks to tsdown
- TailwindCSS 4
- ESLint and prettier pre-configured
- Vitest for unit tests
- GitHub actions for testing and releasing

## Using this template

To use this template, click the "Use this template" button above, or run the following command:

```bash
pnpm dlx degit bosh-code/tsdown-react-tailwind-template/preact-shadcn my-library
cd my-library
```

## Development

- Install dependencies:

```bash
pnpm install
```

- Run the playground:

```bash
pnpm playground
```

- Build the library:

```bash
pnpm build
```

- Build in watch mode:

```bash
pnpm dev
```

- Run the unit tests:

```bash
pnpm test
```
