import { useGlobalContext } from './context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { darkMode, toggleDarkTheme } = useGlobalContext();
  return (
    <div className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        <h4>
          {darkMode ? (
            <BsFillMoonFill style={{ color: '#f0f0f0' }} />
          ) : (
            <BsFillSunFill />
          )}
        </h4>
      </button>
    </div>
  );
};

export default ThemeToggle;
