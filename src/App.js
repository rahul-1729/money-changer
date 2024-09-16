
import './App.css';
import Block from "./components/Block"




function App() {
  return (
       <div className="h-screen w-screen bg-[url('./assets/download.jpg')] flex justify-center items-center">

        <div className='w-full h-3/5 sm:w-2/5 bg-gray-400/50 rounded-3xl border-2 border-white  shadow-xl shadow-white flex flex-col p-2 gap-5 items-center justify-center'>
          <Block/>
          <Block/>
         <div className='h-1/5 w-4/5  rounded-xl flex justify-center items-center'><button className='w-full h-full bg-blue-700 rounded-xl text-white text-4xl font-thin hover:bg-blue-600 text-black'>Convert</button></div>
          
        </div>
       </div>
  );
}

export default App;
