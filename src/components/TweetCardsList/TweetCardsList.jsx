import TweetCard from "../TweetCard/TweetCard";
import { List } from "./TweetCardsList.styled";

export const TweetCardsList = ({ tweets, handleUpdateUsers }) => {
  return (
    <List>
      {tweets.map(({ id, user, tweets, followers, avatar }) => (
        <li key={id}>
          <TweetCard
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            id={id}
            handleUpdateUsers={handleUpdateUsers}
          />
        </li>
      ))}
    </List>
  );
};
