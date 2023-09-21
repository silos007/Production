
import './App.css';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className=" h-full">
      <div className='wrapper-app lg:min-w-[1024px] border md:max-w-[786px] lg:max-w-[1024px] mx-auto'>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
