export default {
  id: 'docker-compose-multiple-files',
  title: 'Managing Multiple Docker Compose Files',
  description: 'Learn how to manage multiple Docker Compose files for different environments, using extends, overrides, and best practices for organizing your Docker setup.',
  date: '2025-03-08',
  author: 'Tarik',
  categories: ['DevOps', 'Docker', 'Containers'],
  thumbnail: null,
  featured: false,
  keywords: ['docker', 'docker-compose', 'containers', 'devops', 'orchestration', 'multi-environment'],
  
  content: `
# Managing Multiple Docker Compose Files

Managing multiple Docker Compose files allows you to handle different environments (development, staging, production) and organize complex applications efficiently.

## Why Multiple Compose Files?

### Common Scenarios

1. **Different Environments**: Dev, staging, production configurations
2. **Service Variations**: Different services for different use cases
3. **Override Patterns**: Base configuration with environment-specific overrides
4. **Team Collaboration**: Shared base, personal overrides

## Method 1: Using Multiple Files with -f Flag

### Basic Usage

\`\`\`bash
# Use multiple files
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# Or shorter
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
\`\`\`

### Example Structure

\`\`\`yaml
# docker-compose.yml (base)
version: '3.8'
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    environment:
      - ENV=development

# docker-compose.prod.yml (override)
version: '3.8'
services:
  web:
    ports:
      - "443:443"
    environment:
      - ENV=production
    volumes:
      - ./ssl:/etc/nginx/ssl
\`\`\`

**Result**: Production configuration overrides base, adds SSL volumes.

## Method 2: Using extends (Deprecated but Still Works)

> [!WARNING]
> The \`extends\` keyword is deprecated in Docker Compose v3+. Use Method 1 or Method 3 instead.

\`\`\`yaml
# docker-compose.base.yml
version: '3.8'
services:
  web:
    build: .
    environment:
      - DATABASE_URL=postgres://db:5432/mydb

# docker-compose.dev.yml
version: '3.8'
services:
  web:
    extends:
      file: docker-compose.base.yml
      service: web
    volumes:
      - .:/app
    ports:
      - "3000:3000"
\`\`\`

## Method 3: Environment-Specific Files

### Project Structure

\`\`\`
project/
├── docker-compose.yml          # Base configuration
├── docker-compose.dev.yml      # Development overrides
├── docker-compose.staging.yml  # Staging overrides
├── docker-compose.prod.yml     # Production overrides
└── .env.dev                    # Development environment variables
\`\`\`

### Base Configuration

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    environment:
      - NODE_ENV=\${NODE_ENV:-development}
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=\${POSTGRES_DB:-mydb}
      - POSTGRES_USER=\${POSTGRES_USER:-user}
      - POSTGRES_PASSWORD=\${POSTGRES_PASSWORD:-password}
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
\`\`\`

### Development Overrides

\`\`\`yaml
# docker-compose.dev.yml
version: '3.8'

services:
  app:
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DEBUG=true
    command: npm run dev
  
  db:
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=mydb_dev
\`\`\`

### Production Overrides

\`\`\`yaml
# docker-compose.prod.yml
version: '3.8'

services:
  app:
    restart: always
    environment:
      - NODE_ENV=production
      - DEBUG=false
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '1'
          memory: 512M
  
  db:
    restart: always
    environment:
      - POSTGRES_DB=mydb_prod
    volumes:
      - ./backups:/backups
\`\`\`

### Usage

\`\`\`bash
# Development
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# Production
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
\`\`\`

## Method 4: Using Environment Variables

### .env Files

\`\`\`bash
# .env.dev
NODE_ENV=development
POSTGRES_DB=mydb_dev
POSTGRES_PASSWORD=dev_password

# .env.prod
NODE_ENV=production
POSTGRES_DB=mydb_prod
POSTGRES_PASSWORD=secure_password
\`\`\`

### docker-compose.yml

\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    environment:
      - NODE_ENV=\${NODE_ENV}
      - DATABASE_URL=\${DATABASE_URL}
  
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=\${POSTGRES_DB}
      - POSTGRES_PASSWORD=\${POSTGRES_PASSWORD}
\`\`\`

### Usage

\`\`\`bash
# Development
docker-compose --env-file .env.dev up

# Production
docker-compose --env-file .env.prod up -d
\`\`\`

## Complete Example: Multi-Environment Setup

### Project Structure

\`\`\`
myapp/
├── docker-compose.yml
├── docker-compose.dev.yml
├── docker-compose.test.yml
├── docker-compose.prod.yml
├── .env.example
├── .env.dev
└── .env.prod
\`\`\`

### Base Configuration

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    environment:
      - API_URL=\${API_URL}
    depends_on:
      - backend
  
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    environment:
      - DATABASE_URL=\${DATABASE_URL}
      - REDIS_URL=\${REDIS_URL}
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=\${POSTGRES_DB}
      - POSTGRES_USER=\${POSTGRES_USER}
      - POSTGRES_PASSWORD=\${POSTGRES_PASSWORD}
    volumes:
      - db_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  db_data:
  redis_data:
\`\`\`

### Development Configuration

\`\`\`yaml
# docker-compose.dev.yml
version: '3.8'

services:
  frontend:
    volumes:
      - ./frontend:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    command: npm run dev
  
  backend:
    volumes:
      - ./backend:/app
      - /app/node_modules
    ports:
      - "8000:8000"
    command: python manage.py runserver 0.0.0.0:8000
    environment:
      - DEBUG=True
  
  db:
    ports:
      - "5432:5432"
\`\`\`

### Production Configuration

\`\`\`yaml
# docker-compose.prod.yml
version: '3.8'

services:
  frontend:
    restart: always
    environment:
      - API_URL=https://api.example.com
  
  backend:
    restart: always
    environment:
      - DEBUG=False
    deploy:
      replicas: 2
      resources:
        limits:
          cpus: '1'
          memory: 512M
  
  db:
    restart: always
    volumes:
      - ./backups:/backups
\`\`\`

## Helper Scripts

### Makefile

\`\`\`makefile
.PHONY: dev up down build

dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

down:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
\`\`\`

### Shell Scripts

\`\`\`bash
#!/bin/bash
# scripts/dev.sh

docker-compose -f docker-compose.yml -f docker-compose.dev.yml "$@"
\`\`\`

\`\`\`bash
#!/bin/bash
# scripts/prod.sh

docker-compose -f docker-compose.yml -f docker-compose.prod.yml "$@"
\`\`\`

## Best Practices

### 1. Keep Base Configuration Minimal

\`\`\`yaml
# Good: Base has common configuration
services:
  app:
    build: .
    depends_on:
      - db

# Avoid: Base has environment-specific config
services:
  app:
    volumes:
      - .:/app  # This is dev-specific!
\`\`\`

### 2. Use Environment Variables

\`\`\`yaml
# Good: Use variables
environment:
  - DATABASE_URL=\${DATABASE_URL}

# Avoid: Hardcode values
environment:
  - DATABASE_URL=postgres://localhost/mydb
\`\`\`

### 3. Document Your Setup

\`\`\`markdown
# README.md

## Development
\`\`bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
\`\`

## Production
\`\`bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
\`\`
\`\`\`

### 4. Use .dockerignore

\`\`\`
# .dockerignore
node_modules
.git
.env
*.log
\`\`\`

## Common Patterns

### Pattern 1: Service-Specific Overrides

\`\`\`yaml
# docker-compose.yml
services:
  app: { ... }
  worker: { ... }

# docker-compose.dev.yml
services:
  app:
    volumes: [ ... ]  # Only override app

# docker-compose.prod.yml
services:
  worker:
    deploy:
      replicas: 5  # Only override worker
\`\`\`

### Pattern 2: Feature Flags

\`\`\`yaml
# docker-compose.yml
services:
  app: { ... }
  monitoring:
    image: prometheus/prometheus
    profiles: ["monitoring"]  # Only start with --profile

# Start with monitoring
docker-compose --profile monitoring up
\`\`\`

## Summary

**Multiple Compose Files Enable:**
- Environment-specific configurations
- Service variations
- Override patterns
- Team collaboration

**Methods:**
1. **-f flag**: Specify multiple files
2. **extends**: Deprecated but works
3. **Environment variables**: Use .env files
4. **Profiles**: Feature-based composition

> [!TIP]
> Use the \`-f\` flag method for maximum flexibility. Keep base configuration minimal and use overrides for environment-specific settings. Document your setup clearly for team members.

**Key Takeaway**: Managing multiple Docker Compose files allows you to maintain different configurations for different environments while keeping a clean, maintainable structure. Use the \`-f\` flag to combine files, and keep your base configuration minimal.
`
};

