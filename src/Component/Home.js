import React from 'react';
import Header from './Header'
const Home = () => {


    return (
        <div>
            
            <div className="container">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>1</td>
                            <td>Deepak</td>
                            <td>23</td>
                        </tr>
                        
                   
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;