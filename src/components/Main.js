import React, { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState({});

  useEffect(() => {
    fetch("https://kevinkkimutai.github.io/charity/db.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // const handleSearchTermChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  // const filteredData = data.place && data.place.filter(place => {
  //   if (searchTerm && !place.charityName.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return false;
  //   }
  //   if (locationFilter && place.city !== locationFilter) {
  //     return false;
  //   }
  //   if (categoryFilter && place.category !== categoryFilter) {
  //     return false;
  //   }
  //   return true;
  // });

  const handleOrganizationSelect = (organization) => {
    setSelectedOrganization(organization);
  };
  useEffect(() => {
    if (selectedOrganization) {
      window.scrollTo(0, 0);
    }
  }, [selectedOrganization]);

  const handleDonationForm = () => {
    //redirect to donation form page
  };

  return (
    <div className="homepage-container">

      <div className="left-section">
      <div className="sidenav pt-5" data-bs-theme="dark">

      <h2><u><b>CHARITY lIST</b></u></h2>
          {data.place &&
            data.place
              .filter(place => place.charityName.toLowerCase().includes(searchTerm.toLowerCase()))
              .filter(place => place.city.toLowerCase().includes(locationFilter.toLowerCase()))
              .filter(place => place.category.toLowerCase().includes(categoryFilter.toLowerCase()))
              .map((place) => (
                <div key={place.ein} className="list">
                  <li href="/" onClick={() => handleOrganizationSelect(place)}>
                    {place.charityName}
                  </li>
                </div>
              ))}
          </div>
     
      </div>
      
      <div className="right-section">
        <div className="mb-4"><b className="me-3">Search:</b> 
        <input className="me-2" type="text" placeholder="Location..." onChange={handleLocationFilterChange} />
        <input type="text" placeholder="Category..." onChange={handleCategoryFilterChange} />
        </div>
        {selectedOrganization.charityName && (
          <div className="high">
            <h2>{selectedOrganization.charityName}</h2>
            <p><b>Categoy:</b> {selectedOrganization.category}</p>
            <p><b>ZipCode:</b> {selectedOrganization.zipCode}</p>
          <p><b>City:</b> {selectedOrganization.city}</p>
          <p><b>State:</b> {selectedOrganization.state}</p>
          <p>{selectedOrganization.phone}</p>
            <p>{selectedOrganization.email}</p>
            <p><a href={selectedOrganization.donationUrl}>Donation Form</a></p>
        </div>
        )}
        {data.place &&
            data.place
              .filter(place => place.city.toLowerCase().includes(locationFilter.toLowerCase()))
              .filter(place => place.category.toLowerCase().includes(categoryFilter.toLowerCase()))
              .map((place) => (
                <div key={place.ein} id={place.city} className="details">
             
             <li onClick={() => handleOrganizationSelect(place)}>{place.charityName}</li>
          
             <p><b>Category:</b> {place.category}</p>
             <p><b>ZipCode:</b> {place.zipCode}</p>
          <p><b>City:</b> {place.city}</p>
            <p><b>State:</b>{place.state}</p>
            <p><b>Longitude:</b>  {place.longitude} & <b>Latitude:</b>  {place.latitude}</p>
           
            <p><a href={place.donationUrl}>Donation Form</a></p>
             ................................................................................................
           </div>
              ))}
        
      </div>
      </div>
  )
}
  export default Main
