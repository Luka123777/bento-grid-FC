import './styles/main.scss';
import Image1 from "./assets/images/illustration-create-post.webp";
import Image2 from "./assets/images/illustration-five-stars.webp";
import Image3 from './assets/images/illustration-schedule-posts.webp';
import Image4 from './assets/images/illustration-ai-content.webp';
import Image5 from './assets/images/illustration-multiple-platforms.webp';
import Image6 from './assets/images/illustration-consistent-schedule.webp';
import Image7 from './assets/images/illustration-audience-growth.webp';
import Image8 from './assets/images/illustration-grow-followers.webp';


function App() {

  return (
    <div className="content">
      <div className="gridContent">
        <div className="grid1">
          <h1>Create and schedule content <span>quicker.</span></h1>
          <img className='image' src={Image1} alt="create post" />
        </div>
        <div className="grid2">
          <h1>Social Media <span>x10</span> <span className="span1">Faster with AI</span></h1>
          <img src={Image2} alt="fve stars" />
          <p>Over 4,000 5-star reviews</p>
        </div>
        <div className="grid3">
          <h1>Shechule to social media.</h1>
          <img src={Image3} alt="" />
          <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
        <div className="grid4">
          <h1>White your content using AI.</h1>
          <img src={Image4} alt="" />
        </div>
        <div className="grid5">
          <img src={Image5} alt="" />
          <h1>Manage multiple accounts and platforms.</h1>
        </div>
        <div className="grid6">
          <h1>Maintain a consistent posting schedule.</h1>
          <img src={Image6} alt="" />
        </div>
        <div className="grid7">
          <h1> {'>56%'}</h1>
          <p>faster audience growth</p>
          <img src={Image7} alt="" />
        </div>
        <div className="grid8">
          <img src={Image8} alt="" />
          <h1>Grow followers with non-stop content.</h1>
        </div>
      </div>
    </div>
  )
}

export default App
