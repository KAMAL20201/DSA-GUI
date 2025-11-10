# DSA GUI

An interactive Data Structures & Algorithms learning platform with beautiful visualizations.

## Features

- **Interactive Visualizations**: Watch data structures and algorithms come to life
- **Step-by-Step Execution**: Control the pace with play, pause, and step controls
- **Code Synchronization**: See code execute in real-time with visual representations
- **Multiple Languages**: Support for Python, Java, C++, and JavaScript
- **Dark/Light Theme**: Choose your preferred theme
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Visualizations**: D3.js + React Flow
- **Icons**: Lucide React
- **Styling**: CSS Modules with CSS Variables

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd DSA-GUI
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
DSA-GUI/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── common/      # Common UI components
│   │   ├── visualizations/  # Visualization components
│   │   └── controls/    # Control components
│   ├── pages/           # Page components
│   │   ├── Home/
│   │   ├── DataStructures/
│   │   ├── Algorithms/
│   │   ├── Playground/
│   │   └── About/
│   ├── layouts/         # Layout components
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript types
│   ├── styles/          # Global styles
│   ├── assets/          # Images, fonts, etc.
│   ├── services/        # API services
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Roadmap

### Phase 1: Core Infrastructure ✅
- [x] Project setup with React + TypeScript + Vite
- [x] Routing setup
- [x] Basic UI components
- [x] Theme system (dark/light mode)

### Phase 2: Data Structures (In Progress)
- [ ] Array visualization
- [ ] Linked List visualization
- [ ] Stack visualization
- [ ] Queue visualization
- [ ] Binary Tree visualization
- [ ] Graph visualization
- [ ] Hash Table visualization
- [ ] Heap visualization

### Phase 3: Algorithms
- [ ] Sorting algorithms (Bubble, Quick, Merge, etc.)
- [ ] Search algorithms (Linear, Binary)
- [ ] Graph algorithms (BFS, DFS, Dijkstra's)
- [ ] Tree traversals
- [ ] Dynamic Programming visualizations

### Phase 4: Advanced Features
- [ ] Interactive playground
- [ ] Code editor integration
- [ ] User authentication
- [ ] Progress tracking
- [ ] Practice problems
- [ ] Performance analytics

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for learning and teaching purposes.

## Acknowledgments

Built with love for engineers learning DSA ❤️
