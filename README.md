# ReactJS-Fetch-Joke-RestAPI

A small React app that fetches a joke from a public REST API and shows it, with a loading state while the request is in flight.

## How it works

- `useEffect` fires a `fetch` to `https://icanhazdadjoke.com/` on mount, asking for JSON via the `Accept` header
- The response is held in state and rendered; a failed response renders an error message instead of throwing
- A spinner from `react-loader-spinner` shows while the request is pending

## Stack

React 18 · Vite · Tailwind CSS · react-loader-spinner

## Running

```bash
npm install
npm run dev
```

Serves on `http://localhost:5173`; `npm run build` writes the production bundle.

## Notes

Written to practise the request lifecycle — loading, success and error — rather than as a joke app. The API call sits directly in `src/App.jsx`, with no data layer.
