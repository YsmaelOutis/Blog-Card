import './App.css'

function App() {

  return (
      <card>
        <img src="/illustration.svg" alt="" className='presentation-img'/>
        <p className='category' >Learning</p>
        <p className='published' >Published 21 Dec 2023</p>
        <h3>HTML & CSS Foundations</h3>
        <p className='text'>These languages are the backbone of every website, defining structure, content and presentation.</p>
        <div className="autor">
          <img src="profile-pic.webp" alt="" className='autor-pic'/> <p className='autor-name'>Greg Hooper</p>
        </div>
      </card> 
  )
}
export default App
