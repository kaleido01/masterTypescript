import React, { useContext, useEffect } from "react";
import "./App.css";
import { Store } from "./Store";
import { IEpisode, IAction, IEpisodeProps } from "./interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

const App = (): JSX.Element => {
	const { state, dispatch } = useContext(Store);

	useEffect(() => {
		state.episodes.length === 0 && fetchDataAction();
	});

	const URL =
		"https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

	const fetchDataAction = async () => {
		const data = await fetch(URL);
		const dataJSON = await data.json();
		dispatch({
			type: "FETCH_DATA",
			payload: dataJSON._embedded.episodes
		});
	};
	console.log(state);

	const toggleFavAction = (episode: IEpisode): IAction => {
		const episodeInFav = state.favorites.includes(episode);
		let dispatchObj = {
			type: "ADD_FAV",
			payload: episode
		};
		if (episodeInFav) {
			const favWithoutEpisode = state.favorites.filter(
				(favorite: any) => favorite.id !== episode.id
			);
			dispatchObj = {
				type: "REMOVE_FAV",
				payload: favWithoutEpisode
			};
		}
		return dispatch(dispatchObj);
	};

	const props: IEpisodeProps = {
		episodes: state.episodes,
		toggleFavAction: toggleFavAction,
		favorites: state.favorites
	};

	return (
		<div className="App">
			<section>
				<React.Suspense fallback={<div>loading...</div>}>
					<EpisodeList {...props} />
				</React.Suspense>
			</section>
		</div>
	);
};

export default App;
