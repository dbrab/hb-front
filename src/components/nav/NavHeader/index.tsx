///this is the mobile header - it has the search input in the middle and to icons on the sides. Left one ddisplays HeaderInfo with the netpicker and descripttion (in case it's in a net the trigger is the net's logo), right nav btn diisplays the filters
import React, {useState} from "react";
import Filters from "components/search/Filters";
import FiltersMobile from "components/search/FiltersMobile"; //just for mobile
import { Link } from 'elements/Link';
import { IoHomeOutline } from "react-icons/io5";



function NavHeader(props) {

  const [showSearch, setShowSearch] = useState(true);

  // const [showHideExtraFilters, setShowHideExtraFilters] = useState(true);

  const [showHideFiltersMobile, setShowHideFiltersMobile] = useState(false);

  // const [showHideFilters, setShowHideFilters] = useState(true);
  //
  // const [showHideInfoOverlay, setShowHideInfoOverlay] = useState(true);
  //
  // const [showSearch, setShowSearch] = useState(true);
  //
  // const [name, setName] = useState(true);
  //
  // const [tag, setTag] = useState(true);
  //
  // const [search, setSearch] = useState(true);
  //
  // const [results, setResults] = useState(true);

  // const handleChange = event => {
  //     debugger
  //     props.onchange(event.target.value);
  // }

  return(

    <>

        <div className={'nav-header__container' + (showSearch ? '' : 'nav-header--hide')}>

            <form className="nav-header__content">

                <Link href="/HomeInfo" className="btn-circle">

                  <div className="btn-circle__content">

                    <div className="btn-circle__icon">

                      <IoHomeOutline />

                    </div>

                  </div>

                </Link>

                <div className="nav-header__content-message">

                  {showSearch &&

                    <input onFocus={() => setShowHideFiltersMobile(true)} onBlur={() => setShowHideFiltersMobile(false)} className="form__input nav-header__content-input" placeholder="Search"></input>

                  }

                </div>

            </form>

            <Filters />

            { showHideFiltersMobile ? <FiltersMobile />  : null}


        </div>

    </>

  );

}

export default NavHeader;
