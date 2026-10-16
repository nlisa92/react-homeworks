export function Section() {
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

export function MainContent() {
  return (
    <main>
      <Section />
    </main>
  );
}