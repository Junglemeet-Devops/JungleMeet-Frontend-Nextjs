import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdOutlineFavorite, MdAssistantPhoto } from "react-icons/md";
import React from "react";

export const DiscussionsLikeButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button
            bg="gray.200"
            _hover={{
                background: "red.400",

                border: "none",
            }}
            _focus={{ border: "none" }}
            width="84px"
            height="37px"
        >
            <Icon as={MdOutlineFavorite} mr="5px" />
            {children}
        </Button>
    );
};

const DiscussionsFollowButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button
            bg="gray.200"
            mr="10px"
            _hover={{
                background: "blue.400",
                color: "gray.50",
                border: "none",
            }}
            _focus={{ border: "none" }}
            width="140px"
            height="37px"
        >
            <Icon as={MdAssistantPhoto} mr="5px" />
            {children}
        </Button>
    );
};

export default DiscussionsFollowButton;
