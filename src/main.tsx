import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./sections/About";
import Style from "./sections/Style";
import Inspiration from "./sections/Inspiration";
import BookingForm from "./components/BookingForm";
import Footer from "./sections/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <About></About>
    <Style></Style>
    <Inspiration></Inspiration>
    <BookingForm></BookingForm>
    <Footer></Footer>
  </StrictMode>,
);
