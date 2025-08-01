# Environment Configuration

## Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update the values in `.env.local` according to your environment.

## Environment Variables

### `NEXT_PUBLIC_API_BASE_URL`
- **Description**: Base URL for the backend API
- **Default**: `http://localhost:5000`
- **Development**: `http://localhost:5000`
- **Production**: Update this to your production backend URL (e.g., `https://api.tulungrejo.com`)

## Deployment

When deploying to production (Vercel, Netlify, etc.), make sure to set the environment variable `NEXT_PUBLIC_API_BASE_URL` to your production backend URL.

### Example for different environments:

- **Local Development**: `http://localhost:5000`
- **Staging**: `https://api-staging.tulungrejo.com`
- **Production**: `https://api.tulungrejo.com`

## API Endpoints

The application expects the backend to provide the following endpoints:

- `GET /api/links` - Get all links
- `GET /api/links/:id` - Get a specific link
- `POST /api/links` - Create a new link
- `PUT /api/links/:id` - Update a link
- `DELETE /api/links/:id` - Delete a link

## Data Structure

Expected response format for links:

```json
[
  {
    "_id": "string",
    "title": "string",
    "url": "string",
    "category": "string",
    "image": "string (optional)"
  }
]
```
