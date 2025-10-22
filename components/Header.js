const Header=()=>{
    return(
        <header>
    <h1>BookMyMovie</h1>

    <div class="controls">
      <select id="locationSelect">
        <option>Vizag</option>
        <option>Hyderabad</option>
        <option>Bangalore</option>
        <option>Chennai</option>
        <option>Mumbai</option>
      </select>

      <input type="text" id="searchBar" placeholder="Search for movies..." />
      <button id="signInBtn">Sign In</button>
    </div>
  </header>


    );
};
export default Header;