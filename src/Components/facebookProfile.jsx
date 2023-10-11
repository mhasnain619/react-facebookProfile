import './facebookProfile.css'
import Proimg from '../anain.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSolidPencil, BiDotsHorizontalRounded, BiSolidDownArrow, BiLogoProductHunt, BiColor } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { RiLiveFill } from 'react-icons/ri';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BsFlagFill, BsThreeDots } from 'react-icons/bs';
import { FaHome, FaClock, } from 'react-icons/fa';
import { FaUserGroup, FaUser } from 'react-icons/fa6';
import { MdOutlineFmdGood } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { IoOptions } from 'react-icons/io5';
import { TbSettingsFilled } from 'react-icons/tb';
import { PiListFill } from 'react-icons/pi';
import { GrEmoji } from 'react-icons/gr';
import { PiGif } from 'react-icons/pi';
import { TfiLayoutGrid2Alt } from 'react-icons/tfi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import Home from "../home"
import profileImg from '../anain.jpg'
import PostData from '../posts'
import { useNavigate } from 'react-router-dom';
function FacebookProfile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newData, setNewData] = useState('');
    const [caption, setCaption] = useState('');
    const [newA, setNewA] = useState({
        name: "",
        caption: "",
        image: "./hannu.jpg"
    });

    useEffect(() => {
        localStorage.setItem('newA', JSON.stringify(newA))
    }, [newA])


    const toPost = () => {
        setNewA({ ...newA, name: newData, caption: caption })
    }
    return (
        <>
            <div className="lol">
                <div className='container'>
                    <div className="Second-container">
                        <div className='Profile-container'>
                            <img src={Proimg} alt='hasnain' />
                            <div className='name-friends'>
                                <h1
                                    className='name'>
                                    M Hasnain
                                </h1>
                                <p>713 friends</p>
                            </div>
                        </div>
                        <div className="addStoryBtns">
                            <div className="add_Story-Edit">
                                <button className='add-story-btn'>+ Add to story</button>
                                <button className='edit-profile-btn'><BiSolidPencil className='pen' />Edit profile</button>
                            </div>
                            <button className='arrow-profile-btn'><MdKeyboardArrowDown className='pen' /></button>
                        </div>
                    </div>
                    <hr className='hr1' />
                    <div className="nav">
                        <div className="div">
                            <ul className='nav-itms'>
                                <li>Posts</li>
                                <li className='a'>About</li>
                                <li className='a'>Friends</li>
                                <li className='a'>Photos</li>
                                <li className='a'>Videos</li>
                                <li className='a'>Check-ins</li>
                                <li>More<BiSolidDownArrow className='more-down-icon' /></li>
                            </ul>
                        </div>
                        <div className="three-dot">
                            <BiDotsHorizontalRounded className='three-dot-btn' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="posts-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-5">
                            <div className='aside-1'>
                                <div className="you-locked-your-pro">
                                    <BiLogoProductHunt className='pro-btn' />
                                    <div className="you-locked-inner-text">
                                        <h5>You Locked Your Profile</h5>
                                        <a href="">Learn more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="introduction-container">
                                <div className='aside-3'>
                                    <h4>Intro</h4>
                                    <div className="nothing">
                                        <p>Nothing...</p>
                                    </div>
                                    <div className="edit-bio">
                                        <button>Edit bio</button>
                                    </div>
                                    <div className="location">
                                        <div className="livesIn">
                                            <FaHome className='homeIcon' />
                                            <p>Lives in <bold className='bold'>Karachi, Pakistan</bold></p>
                                        </div>
                                        <div className="fromKhaplu">
                                            <MdOutlineFmdGood className='locationIcon' />
                                            <p>From <bold className='bold'>Khapalu, Northern Areas, Pakistan</bold> </p>
                                        </div>
                                        <div className="single">
                                            <AiFillHeart className='heartIcon' />
                                            <p>Single</p>
                                        </div>
                                        <div className="joinDate">
                                            <FaClock className='clockIcon' />
                                            <p>Joined November 2016</p>
                                        </div>
                                        <div className="edit-details">
                                            <button>Edit details</button>
                                        </div>
                                        <div className="Add-hobbies">
                                            <button>Add hobbies</button>
                                        </div>
                                        <div className="Add-featured">
                                            <button>Add featured</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="photos-container">
                                <div className="photos-see-all-photos">
                                    <h5>Photos</h5>
                                    <div className='link-see-allPhotos'>
                                        <a href="">See all photos</a>
                                    </div>
                                </div>
                                <div className="all-pic">
                                    <div className='pic a'>
                                        <img src={Proimg} alt="" />
                                    </div>
                                    <div className='pic '>

                                    </div>
                                    <div className='pic b'>

                                    </div>
                                    <div className='pic c'>

                                    </div>
                                    <div className='pic d'>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className='aside-2'>
                                <div className="pro-whats-your-mind">
                                    <div className="profileANDwhatsYourMind">
                                        <div className="profile">
                                            <CgProfile className='profileIcon' />
                                        </div>
                                        <div className="whats-your-mind">
                                            <button onClick={handleShow}>What's on your mind?</button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title className='createpost' >Create Post</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="createPost-profile">
                                                        <CgProfile className='createPostIcon' />
                                                        <div className="createPost-friends">
                                                            <h6>M Hasnain</h6>
                                                            <p>
                                                                <FaUserGroup className='UseIcon' />
                                                                Friends
                                                                <BiSolidDownArrow className='more-down-icon' />
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <Form>

                                                        <Form.Group className="mb-3" controlId="exampleForm ControlTextarea1"
                                                        >
                                                            <Form.Control as="input"
                                                                onChange={(e) => setNewData(e.target.value)}
                                                                placeholder='Your Name ' className='textArea' />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm ControlTextarea1"
                                                        >
                                                            <Form.Control as="input"
                                                                onChange={(e) => setCaption(e.target.value)}
                                                                placeholder='Whats on your mind ' className='textArea' />
                                                        </Form.Group>
                                                    </Form>
                                                    <div className="emoji-icons">
                                                        <BiColor className='emoji' />
                                                        <GrEmoji className='emoji' />
                                                    </div>
                                                    <div className="add-your-post">
                                                        <div className="add-your-post-icons">
                                                            <h6>Add your post</h6>
                                                            <div className="AddyourPostIcons">
                                                                <input type='file' />
                                                                <HiOutlinePhotograph className='photosIcon' />
                                                                <FaUser className='locationIcon' />
                                                                <MdOutlineFmdGood className='locationIcon' />
                                                                <GrEmoji className='locationIcon' />
                                                                <PiGif className='locationIcon' />
                                                                <BsThreeDots className='locationIcon' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button onClick={() => { toPost() }} className='postBtn'>
                                                        Post
                                                    </Button>
                                                </Modal.Footer>

                                            </Modal>
                                        </div>
                                    </div>
                                    <hr className='hr2' />
                                    <div className="live-vedio-photos-life-event">
                                        <div className="liveVedio">
                                            <div className="live-Icon">
                                                <RiLiveFill className='liveIcon' />
                                            </div>
                                            <div className="txt">
                                                <p>Live video</p>
                                            </div>
                                        </div>
                                        <div className="photos-vedio">
                                            <div className="photos">
                                                <HiOutlinePhotograph className='photosIcon' />
                                            </div>
                                            <div className="PhotoVedio">
                                                <p>Photos/video</p>
                                            </div>
                                        </div>
                                        <div className="life-event">
                                            <div className="life-icon">
                                                <BsFlagFill className='LifeIcon' />
                                            </div>
                                            <div className="event">
                                                <p>Life event </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="posts-div">
                                <div className="posts-filter-manage-btn">
                                    <div className="posts">
                                        <h4>Posts</h4>
                                    </div>
                                    <div className="postBtn-manageBtn ">
                                        <div className="filter">
                                            <button>
                                                <IoOptions className='filter-Icon' />Filters
                                            </button>
                                        </div>
                                        <div className="manage-btn">
                                            <button>
                                                <TbSettingsFilled className='setting-Icon' />Manage post
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className='hr4' />
                                <div className="List-Grid">
                                    <div className="list-view">
                                        <PiListFill className='list-view-Icon' />
                                        <p>List View</p>
                                    </div>
                                    <div className="grid-view">
                                        <TfiLayoutGrid2Alt />
                                        <p>Grid View</p>
                                    </div>
                                </div>
                            </div>
                            <Home userObj={newA} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default FacebookProfile;