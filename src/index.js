import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TextType from './TextType.jsx';
import './TextType.css';
import Galaxy from './Galaxy.jsx';
import './Galaxy.css';
const HeaderQuote = (
    <div className="container">
        <div className="headerquote">
            <TextType text={'Jack of all trades, skilled at some'} textColors={"black"}/>
        </div>
    </div>
);

const bento1= <div className='bento1'>
  <div className='header' style={{marginLeft:'5%'}}>About me</div>
  <div className='about'>I'm Shreya and while I have a ton of interests and hobbies, my twin passions are art and tech.
  As for art, illustration and various types of design fall under my skillset which I've honed over time.
  And as for tech, I'm currently pursuing engineering - the core of all tech. 
  While I enjoy and am continuously learning coding in different domains ,
  I also love to learn about the latest tech events, devices and feature drops,
  how the landscape of tech is evolving,
  how the world is being impacted by tech in various ways and how I can contribute to this ever evolving field.</div>
</div>;
const bento2= (<div className='bento2'>
            
            <div className='skills'><br />
    <ul>
    <h2 className='header'>Coding</h2><br />
    <h4>C</h4>
    <h4>C++</h4>
    <h4>Python</h4>
    <h4>HTML</h4>
    <h4>CSS</h4> 
    <h4>JavaScript</h4>
    <h4>React.js</h4>
    <h4>Node.js</h4>
    <h4>Electron.js</h4>
    <h4>Vibe coding</h4>
    </ul>
</div>
</div>
);
const bento3= <div className='bento3'>
   <div className='skills'><br />
  <ul>
    <h2 className='header1'>Illustration and Graphic Design</h2><br />
    <h4>Krita</h4>  
    <h4>Adobe Fresco</h4>
    <h4>Infinite painter</h4>
    <div className='indented'>
      <h4>Adobe Express</h4>
      <h4>Canva</h4>
    </div>
    </ul>
  </div>
</div>;
const bento4= <div className='bento4'>
  <div className='skills'><br />
    <ul>
      <h2 className='header1'>Socials</h2><br />
      <h4><a href='https://www.linkedin.com/in/shreya-r-0399ab2a1/'target="_blank">LinkedIn</a></h4>
      <h4><a href='https://github.com/shreya8040' target="_blank">Github</a></h4>
      <h4><a href=''>Twitter</a><h8 className="small">(yes it's still twitter)</h8></h4>
      <h4><a href=''>Instagram</a></h4>
      
      </ul>
      </div>
</div>;
const bento5= <div className='bento5'><br />
    <div className='header'style={{marginLeft:'20%'}}>Fav quote</div>
    <div className='quote'style={{marginTop:'20%'}}>❝Any sufficiently advanced technology is indistinguishable from magic✨❞</div>
</div>;
const bento6= (<div className='bento6'><br />
  <div className='header' style={{marginLeft:'10%'}}>UI/UX</div>
  <div className='skills'><br />
    <ul>
      <h4>Figma</h4>
      <h4>Wix studio</h4>
      
    </ul>
  </div>
</div>);
const bento7 = <div className='bento7'></div>;
const bento8 = <div className='bento8'>
  <div className='project'><a href="https://psa-bengaluru.vercel.app/" target="_blank" >PSA Bengaluru </a></div>
  <div className='pabout'> Transit alert app</div>
  <div className='icon'>
    
  </div>
</div>;
const bento9= <div className='bento9'>
  <div className='pfp'/>
</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Galaxy className="galaxy-container" >
      <div className="body1">
    {bento1}
    {bento2}
    {HeaderQuote}
    {bento3}
    {bento4}
    {bento5}
    {bento6}
    {bento7}
    {bento8}
    {bento9}
      </div>
    </Galaxy>
     </React.StrictMode>
);
