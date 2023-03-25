export type IconProps = {
    // active?: boolean
    // icon: React.ReactElement,
    title: string;
    to: string;
    icon: JSX.Element;
};

// {
//     adult: false;
//     backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg";
//     genre_ids: [28, 12, 878];
//     id: 505642;
//     media_type: "movie";
//     original_language: "en";
//     original_title: "Black Panther: Wakanda Forever";
//     overview: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.";
//     popularity: 4782.887;
//     poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg";
//     release_date: "2022-11-09";
//     title: "Black Panther: Wakanda Forever";
//     video: false;
//     vote_average: 7.453;
//     vote_count: 3263;
// }

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    first_air_date: string;
    title: string;
    name: String;
    video: boolean;
    vote_average: number;
    vote_count: number;
    description: string;
}

export interface IMovieCard {
    id: number;
    name: string;
    year: string;
    url: string;
    vote: number;
    type: string;
    description: string;
}

// export interface IMovie {
// 	ageRating: number;
// 	alternativeName: string;
// 	backdrop: { url: string };
// 	budget: IMovieBudget;
// 	countries: { name: string }[];
// 	createDate: Date;
// 	description: string;
// 	distributors: IMovieDistributors;
// 	fees: IMovieFees;
// 	facts: IFact[];
// 	genres: { name: string }[];
// 	id: number;
// 	enName: string;
// 	images: { framesCount: number };
// 	lists: [];
// 	logo: { url: string };
// 	movieLength: number;
// 	name: string;
// 	names: { name: string }[];
// 	persons: IMoviePerson[];
// 	poster: IMoviePoster;
// 	premiere: IMoviePremiere;
// 	productionCompanies: IMovieProdComp[];
// 	rating?: IMovieRating;
// 	ratingMpaa: string;
// 	seasonsInfo?: IMovieSeasonsInfo[];
// 	sequelsAndPrequels: IMovieSequels[];
// 	shortDescription: string;
// 	similarMovies: IMovie[];
// 	slogan: string;
// 	spokenLanguages: IMovieLang[];
// 	status: string;
// 	technology: IMovieTechnology;
// 	ticketsOnSale: boolean;
// 	type: string;
// 	typeNumber: number;
// 	updateDates: Date[];
// 	updatedAt: Date;
// 	videos: { trailers: IMovieTrailer[] };
// 	votes: IMovieRating;
// 	year: number;
// }
