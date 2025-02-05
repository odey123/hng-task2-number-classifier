# Number Classifier API

This is a simple Express.js API that classifies numbers based on various mathematical properties such as prime, perfect, Armstrong, parity (even/odd), and digit sum. It also fetches a fun fact about the number using the Numbers API.

## Features

- Check if a number is **prime**
- Check if a number is **perfect**
- Check if a number is an **Armstrong number**
- Determine if a number is **even** or **odd**
- Calculate the **sum of digits**
- Fetch a **fun fact** about the number from Numbers API

## Technologies Used

- **Node.js**
- **Express.js**
- **Axios** for HTTP requests
- **CORS** for cross-origin resource sharing

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

## API Endpoint

### `GET /api/classify-number`

#### Query Parameters:

- `number` (required): The number you want to classify.

#### Example Request:

```bash
GET http://localhost:3000/api/classify-number?number=28
```

#### Example Response:

```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is the second perfect number after 6."
}
```

#### Error Response:

If an invalid number is provided:

```json
{
  "number": "abc",
  "error": true
}
```

## Project Structure

```
.
├── server.js         # Main application file
├── package.json      # Project dependencies
```

## Notes

- Ensure you have an active internet connection to fetch fun facts from the Numbers API.
- The API handles basic validation for numeric input.

## License

This project is for educational purposes and is open-source.

