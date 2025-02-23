import { FaPen } from "react-icons/fa";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Divider, Image, Box, Text, Grid, HStack, Button } from "@chakra-ui/react";
import React from "react";
import DiscussionsFollowButton from "./DiscussionsFollowButton";
import { DiscussionsLikeButton } from "./DiscussionsFollowButton";

interface IContentProps {
    postId?: string;
    content?: string;
    bgImg?: string;
    toggleShowEditor: () => void;
    isEditorVisible?: boolean;
    userId?: string;
    isLogged?: boolean;
    currentId?: string;
}

const DiscussionsDetailContent = ({
    postId,
    content,
    bgImg,
    toggleShowEditor,
    isEditorVisible,
    userId,
    isLogged,
    currentId,
}: IContentProps) => {
    return (
        <Grid>
            <Flex key={postId} direction={"column"}>
                <Box mt="70px" position="relative">
                    <Image src={bgImg}></Image>
                    <Text mt="40px">{content}</Text>
                    <Flex alignItems="center" mt="40px">
                        {isLogged ? (
                            <>
                                {userId === currentId ? (
                                    <Flex alignItems="center">
                                        <HStack align="center" textColor="red.500" _hover={{ color: "gray.50" }}>
                                            <DiscussionsLikeButton>
                                                <Text>Like this post</Text>
                                            </DiscussionsLikeButton>
                                        </HStack>
                                    </Flex>
                                ) : (
                                    <>
                                        <HStack align="center" textColor="gray.500" _hover={{ color: "gray.50" }}>
                                            <DiscussionsFollowButton>
                                                <Text>Follow post</Text>
                                            </DiscussionsFollowButton>
                                        </HStack>
                                        <Flex alignItems="center">
                                            <HStack align="center" textColor="gray.500" _hover={{ color: "gray.50" }}>
                                                <DiscussionsLikeButton>
                                                    <Text>Like</Text>
                                                </DiscussionsLikeButton>
                                            </HStack>
                                        </Flex>
                                    </>
                                )}
                            </>
                        ) : (
                            ""
                        )}
                        <Flex alignItems="center" ml="10px">
                            {isEditorVisible ? (
                                <Button
                                    onClick={toggleShowEditor}
                                    leftIcon={isEditorVisible ? <TriangleUpIcon /> : <FaPen />}
                                    height="37px"
                                >
                                    <Text>Hide Comment</Text>
                                </Button>
                            ) : (
                                <Button
                                    onClick={toggleShowEditor}
                                    colorScheme="blue"
                                    leftIcon={isEditorVisible ? <TriangleUpIcon /> : <FaPen />}
                                    height="37px"
                                >
                                    <Text>Add Comment</Text>
                                </Button>
                            )}
                        </Flex>
                    </Flex>

                    <Divider mt="30px" color="gray.200" />
                </Box>
            </Flex>
        </Grid>
    );
};

export default DiscussionsDetailContent;
