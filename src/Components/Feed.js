import { useState } from 'react';

import Block from './Block';
import Menu from './Menu';

const Feed = () => {
    /* Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // YOUR VAR HERE - Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const posts = null; // EDIT THIS VAR

    return (
        <div>
            <Menu></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;