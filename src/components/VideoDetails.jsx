import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchDataFromApi ,fetchVideoDetails} from '../utils/api';
import { Context } from "../context/contextApi"
import ReactPlayer from 'react-player';
import { abbreviateNumber } from 'js-abbreviation-number';
import SuggestionVideoCard from "./SuggestionVideoCard"
import { AiOutlineLike } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";


const VideoDetails = () => {
  let temp;

  const { id } = useParams();

  const { setLoading , videoDetail,setVideoDetail ,searchResults} = useContext(Context);

  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const [views ,setViews] = useState();
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideo();
    fetchRelatedVideo();
  }, [id])
  
  

  const fetchVideo = () =>{
    setLoading(true);
    if(searchResults){
      for (let index = 0; index < searchResults.length; index++) {
        const element = searchResults[index].video.videoId;
        if(element === id) {
          console.log("VIDEO ",searchResults[index].video)
          temp = searchResults[index].video;
          setVideo(temp);
          if(searchResults[index].video?.stats?.views){
            setViews(searchResults[index].video?.stats?.views);
          }
          else if(searchResults[index].video?.stats?.viewers){
            setViews(searchResults[index].video?.stats?.viewers*100);
          }
          else setViews(Math.random()*100+Math.random()*3);
          break;
        }
      }
    }
    setLoading(false);
  }

  const fetchRelatedVideo = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log("RELATED VIDEO IN VIDEODETAILS : ",res);
      setRelatedVideos(res);
      setLoading(false);
    })
  }


  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 ">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                   loading='lazy'
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0].url}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type ===
                    "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                </div>
                <div className="text-white/[0.7] text-sm">
                  {`${abbreviateNumber(Math.floor( views  * Math.random()),2)}`}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                {`${abbreviateNumber(
                    views / 3,
                  2
                )} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {`${abbreviateNumber(
                  views,
                  2
                )} Views`}
              </div>


            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto overflow-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            if(index === 0) console.log(item?.video);
            return (
              <SuggestionVideoCard
                key={index}
                video={item?.video}
              />
            );
          })}
        </div>
      </div>
    </div>

    
    
  )
}

export default VideoDetails
