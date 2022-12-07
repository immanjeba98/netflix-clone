import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Nav from '../../Components/Nav/Nav'
import Row from '../../Components/Row/Row'
import "./HomeScreen.css"
import requests from '../../helpers/requests'

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINAL"
                fetchUrl={requests.fetchNetflixOriginals}
                isLarge 
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />

        </div>
    )
}

export default HomeScreen