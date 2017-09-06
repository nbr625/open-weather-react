import React from 'react';
import {Link} from 'react-router';


export default class About extends React.Component {
    render(){
        return(
            <div>
                <h2 className="page-title text-center">About</h2>
                <p className=" text-center">Search for local weather in any city</p>
                <p className=" text-center">Disclaimer: it must be non-fictional</p>
                <p className="text-center"><a className="git-link" href="https://github.com/nbr625/open-weather-react">Source Code</a></p>
                <ul className="link-list">
                    <li>
                        <Link to="/?location=Caracas" className="about-links text-center">Caracas, Venezuela</Link>
                    </li>
                    <li>
                        <Link to="/?location=Weston" className="about-links text-center">Weston, Florida</Link>
                    </li>
                    <li>
                        <Link to="/?location=San Francisco" className="about-links text-center">San Francisco, California</Link>
                    </li>
                    <li>
                        <Link to="/?location=Barcelona" className="about-links text-center">Barcelona, Spain</Link>
                    </li>
                    <li>
                        <Link to="/?location=London" className="about-links text-center">London, England</Link>
                    </li>
                    <li>
                        <Link to="/?location=Antananarribo" className="about-links text-center">Antananarribo, Madagascar</Link>
                    </li>
                    <li>
                        <Link to="/?location=Sydney" className="about-links text-center">Sydney, Australia</Link>
                    </li>

                </ul>

            </div>

        );

    }

};