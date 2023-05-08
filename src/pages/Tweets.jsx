import { useEffect, useState } from "react";
import { getUsers, updateUsers } from "../helpers/api";
import { TweetCardsList } from "../components/TweetCardsList/TweetCardsList";
import { Button } from "../components/Button/Button";
import { Loader } from "../components/Loader/Loader";
import { BackLink } from "../components/BackLink/BackLink";
import { Section } from "../components/Section/Section";
import { useLocation } from "react-router-dom";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  const [showUsers, setShowUsers] = useState(0);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    async function data() {
      try {
        setStatus(STATUS.PENDING);
        if (currentPage !== 1) {
          const response = await getUsers(currentPage);
          setTweets((prev) => [...prev, ...response]);
          setShowUsers((prev) => prev + response.length);
          setStatus(STATUS.RESOLVED);

          return;
        }

        const response = await getUsers();
        setTweets(response);
        setShowUsers((prev) => prev + response.length);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
        throw new Error(error.message);
      }
    }
    data();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleUpdateUsers = (id, followers) => {
    updateUsers(id, followers);
  };

  return (
    <Section>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <TweetCardsList tweets={tweets} handleUpdateUsers={handleUpdateUsers} />

      {status === STATUS.RESOLVED && showUsers < 12 && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <h2>{error}</h2>}
    </Section>
  );
};

export default Tweets;
