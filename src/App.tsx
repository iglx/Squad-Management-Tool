import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Content } from "./components/Content/Content";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/create-your-team" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
