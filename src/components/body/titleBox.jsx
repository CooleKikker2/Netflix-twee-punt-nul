import React from 'react';
import '../../style/body/titleBox.scss';

class titleBox extends React.Component {
    state = {
        movies: null,
    }



    getMovies() {
        const baseURL = 'https://api.themoviedb.org/3/';
        let configData = null;
        let baseImageURL = null;
        const APIKEY = '927b2722076db51f3b66f95e3b0419b6';

        let completeURL = "".concat(baseURL, 'movie/popular?api_key=', APIKEY);
        fetch(completeURL)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                this.setState({movies: data.results})
                return(1);
            })
    }

    getBoxes(){
        if(this.getMovies()){
            let { movies } = this.state;
            movies.map(function(movie, index){
                return("hoi");
            })
        }

    }




    render(){
        return(
            <div className="titles">
                {this.getBoxes()}
                <div className="titleBox">
                    <p>Dit is een serie!</p>
                </div>
            </div>
        )
    }
}

export default titleBox;