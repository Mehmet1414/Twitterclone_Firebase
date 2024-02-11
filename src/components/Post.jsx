import Button_post from "./Buttons/Button_post";
import Profile_Png from "../assets/user.png";
import moment from "moment";

const Post = ({ tweet }) => {
  const tweetDate = new Date(tweet?.createDate?.toDate());
  return (
    <>
      <div className="flex w-full p-3 border-b">
        <div className="pl-3">
          <img
            className="w-12 rounded-full"
            src={tweet.user.profilePic ? tweet.user.profilePic : Profile_Png}
          />
        </div>
        <div className="flex-1 flex-col px-4">
          <div className="flex justify-between">
            <div className="flex gap-1 justify-between items-center text-sm">
              <button className="font-semibold hover:underline transition-all">
                {tweet.user.name}
              </button>
              <button className=" text-gray-500 transition">
                @{tweet?.user.name.toLowerCase()}
              </button>
              <span className=" text-gray-500">.</span>
              <span className=" text-gray-500">
                {moment(tweetDate).fromNow()}
              </span>
            </div>
            <Button_post text={"More"} i_class={"fa-solid fa-ellipsis"} />
          </div>
          <div>{tweet.content}</div>
          <div
            className={`${
              tweet.imgContent ? "h-full" : "hidden"
            } w-full border  rounded-xl my-3`}
          >
            {tweet.imgContent}
          </div>
          <div className="flex justify-between ">
            <Button_post
              text={"Share"}
              i_class={"fa-regular fa-comment-dots"}
              count={51}
            />
            <Button_post
              text={"Repost"}
              i_class={"fa-solid fa-retweet text-base"}
              count={586}
              b_class={"hover:text-green-500 hover:bg-green-100"}
              c_class={"group-hover:text-green-500"}
            />
            <Button_post
              text={"Like"}
              i_class={"fa-regular fa-heart"}
              count={tweet.likes.length}
              b_class={"hover:text-red-500  hover:bg-red-100"}
              c_class={"group-hover:text-red-500"}
            />
            <Button_post
              text={"View"}
              i_class={"fa-solid fa-chart-column"}
              count={"1.5K"}
            />

            <div className="flex">
              <Button_post
                text={"Bookmark"}
                i_class={"fa-regular fa-bookmark"}
              />
              <Button_post
                text={"Share"}
                i_class={"fa-solid fa-arrow-up-from-bracket"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
