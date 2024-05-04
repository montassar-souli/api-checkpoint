const UserList = () => {
  return (
    <div className="rounded-md shadow-md w-64 justify-center items-center mx-auto">
      <div className="">
        <img
          className="h-44 mx-auto"
          src="images/user-profile-icon.svg"
          alt="profile-img"
        />
        <div className="items-center">
          <img />
          <h5 className="items-center">{/*name*/}</h5>
        </div>
        <div className="flex items-center">
          <img className="h-4" src="images/envelope-icon.svg" alt="" />
          <h1>email: </h1>
        </div>
        <div className="flex items-center">
          <img
            className="h-4"
            src="images/maps-pin-black-icon.svg"
            alt="location-img"
          />
          <h1>address: </h1>
          <p>street: </p>
          <p>suite: </p>
          <p>city: </p>
          <p>zipcode: </p>
        </div>
        <div className="flex">
          <img className="h-4" src="images/phone-icon.svg" alt="phone-img" />
          <h1>phone:</h1>
        </div>
        <div className="flex">
          <img
            className="h-4"
            src="images/globe-network-icon.svg"
            alt="globe-img"
          />
          <h1>website: </h1>
          <div>
            <img className="flex" src="" alt="" />
            <h1>company: </h1>
          </div>
        </div>
        <div>
          <p>bs:</p>
        </div>
      </div>
    </div>
  );
};

export default UserList;
