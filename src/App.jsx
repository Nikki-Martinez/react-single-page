import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}