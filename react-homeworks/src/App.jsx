import Header from './components/Header';
import Footer from './components/Footer';
import { MainContent } from './components/Content';


function Header() {
  return (
    <header>
      <h1>Мой учебный проект React</h1>
    </header>
  );
}

function Section() {
  return (
    <section>
      <h2>О проекте</h2>
      <p>
        Это мой учебный проект, в котором я изучаю React и создание
        компонентов.
      </p>
      <p>
        Я учусь создавать структуру страницы с помощью JSX и семантических
        HTML-элементов.
      </p>
    </section>
  );
}

function MainContent() {
  return (
    <main>
      <Section />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Мой учебный проект</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  
export default App;

