import React from 'react';
import '../../style/body/titleBox.scss';

class titleBox extends React.Component {
    state = {
        movies: [],
    }

    constructor(){
        super();
        this.getMovies();
    }
    



    getMovies() {
        const baseURL = 'https://api.themoviedb.org/3/';
        // let configData = null;
        // let baseImageURL = null;
        const APIKEY = '927b2722076db51f3b66f95e3b0419b6';

        let completeURL = "".concat(baseURL, 'movie/popular?api_key=', APIKEY);
        fetch(completeURL)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                this.setState({movies: data.results});
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getBoxes = (movies) => {
        console.log(movies)
        return(
            movies.map((movie, index) => {
                console.log(movie)
                console.log("A movie with id "+ index +" has been mapped: " + movie);
                return (
                    <div key={index} className="titleBox">
                        <div className="text_bg">
                            <p>{movie.original_title}</p>
                        </div>
                        <img src={'https://image.tmdb.org/t/p/w185' + movie.backdrop_path} alt={movie.original_title}></img>
                        
                    </div>
                );
            }) 
        )
    }




    render(){
        //this.getMovies();
        return(
            <>
            <h4>Populairste Films</h4><br />
            <div className="titles">
                
                <div>{this.getBoxes(this.state.movies)}</div> 
            </div>
            <h4>Ons Favorieten</h4><br />
            <div className="titles">
                
                <div>{this.getBoxes(this.state.movies)}</div> 
            </div>
            </>
        )
    }
}

export default titleBox;