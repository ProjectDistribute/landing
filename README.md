# Distribute

**Stop renting your music.**

Distribute is an offline-first streaming music app that connects to your home server. It facilitates cross-syncing between servers to expand your library without relying on third-party cloud services. Designed with privacy and ownership in mind, Distribute allows you to truly own your music collection.

![Distribute App Logo](public/app.png)

## Features

- **Offline-First Architecture**: Your music is always available, even without an internet connection.
- **Home Server Connectivity**: Seamlessly connect to your self-hosted music server.
- **Library Synchronization**: Cross-sync multiple servers to unify and expand your music library.
- **Privacy Focused**: We collect no user data. You own your data and your music.
- **Premium Experience**: A slick, responsive user interface with buttery smooth animations and transitions.

## Tech Stack

This project is built using the following modern web technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Physics Engine**: [Matter.js](https://brm.io/matter-js/) (for interactive vinyl animations)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sourcelocation/distribute.git
    cd distribute/web
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```bash
web/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── ui/          # Reusable UI components (buttons, badges)
│   │   └── ...          # Feature-specific components (VinylAnimation, etc.)
│   └── lib/             # Utility functions
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## Community & Support

- **Discord**: Join our community on [Discord](https://discord.gg/X2sZKXhxJj) for discussions and support.
- **Documentation**: Read the full documentation at [distribute-docs.sourceloc.net](https://distribute-docs.sourceloc.net/docs).
- **Updates**: Follow [@sourceloc](https://twitter.com/sourceloc) on Twitter.

## License

Distributed under the MIT License. See `LICENSE` for more information.

```text
MIT License

Copyright (c) 2026 sourcelocation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
