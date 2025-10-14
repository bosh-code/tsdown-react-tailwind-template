# tsdown-react-tailwind-template

This is a template for building React component libraries that are styled with TailwindCSS and bundled with tsdown. For
more information on the tooling, or to follow a guide on setting this up yourself, check out
my [article](https://bosher.co.nz).

## Features

- React 19
- Fast and tiny builds thanks to tsdown
- Optional Preact branch
- TailwindCSS 4
- Optional DaisyUI branch
- ESLint and prettier pre-configured
- Vitest for unit tests
- GitHub actions for testing and releasing

## Using this template

To use this template, click the "Use this template" button above, or run the following command:

```bash
pnpm dlx degit bosh-code/tsdown-react-tailwind-template my-react-library
cd my-react-library

# or for Preact, etc...
pnpm dlx degit bosh-code/tsdown-react-tailwind-template#templates/preact my-preact-library
cd my-preact-library
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
