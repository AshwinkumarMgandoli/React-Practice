import './index.css'
import './App.css'
const Card = () =>
{
  return (
    <>
    <div className='card'>
    <img className='card-image' src="https://picsum.photos/200/200" ></img>
    
    <h2 className='card-title'>Ashwin</h2>
   
    <p className='card-text'>I am a nood coder.</p>
    </div>
    </>
    
  );

}




function App() {
  

  return (
   <div>

   
    < Card />
    <Card />
    
   </div>
  );
};

export default App
