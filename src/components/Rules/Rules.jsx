import './Rules.css';

const rules = [
  {
    text: '1.1 Какое-то правило',
    punishment: 'Покарання: Аапдадплалопа',
  },
  {
    text: '1.2 Какое-то правило',
    punishment: 'Покарання: Додаткове покарання',
  },
  {
    text: '1.3 Какое-то правило',
    punishment: 'Покарання: Виговор',
  },
  {
    text: '1.4 Какое-то правило',
    punishment: 'Покарання: Тимчасове відсторонення',
  },
  {
    text: '1.5 Какое-то правило',
    punishment: 'Покарання: Заборона входу',
  }
];

export default function Rules() {
  return (
    <div className='rules__container'>
      <div className='rules__content'>
        <div className='rules--inline'>
          <a className='rules__link' href='/'>На главную</a>
          <h2 className='rules__title'>Правила</h2>
        </div>
        <div className='rules__list'>
          {rules.map((rule, index) => (
            <div className='rules__list-item' key={index}>
              <p className='rules__text'>{rule.text}</p>
              <p className='rules__punishment'>{rule.punishment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
