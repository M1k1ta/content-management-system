import { NavLink } from 'react-router-dom';
import { Tab } from '../../types/tab';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
}

export const Header: React.FC<Props> = ({ tabs }) => {
  return (
    <header className='header'>
      <nav className='header__nav nav'>
        <ul className='nav__list'>
          {tabs.map(({ id, title }) => (
            <li className='nav__item' key={id}>
              <NavLink
                className={({ isActive }) => classNames('nav__link',
                  { 'nav__link--active': isActive })}
                to={`/${id}`}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
