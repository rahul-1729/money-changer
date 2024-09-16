
import './App.css';
 




function App() {
  return (
       <div className="h-screen w-screen bg-[url('./assets/download.jpg')] flex justify-center items-center">

        <div className='w-full h-3/5 sm:w-4/5 md:w-3/5 bg-gray-400/50 rounded-3xl border-2 border-white  shadow-xl shadow-white flex flex-col p-2 gap-5 items-center justify-center'>

        
        <div className='h-1/3 w-full sm:w-4/5 bg-white rounded-xl relative '>
             <div  className=' absolute h-14 w-20  rounded-md border-2 border-white left-1/2 -bottom-16 bg-blue-700 transform -translate-x-1/2 -translate-y-1/2 '>
             <button className='text-white h-full w-full hover:bg-blue-600 rounded-md flex justify-center items-center'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>

              </button></div>

        </div>
        <div className='h-1/3 w-full sm:w-4/5 bg-white rounded-xl '>
     
        </div>
         
         <div className='h-1/5 w-full sm:w-4/5 rounded-xl flex justify-center items-center'><button className='shadow-sm shadow-white w-full h-full bg-blue-700 border border-white rounded-xl text-white text-4xl font-thin hover:bg-blue-600 text-black'>Convert</button></div>
          
        </div>
       </div>
  );
}

export default App;
