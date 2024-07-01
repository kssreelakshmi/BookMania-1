import ProfilePic from './assets/bookmania.png'

function Card(){
    return(
        <div className="card">
            <img src={ProfilePic} className='profilepic' alt="Profile picture"></img>
            <h2 className='heading'>BookMania</h2>
            <p className='desc'>I am a Fullstack Developer and a art lover</p>
        </div>
    );
}
export default Card