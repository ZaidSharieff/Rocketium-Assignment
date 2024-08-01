# Rocketium Internship Assigment

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ZaidSharieff/Rocketium-Assignment.git
   cd Rocketium-Assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
3. Start the server:
   ```bash
   npm start
   ```

## API Documentation

### GET /api/data

**Query Parameters:**
- `filterBy`: The field to filter by.
- `filterValue`: The value to filter.
- `sortBy`: The field to sort by.

**Example:**
```bash
curl "http://localhost:3000/api/data?filterBy=language&filterValue=Sindhi&sortBy=version"
```

## Postman Documentation

https://www.postman.com/payload-astronaut-42506396/workspace/rocketium-assignment/collection/35043396-6b55c4df-f45e-4793-920d-9cbbc6c0d5df?action=share&creator=35043396
