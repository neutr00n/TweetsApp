import { TweetsAmount } from "../TweetsAmount/TweetsAmount";
import { FollowersAmount } from "../FollowersAmount/FollowersAmount";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CardBox, UserPhoto, Circle } from "./TweetCard.styled";

const TweetCard = ({
  id,
  user,
  tweets,
  followers,
  avatar,
  handleUpdateUsers,
}) => {
  const [totalFollowers, setTotalFollowers] = useState(() => followers);
  const [isFollowing, setIsFollowing] = useLocalStorage(
    `isFollowing_${id}`,
    false
  );

  const handleFollowingBtnClick = async (id) => {
    setIsFollowing((prev) => !prev);

    const newFollowersCount = isFollowing
      ? totalFollowers - 1
      : totalFollowers + 1;
    setTotalFollowers(newFollowersCount);

    try {
      await handleUpdateUsers(id, newFollowersCount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardBox>
      <Circle>
        <UserPhoto src={avatar} alt={user} width={62} height={62} />
      </Circle>

      <TweetsAmount>{tweets} tweets</TweetsAmount>
      <FollowersAmount>
        {totalFollowers.toLocaleString("en-US")} Followers
      </FollowersAmount>
      <Button
        isFollowing={isFollowing}
        onClick={() => handleFollowingBtnClick(id)}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </CardBox>
  );
};
export default TweetCard;
