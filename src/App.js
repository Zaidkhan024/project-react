// import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import ZaidComp from './components/ZaidComp';
import MyStateComp from './components/MyStateComp';
import MethodAndEventComp from './components/MethodAndEventComp';
import CounterComp from './components/CounterComp';
import CssComp from './components/CssComp';
import ConditionRenComp from './components/ConditionRenComp';
import MultimediaComp from './components/MultimediaComp';
import ParentComp from './components/ParentComp';
import ChildComp from './components/ChildComp';
import VirtualDOMComp from './components/VirtualDOMComp';
import MyCrousalComp from './components/MyCrousalComp';
import ClickCounterComp from './components/ClickCounterComp';
import HoverCounterComp from './components/HoverCounterComp';
import HocComp from './components/HocComp';
import EmpDataComp from './task/EmpDataComp';
import UserComp from './components/UserComp';
import ErrorBoundary from './components/ErrorBoundary';
import ClassCompLifeCycle from './components/ClassCompLifeCycle';
import UseStateHook from './hooks/UseStateHook';
import UseEffectHook from './hooks/UseEffectHook';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ZAID KHAN - VERSATILE DEVELOPER
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <hr/>
      <h1 className='text-success'>REACT SESSION ME APKA SWAGAT HAI</h1>
      {/* <hr/> */}
      {/* <FuncComp fname="ZAID KHAN" post="OWNER OF THNKSSSS INFOTECH"></FuncComp>*/}
      {/* <hr/> */}
      {/* <ZaidComp></ZaidComp> */}
      {/* <ClassComp fname="ADITYA BHAWSAR" post="OWNER OF THNKSSSS INFOTECH"/> */}
      {/* <hr/> */}
      {/* <MyStateComp/> */}
      {/* <hr/> */}
      {/* <MethodAndEventComp/> */}
      {/* <hr/> */}
      {/* <CounterComp Institute="INFOWAY CDAC" Address="KOTHRUD, PUNE"/> */}
      {/* <hr/> */}
      {/* <CssComp /> */}
      {/* <hr/> */}
      {/* <ConditionRenComp/> */}
      {/* <hr/> */}
      {/* <MultimediaComp/> */}
      {/* <hr/> */}
      {/* <ParentComp/> */}
      {/* <hr/> */}
      {/* <ChildComp/> */}
      {/* <hr/> */}
      {/* <VirtualDOMComp/>
      <hr/>
      <MyCrousalComp/> */}
      {/* <hr/> */}
      {/* <ClickCounterComp/> */}
      {/* <hr/> */}
      {/* <HoverCounterComp/> */}
      {/* <hr/> */}
      {/* <hr/> */}
      {/* <EmpDataComp/> */}
      {/* <hr/> */}
      {/* <ErrorBoundary>
      <UserComp Uname = "ZAID"/>  
      </ErrorBoundary>
      <ErrorBoundary>
      <UserComp Uname = "JUNAID"/>  
      </ErrorBoundary>
      <ErrorBoundary>
      <UserComp Uname = "ADITYA"/>  
      </ErrorBoundary>
      <ErrorBoundary>
      <UserComp Uname = "AMAN"/>  
      </ErrorBoundary> */}
      {/* <hr/>
      <ClassCompLifeCycle myColor="GREEN"></ClassCompLifeCycle>
      <hr/> */}
      <hr/>
      <UseStateHook/>
      <hr/>
      <UseEffectHook/>
      <hr/>
    </div>
  );
}

export default App;
