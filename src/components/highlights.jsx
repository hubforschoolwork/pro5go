import React from 'react';

const Highlights = () => {
    return (
        <div className="d-flex">

            <div className="content p-4">
                <h1>Welcome to Winter Wonderland!</h1>

                <h5><p>This site is dedicated to all things winter and all things fun.  Here are a few things you can discover:</p></h5>

            <div class="container-g">
            <div>
                <ul className="nav flex-column">

                    <li>
                        Outdoor Activities
                    </li>

                    <li>
                        Indoor Activities
                    </li>

                    <li>
                        Cooking / Baking / Recipes
                    </li>

                    <li>
                        Gift Shopping
                    </li>

                    <li>
                        Decorating
                    </li>

                    {/* <li className="nav-item">
                        <a href="#" className="nav-link text-white">Sports</a>
                    </li> */}

                </ul>
            </div>
            </div>



            </div>
        </div>
    );
};

export default Highlights;
