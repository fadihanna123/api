# API

A modern, TypeScript-based REST API built with Express.js, featuring Swagger documentation, automated testing, and Docker support.

# Demo
[API](https://api-lqzfm.sevalla.app/api/users)

## Features

- 🚀 Built with Express.js and TypeScript
- 📚 Swagger/OpenAPI documentation
- 🛡️ Security features with Helmet
- 📝 Logging with Winston
- ⏰ Scheduled tasks with node-cron
- 📅 Date handling with Luxon
- 🐳 Docker support
- 🧪 Testing with Vitest
- ✨ Code formatting with Prettier
- 🔍 Linting with ESLint
- 🐶 Git hooks with Husky

## Prerequisites

- Node.js >= 16.0.0
- Yarn (recommended) or npm
- Docker (optional)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/fadihanna123/api.git
cd api
```

2. Install dependencies:
```bash
yarn install
```

## Development

Start the development server:
```bash
yarn dev
```

The API will be available at `https://localhost:5000`

## Available Scripts

- `yarn dev` - Start development server
- `yarn start` - Start production server
- `yarn build` - Build the application
- `yarn test` - Run tests
- `yarn lint` - Run linter
- `yarn format` - Format code
- `yarn type-check` - Type checking
- `yarn ci` - Run CI checks (build, lint, test)

## Docker Support

Build and run with Docker:
```bash
docker-compose up
```

## API Documentation

Once the server is running, access the Swagger documentation at:
```
https://localhost:5000/api-docs
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Fadi Hanna** - [GitHub](https://github.com/fadihanna123)
