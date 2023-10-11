import './App.css';
import Proimg from './anain.jpg'
import { FaComment, FaShare } from 'react-icons/fa';
import { GoThumbsup } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home(props) {


    const posts = [
        {
            "id": 1,
            "name": "M Hasnain",
            "caption": "تم مخلص رہنا ٬ ہم تابعدار رہینگے۔",
            "image": "./anainty.jpg",
        },
        {
            "id": 2,
            "name": "Zahoor Abbas",
            "caption": "sfiy sdjfh usdyf xcgdf sutyr zxufysd f idufy dfsd f duify",
            "image": "./hmm.jpg.jpeg",
        },
        {
            "id": 3,
            "name": "Zaheer baltee",
            "caption": "sfdhsrgw iwuty uwer df sjh sdu",
            "image": "./hina.jpg",
        },
        {
            "id": 5,
            "name": "Ghulam Abbas",
            "caption": "kskdf aius asga idt hfgd d f ۔",
            "image": "./anain.jpg",
        },
    ]
    const setPOst = () => {
        posts.unshift(props.userObj)
    }
    setPOst()
    return (
        <>
            <div className='main-container'>
                {posts?.map((e, i) => {
                    return (
                        <div key={i} className='information'>
                            <div className='img-name'>
                                <img src={Proimg} width={65} height={65} alt='hasnain' />
                                <div className='name-date'>
                                    <div className="hmm">
                                        <h6
                                            className='name'>
                                            {e.name}
                                        </h6>
                                        <p className='date'>2-Aug-2023</p>
                                    </div>
                                </div>
                            </div>
                            <p>{e.caption}</p>

                            <img className='post-img' src={require(`${e.image}`)} alt='pic' />
                            <div className='post-footer'>
                                <div className='button'>
                                    <GoThumbsup className='thumbsUp' />
                                    <span>like</span>
                                </div>
                                <div className='button'>
                                    <FaComment className='thumbsUp' /> <span>Comment</span>
                                </div>
                                <div className='button'>
                                    <FaShare className='thumbsUp' /> <span>Share</span>
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className="userImage-commentInput">
                                <div className="userImage">
                                    <CgProfile className='userIcon' />
                                    <input type="text" placeholder='Write a comment...' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
export default Home;
