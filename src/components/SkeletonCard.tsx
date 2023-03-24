import { Box, Skeleton } from "@mantine/core";

const SkeletonCard = () => {
    return (
        <Box h={350}>
            <Skeleton height={300} circle mb='xl' />
            <Skeleton height={8} radius='xl' />
            <Skeleton height={8} mt={6} radius='xl' />
            <Skeleton height={8} mt={6} width='70%' radius='xl' />
        </Box>
    );
};

export default SkeletonCard;
