import React,{useState} from 'react'
import './ProtfolioComponent.css'
import Title from '../../common/Title/Title'
import ReactPlayer from "react-player";

const ProtfolioFeatured = () => {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true); // Start the video playback when the custom play button is clicked
    };
    const [playing_1, setPlaying_1] = useState(false);

    const handlePlay_1 = () => {
        setPlaying_1(true); // Start the video playback when the custom play button is clicked
    };

    const [playing_2, setPlaying_2] = useState(false);

    const handlePlay_2 = () => {
        setPlaying_2(true); // Start the video playback when the custom play button is clicked
    };
  return (
    <div className='container'>
        <div className="protfolio_featured">
            <Title title='Featured Film'content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
            <div className="protfolio_featured_grid">
                <div className="protfolio_featured_img" data-aos="fade-right">
                   {playing && (
                        <ReactPlayer
                        url='https://www.youtube.com/watch?v=_3E0IWKhNDE'
                        playing={playing}
                        controls={true} // You can turn this off if you want complete control
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", top: 0, left: 0 }}
                        config={{
                            youtube: {
                            playerVars: {
                                modestbranding: 1,
                                rel: 0,
                                showinfo: 0,
                                iv_load_policy: 3,
                            },
                            },
                        }}
                        />
                    )}

                    {/* Custom Play Button */}
                    {!playing && (
                        <button
                        onClick={handlePlay}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            fontSize: "24px",
                            cursor: "pointer",
                        }}
                        >
                        ▶
                        </button>
                    )}

                    {/* Background placeholder */}
                    {!playing && (
                        <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url('https://img.youtube.com/vi/_3E0IWKhNDE/maxresdefault.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "brightness(70%)",
                        }}
                        ></div>
                    )}
                </div>
                <div className="protfolio_featured_content" data-aos="fade-left">
                    <h1>Trap_mastered by dxnger</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className="protfolio_featured_grid_2nd">                
                <div className="protfolio_featured_content" data-aos="fade-right">
                    <h1>Trap_mastered by dxnger</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="protfolio_featured_img" data-aos="fade-left">
                   {playing_1 && (
                        <ReactPlayer
                        url='https://www.youtube.com/watch?v=VaH1lqV4qsY'
                        playing={playing_1}
                        controls={true} // You can turn this off if you want complete control
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", top: 0, left: 0 }}
                        config={{
                            youtube: {
                            playerVars: {
                                modestbranding: 1,
                                rel: 0,
                                showinfo: 0,
                                iv_load_policy: 3,
                            },
                            },
                        }}
                        />
                    )}

                    {/* Custom Play Button */}
                    {!playing_1 && (
                        <button
                        onClick={handlePlay_1}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            fontSize: "24px",
                            cursor: "pointer",
                        }}
                        >
                        ▶
                        </button>
                    )}

                    {/* Background placeholder */}
                    {!playing_1 && (
                        <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url('https://img.youtube.com/vi/VaH1lqV4qsY/hqdefault.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "brightness(70%)",
                        }}
                        ></div>
                    )}
                </div>
            </div>
            <div className="protfolio_featured_grid">
                <div className="protfolio_featured_img" data-aos="fade-right">
                   {playing_2 && (
                        <ReactPlayer
                        url='https://www.youtube.com/watch?v=mTOqXFwfwsg'
                        playing={playing_2}
                        controls={true} // You can turn this off if you want complete control
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", top: 0, left: 0 }}
                        config={{
                            youtube: {
                            playerVars: {
                                modestbranding: 1,
                                rel: 0,
                                showinfo: 0,
                                iv_load_policy: 3,
                            },
                            },
                        }}
                        />
                    )}

                    {/* Custom Play Button */}
                    {!playing_2 && (
                        <button
                        onClick={handlePlay_2}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            fontSize: "24px",
                            cursor: "pointer",
                        }}
                        >
                        ▶
                        </button>
                    )}

                    {/* Background placeholder */}
                    {!playing_2 && (
                        <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url('https://img.youtube.com/vi/mTOqXFwfwsg/hqdefault.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "brightness(70%)",
                        }}
                        ></div>
                    )}
                </div>
                <div className="protfolio_featured_content" data-aos="fade-left">
                    <h1>Trap_mastered by dxnger</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default ProtfolioFeatured