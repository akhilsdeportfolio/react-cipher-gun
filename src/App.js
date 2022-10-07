import logo from './logo.svg';
import './App.css';
import { ProfileFilled} from '@ant-design/icons';
import ReButton from './components/atoms/ReButton';

function App() {
  return (
    <div className="App">
      <ReButton type="primary" onClick={() => console.log( 'clicked' )} text="this is sample text" isLoading={false} icon={<P~rofileFilled />} style={{ margin: '20px' }} size="large" shape="round" />
      <ReButton type="danger" onClick={() => console.log( 'clicked' )} text="this is sample text" isLoading={false} icon={<ProfileFilled />} style={{margin:'20px'}} size="large" shape="round"/>
    </div>
  );
}

export default App;
