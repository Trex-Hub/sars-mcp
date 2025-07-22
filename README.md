# SARS MCP Server

A Model Context Protocol (MCP) server for SARS - AI Space helper and assistant

## Prerequisites

- Node.js (see `.nvmrc` for version)
- pnpm (recommended) or npm

## Setup

1. Clone the repository

```bash
git clone <repository-url>
cd sars-mcp
```

2. Install dependencies

```bash
pnpm install
# or
npm install
```

3. Set up environment variables

```bash
cp .env.example .env
```

## Development

Start the development server with auto-reload:

```bash
pnpm dev
# or
npm run dev
```

## Build

Build the project:

```bash
pnpm build
# or
npm run build
```

## Usage

Start the server:

```bash
pnpm start
# or
npm start
```

To test MCP tools locally, run:

```bash
npx @modelcontextprotocol/inspector

## Available Tools

1. **search_all_products**
   - **Title**: Search All Products
   - **Description**: Search for all products available.

2. **search_in_product**
   - **Title**: Perform a search within a product.
   - **Description**: Search within a specific product.

3. **search_in_product_details**
   - **Title**: Perform a search within a product chunks.
   - **Description**: Search within the chunks of a specific product by SKU and partner Id.

## License

ISC
