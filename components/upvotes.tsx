import { IconButton, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon, MinusIcon } from "@chakra-ui/icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

function Upvotes({ count, uuid }: { count: number; uuid: string }) {
  const [loading, setLoading] = useState(false);

  const [voteCount, setVoteCount] = useState(count);

  const checkDisabled = (vote: "-up" | "-down") => {
    return localStorage.getItem(uuid + vote) ? true : false;
  };

  const updateVote = async (voteCount: number) => {
    setLoading(true);
    const commentRef = doc(db, "comments", uuid);
    await updateDoc(commentRef, {
      vote_score: voteCount,
    });
    setLoading(false);
  };

  return (
    <VStack p={5}>
      <IconButton
        variant={checkDisabled("-up") ? "solid" : "outline"}
        colorScheme={checkDisabled("-up") ? "teal" : "gray"}
        aria-label="upvote"
        onClick={async () => {
          if (checkDisabled("-up")) return;
          let votedBefore = false;
          if (localStorage.getItem(uuid + "-down")) votedBefore = true;
          const newVoteCount = votedBefore ? voteCount + 2 : voteCount + 1;
          await updateVote(newVoteCount);
          localStorage.removeItem(uuid + "-down");
          localStorage.setItem(uuid + "-up", "true");
          setVoteCount(newVoteCount);
        }}
        icon={
          loading ? <MinusIcon w={6} h={6} /> : <ChevronUpIcon w={6} h={6} />
        }
        _hover={{
          color: "green",
        }}
      />
      <Text>{voteCount}</Text>
      <IconButton
        variant={checkDisabled("-down") ? "solid" : "outline"}
        colorScheme={checkDisabled("-down") ? "red" : "gray"}
        aria-label="Downvote"
        onClick={async () => {
          if (checkDisabled("-down")) return;
          let votedBefore = false;
          if (localStorage.getItem(uuid + "-up")) votedBefore = true;
          const newVoteCount = votedBefore ? voteCount - 2 : voteCount - 1;
          await updateVote(newVoteCount);
          localStorage.removeItem(uuid + "-up");
          localStorage.setItem(uuid + "-down", "true");
          setVoteCount(newVoteCount);
        }}
        icon={
          loading ? <MinusIcon w={6} h={6} /> : <ChevronDownIcon w={6} h={6} />
        }
        _hover={{
          color: "red",
        }}
      />
    </VStack>
  );
}

export default Upvotes;
