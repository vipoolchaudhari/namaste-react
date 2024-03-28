import { useState } from 'react';
import './SearchBox.scss';

const SearchBox = ({onClickSerach}) => {
    const [searchInputValueInner , setSearchInputValueInner] = useState('');

    return (
        <div className='searchbox-wrapper'>
            <input className='searchbox' type="text" value={searchInputValueInner} name="" id="" placeholder='Food and Restaurants..' onChange={(e)=> {setSearchInputValueInner(e.target.value)}} />
            <button className='primary-btn' onClick={()=>{onClickSerach(searchInputValueInner)}}>Search</button>
        </div>
    )
}

export default SearchBox;