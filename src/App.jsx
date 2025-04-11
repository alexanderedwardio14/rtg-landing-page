import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <footer className="bg-background border-t mt-12">
            <div className="container py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">
                    Raja Terakhir Group
                  </h3>
                  <p className="text-muted-foreground">
                    Transforming businesses through innovation and excellence.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Contact Info</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Email: info@rtg.com</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Address: 123 Business Street</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
                <p>
                  &copy; {new Date().getFullYear()} Raja Terakhir Group. All
                  rights reserved.
                </p>
              </div>
            </div>
          </footer>
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
