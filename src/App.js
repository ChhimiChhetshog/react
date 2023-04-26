import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Todo from "./pages/Todo";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
