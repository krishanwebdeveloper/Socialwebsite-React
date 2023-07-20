
import './App.css';
import { useState } from 'react';


function App() {

  const [val, setval] = useState("");
  const [Todo, setTodo] = useState([]);


  function data(e) {
    setval(e.target.value);

  }




  function output() {
    setTodo([...Todo, { id: Todo.length, Text: val }])
    setval("")
  }




  function dele(id) {
    const deldata = Todo.filter((td) => td.id !== id);
    setTodo(deldata);

  }



  console.log(val)
  console.log(Todo)




  // drt



  const [val1, setval1] = useState("");
  const [Todo1, setTodo1] = useState([]);


  function data1(e) {
    setval1(e.target.value);

  }




  function output1() {
    setTodo1([...Todo1, { id1: Todo1.length, Text: val1 }])
setval("")
  }




  function dele1(id1) {
    const deldata1 = Todo1.filter((td1) => td1.id1 !== id1);
    setTodo1(deldata1);

  }



  console.log(val1)
  console.log(Todo1)




  // ftgyh


  const [val2, setval2] = useState("");
  const [Todo2, setTodo2] = useState([]);


  function data2(e) {
    setval2(e.target.value);

  }




  function output2() {
    setTodo2([...Todo2, { id2: Todo2.length, Text: val2 }])
    setval("")
  }




  function dele2(id2) {
    const deldata2 = Todo2.filter((td2) => td2.id2 !== id2);
    setTodo2(deldata2);

  }



  console.log(val2)
  console.log(Todo2)




  // rtyt

  const [val3, setval3] = useState("");
  const [Todo3, setTodo3] = useState([]);


  function data3(e) {
    setval3(e.target.value);
    setval("")
  }




  function output3() {
    setTodo3([...Todo3, { id3: Todo3.length, Text: val3 }])

  }




  function dele3(id3) {
    const deldata3 = Todo3.filter((td3) => td3.id3 !== id3);
    setTodo3(deldata3);

  }



  console.log(val3)
  console.log(Todo3)








  return (
    <div className="App">

      <div>
<ul className='headflex'>
  <li><img className='pic1' src={require("./images/26373101_4 1.png")}></img></li>
  <li><input className='inputing' type='text' placeholder='search'></input></li>
  <li><img className='contactadd' src={require("./images/round-play-video-player-blue-icon-free-png-11639592297tehyokw8gt-removebg-preview.png")}></img></li>
  <li><img className='contactadd' src={require("./images/images-removebg-preview.png")}></img></li>
  <li><img className='contactadd' src={require("./images/blue-notification-bell-icon-png-img-11638985034lcbypudcig-removebg-preview.png")}></img></li>
  <li><img className='contactadd' src={require("./images/unnamed-removebg-preview.png")}></img></li>
  <li><img className='contactadd' src={require("./images/75-758282_walter-circle-person-photo-in-circle-hd-png-removebg-preview.png")}></img></li>
 
 
</ul>


      </div>

      <div className='colors'>
        <div>
          
        </div>
        <div className='flex'>
          <img className='pic2' src={require("./images/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail-removebg-preview.png")}></img>
          <h1 className='home'>Home</h1>
        </div>
        <div className='flex'>
          <img className='pic3' src={require("./images/download__3_-removebg-preview.png")}></img>
          <h1 className='search'>Search</h1>
        </div>
        <div className='flex'>
          <img className='pic4' src={require("./images/4136038-removebg-preview.png")}></img>
          <h1 className='explore'>Explore</h1>
        </div>
        <div className='flex'>
          <img className='pic2s' src={require("./images/500_F_369541891_2jsuyQECjhPFIbOGDbcuA1z5LnCR1Ysu-removebg-preview.png")}></img>
          <h1 className='reels'>Reels</h1>
        </div>
        <div className='flex'>
          <img className='pic5' src={require("./images/150-1509062_transparent-text-message-icon-png-message-icon-png-removebg-preview.png")}></img>
          <h1 className='message'>Message</h1>
        </div>
        <div className='flex'>
          <img className='pic6' src={require("./images/free-notifications-bell-outline-icon-png-11640343342qgstki55ep-removebg-preview.png")}></img>
          <h1 className='notification'>Notification</h1>
        </div>
        <div className='flex'>
          <img className='pic7' src={require("./images/download__4_-removebg-preview.png")}></img>
          <h1 className='create'>Create</h1>
        </div>
        <div className='flex'>
          <img className='pic8' src={require("./images/download__5_-removebg-preview.png")}></img>
          <h1 className='profile'>Profile</h1>
        </div>

      
      <div className='vertical'></div>
      </div>

      <div>
        <div className='cir'>
          <h1 className='stories' >+Stories</h1>

          <div className='fleximage'>
            <img className='pic9' src={require("./images/smiley-woman-posing-her-baggage.jpg")}></img>
            <img className='pic9' src={require("./images/portrait-young-bearded-hipster-man-looking-camera-taking-selfie-against-yellow.jpg")}></img>

            <img className='pic9' src={require("./images/young-man-traveling-around-world.jpg")}></img>
            <img className='pic9' src={require("./images/selfie-time.jpg")}></img>
            <img className='pic9' src={require("./images/portrait-beautiful-woman-taking-selfie.jpg")}></img>
            <img className='pic9' src={require("./images/smiley-woman-posing-her-baggage.jpg")}></img>
            <img className='pic9' src={require("./images/woman-taking-selfie.jpg")}></img>

          </div>

        </div>


        {/* <input className='searchbox' type='text' placeholder='search'></input> */}













        <div id="carouselExampleAutoplaying" class="carousel slide aaaa" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <iframe width="750" height="350" src="https://www.youtube.com/embed/FVvUiMTYXJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


              <div class="carousel d-none d-md-block akm">
                <p className='pragraph'>MUTTON BIRYANI | Layered Mutton Biryani Recipe Cooking In Village | Goat Biryani Cooking & Eating</p>
                <div className='flexing'>
                  <div><p>5M views</p></div>
                  <div><img className='pics' src={require("./images/desktop-wallpaper-youtube-like-icon-png-removebg-preview.png")}></img> 490k</div>
                </div>
                <div className='flexl'>
                  <div>
                    <img className='ify' src={require("./images/219983-removebg-preview.png")}></img>
                  </div>
                  <div>
                    <input className='sdds' type='text' onChange={data} value={val} ></input>
                    <button className='submit' onClick={output}>submit</button>

                  </div>
                </div>
                <div>
                  {
                    Todo.map((inputval) =>
                      <div>
                        {console.log("dsfsa", inputval)}
                        <div>
                          <h2 className='txt'>{inputval.Text}</h2>
                          <h2 className='delete' onClick={() => dele(inputval.id)}>Delete</h2>
                        </div>
                      </div>)
                  }
                </div>
              </div>





            </div>
            <div class="carousel-item">

              <iframe width="750" height="350" src="https://www.youtube.com/embed/k-m5eT1cxX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div class="carousel d-none d-md-block">
                <p>My Wedding Dance Entry - Bride Dance #bridedance #tamilwedding #entrydance</p>
                <div className='flexing'>
                  <div><p>4M views</p></div>
                  <div><img className='pics' src={require("./images/desktop-wallpaper-youtube-like-icon-png-removebg-preview.png")}></img> 350k</div>
                </div>

                <div className='flexl'>
                  <div>
                    <img className='ify' src={require("./images/219983-removebg-preview.png")}></img>
                  </div>
                  <div>
                    <input className='sdds' type='text' onChange={data1} value={val} ></input>
                    <button className='submit' onClick={output1}>submit</button>

                  </div>
                </div>

                <div>
                  {
                    Todo1.map((inputval1) =>
                      <div>
                        {console.log("dsfsa", inputval1)}
                        <div>
                          <h2 className='txt'>{inputval1.Text}</h2>
                          <h2 className='delete' onClick={() => dele1(inputval1.id1)}>Delete</h2>
                        </div>
                      </div>)
                  }
                </div>
              </div>

            </div>
            <div class="carousel-item">

              <iframe width="750" height="350" src="https://www.youtube.com/embed/Bsj8btRiKuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div class="carousel d-none d-md-block">
                <p>VRINDHARJUN Viral Wedding Dance Video | Vrindha and Anuprasad Wedding</p>
                <div className='flexing'>
                  <div><p>10M views</p></div>
                  <div><img className='pics' src={require("./images/desktop-wallpaper-youtube-like-icon-png-removebg-preview.png")}></img> 340k</div>
                </div>

                <div className='flexl'>
                  <div>
                    <img className='ify' src={require("./images/219983-removebg-preview.png")}></img>
                  </div>
                  <div>
                    <input className='sdds' type='text' onChange={data2} value={val}></input>
                    <button className='submit' onClick={output2}>submit</button>

                  </div>
                </div>
                <div>
                  {
                    Todo2.map((inputval2) =>
                      <div>
                        {console.log("dsfsa", inputval2)}
                        <div>
                          <h2 className='txt'>{inputval2.Text}</h2>
                          <h2 className='delete' onClick={() => dele2(inputval2.id2)}>Delete</h2>
                        </div>
                      </div>)
                  }
                </div>
              </div>

            </div>
            <div class="carousel-item">

              <iframe width="750" height="350" src="https://www.youtube.com/embed/W9GHrXmdm0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div class="carousel d-none d-md-block">
                <p>ONAM CELEBRATION at FISAT COLLEGE | GIRLS FLASHMOB | KERALA TRADITION</p>
                <div className='flexing'>
                  <div><p>6M views</p></div>
                  <div><img className='pics' src={require("./images/desktop-wallpaper-youtube-like-icon-png-removebg-preview.png")}></img> 870k</div>
                </div>

                <div className='flexl'>
                  <div>
                    <img className='ify' src={require("./images/219983-removebg-preview.png")}></img>
                  </div>
                  <div>
                    <input className='sdds' type='text' onChange={data3} value={val}></input>
                    <button className='submit' onClick={output3}>submit</button>
                  </div>
                </div>
                <div>
                  {
                    Todo3.map((inputval3) =>
                      <div>
                        {console.log("dsfsa", inputval3)}
                        <div>
                          <h2 className='txt'>{inputval3.Text}</h2>
                          <h2 className='delete' onClick={() => dele3(inputval3.id3)}>Delete</h2>
                        </div>
                      </div>)
                  }
                </div>
              </div>


            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


      </div>


        {/* <div className='vertical1'></div> */}

        <div className='coloring'>

        <h1 className='sponser'>Sponsored</h1>

        <div>
          <div className='flexdeal'>
            <div>
              <img className='gif' src={require("./images/rickie-fowler-thumbs-up.gif")}></img>
            </div>
            <div>
              <p className='gpara'>    How to Get Brand Deals & <br></br> Sponsorships<br></br> (For Small Channels)</p>
            </div>
          </div>

          <div className='flexdeal1'>
            <div>
              <img className='gif' src={require("./images/mcg-mcconaughey.gif")}></img>
            </div>
            <div>
              <p className='gpara'>How to Ask for Sponsorship:<br></br> Five Questions for the<br></br> First Meeting</p>
            </div>
          </div>


          <div className='flexdeal2'>
            <div>
              <img className='gif' src={require("./images/mega-prince-varuntej-from-f3-movie-varuntej.gif")}></img>
            </div>
            <div>
              <p className='gpara'>Event Partnerships: <br></br>How to Pick, Pitch & <br></br> Execute | Event Marketing<br></br> Ideas</p>
            </div>
          </div>

          <div className='flexdeal3'>
            <div>
              <img className='gif' src={require("./images/bye-nichkhun.gif")}></img>
            </div>
            <div>
              <p className='gpara'>The Five Components of <br></br> a Winning Sponsorship <br></br> Proposal</p>
            </div>
          </div>


          <button className='more'>More</button>



        </div>
      </div>





















    </div>





  );
}

export default App;















