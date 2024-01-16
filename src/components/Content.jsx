
import './Content.css'



function Content(props) {
  // const [memeImage, setnewmeme] = React.useState("")
  // let allMemeImages = memesData.data.memes
  

  // function getMemeImage(){
  //   const randomNumber = Math.floor(Math.random() * allMemeImages.length)
  //   setnewmeme(allMemeImages[randomNumber].url)
  // }
  // const randomNumber = Math.floor(Math.random() * allMemeImages.length)
  

  
  return (
    <>
      <div className='oneAdhkar'  id={props.key}>
        
        {props.title && <h2>{props.title}</h2>}
        {props.count && <h2>{props.count}x</h2>}
        {props.arabic && <h1 className='Lateef--800' >{props.arabic}</h1> }
        {props.count && <h2>{props.count}x</h2>}
        {props.lation && <h3>{props.lation}</h3> }
        
      </div>
    </>
  )
}

export default Content