import { Text } from "@mantine/core";

interface RatingProps {
    // rating: IMovieRating | undefined;
    rating: number;
    className?: {};
}

const Rating = ({ className, rating }: RatingProps) => {
    // const isHighRating = Math.floor(Number(rating?.kp || rating?.imdb)) > 4 ? 'green' : 'red';

    return (
        <Text sx={className} color={5 > 4 ? "red" : "green"}>
            {rating}
        </Text>
    );
};

export default Rating;
