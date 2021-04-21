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


    

    getMovies(genre = null) {
        console.log("deadloop!")
        const APIKEY = '927b2722076db51f3b66f95e3b0419b6';
        if(!genre){
            
            const baseURL = 'https://api.themoviedb.org/3/';
            // let configData = null;
            // let baseImageURL = null;

            let completeURL = "".concat(baseURL, 'movie/popular?api_key=', APIKEY);
            fetch(completeURL)
                .then((result) => {
                    return result.json();
                })
                .then((data) => {
                    this.setState({movies: []})
                    this.setState({movies: data.results});
                    return null
                })
                .catch(function(error) {
                    console.log(error);
                });
            }else{
                const baseURL = 'https://api.themoviedb.org/3/';
                // let configData = null;
                // let baseImageURL = null;
                

                let completeURL = "".concat(baseURL, 'discover/movie?api_key=', APIKEY + '&with_genres=' + genre);
                return fetch(completeURL)
                    .then((result) => {
                        return result.json();
                    })
                    .then((data) => {
                        this.setState({movies: []})
                        this.setState({movies: data.results});
                        return null
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        
    }

    getGenreMovies(genre){
        let genreMovies = [];
            this.getMovies(genre).then((gettedMovies) => {
                gettedMovies.map((movie, index) =>{
                    genreMovies.push(Object.assign({}, movie));
            })
        })
        return genreMovies;
    }



    getBoxes = (movies) => {
            movies = this.state.movies
            return(
                
                movies.map((movie, index) => {
                    return (
                        <div key={index} className="titleBox">
                            <img src={'https://image.tmdb.org/t/p/w185' + movie.backdrop_path} alt={movie.original_title}></img>
                            <div className="text_bg">
                                <p>{movie.original_title}</p>
                            </div>
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
                
                <div>{this.getBoxes(this.getMovies())}</div> 
            </div>
            <h4>Horror:</h4><br />
            <div className="titles">
                <div>{this.getBoxes(this.getMovies(27), 27)}</div> 
            </div>
            </>
        )
    }
}

export default titleBox;