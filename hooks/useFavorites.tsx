import { useLocalStorage } from "@mantine/hooks";
import { useCallback } from "react";

const useFavorites = () => {
    const [favorites, setFavorites] = useLocalStorage<number[]>({ key: "favorites", defaultValue: [] });

    const toggleFavorite = useCallback(
        (id: number) => {
            if (favorites.includes(id)) {
                setFavorites(favorites.filter(el => el !== id));
            } else {
                setFavorites([...favorites, id]);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [favorites]
    );

    return { favorites, toggleFavorite };
};

export default useFavorites;
