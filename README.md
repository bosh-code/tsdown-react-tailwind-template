# tsdown-preact-shadcn-template

**Important notice for this template:**

shadcn/ui is not designed for Preact. To make it easy to use shadcn/ui with Preact, there are some `tsconfig.paths` set
up to alias certain React imports to their Preact counterparts, `preact/compat` and `@bosh-code/preact-slot`.

By default, when adding a new shadcn/ui component, the first import will be:

```tsx
import * as React from "react";
```

While this will work just fine, if that line is not removed before building, tsdown will include the `preact/compat`
module, which will inflate your bundle size - so make sure to remove that first import before committing your new
component.

chadcn/ui also makes use of [`radix-ui/react-slot`](https://www.npmjs.com/package/@radix-ui/react-slot) which does not
support Preact. To maintain functionality, while not requiring changes to be made to the actual chadcn/ui components, I
have created a small package[`@bosh-code/preact-slot`](https://github.com/bosh-code/preact-slot) which is a Preact
implementation of the `Slot`component from `radix-ui/react-slot`. This package has the same API as the Radix UI Slot,
and can be used as a drop-in replacement. If using `tsconfig.paths` to alias the package, no changes are needed to
the shadcn/ui components and at run/build time the Preact version will be resolved instead.

This branch already has the package pre-installed, you can see how its used in the `tsconfig.json` paths section:

```json5
{
  "compilerOptions": {
    // other options...
    "rootDir": ".",
    "paths": {
      // other paths...
      "@radix-ui/react-slot": [
        "./node_modules/@bosh-code/preact-slot"
      ]
    }
  }
}
```

Your consuming project will also need this package. If you would like to avoid using it, you can modify the shadcn/ui
components to use Preact's built-in `ComponentChildren` type and remove the `Slot`, or just remove the `Slot` entirely
if not needed.
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
