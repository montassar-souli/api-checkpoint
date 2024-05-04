const UserList = ({ listOfUSer }) => {
  return (
    <div className="rounded-md shadow-md w-64 justify-center items-center flex">
      <div className="">
        <img
          className="h-44 mx-auto"
          src="images/user-profile-icon.svg"
          alt="profile-img"
        />
        <div className="items-center">
          <img />
          <h5 className="items-center">{listOfUSer.name}</h5>
        </div>
        <div className="flex items-center">
          <img className="h-4" src="images/envelope-icon.svg" alt="img-mail" />
          <h1>{listOfUSer.email}</h1>
        </div>
        <div className="flex items-center">
          <img
            className="h-4"
            src="images/maps-pin-black-icon.svg"
            alt="location-img"
          />
          <p>{listOfUSer.address.street}</p>
          <p>{listOfUSer.address.suite}</p>
          <p>{listOfUSer.address.city}</p>
          <p>{listOfUSer.address.zipcode}</p>
        </div>
        <div className="flex items-center">
          <img className="h-4" src="images/phone-icon.svg" alt="phone-img" />
          <h1>{listOfUSer.phone}</h1>
        </div>
        <div className="flex items-center">
          <img
            className="h-4"
            src="images/globe-network-icon.svg"
            alt="globe-img"
          />
          <h1>{listOfUSer.website}</h1>
        </div>
        <div className="flex items-center">
          <img className="flex" src="" alt="" />
          <h1>{listOfUSer.company.name}</h1>
        </div>
        <div>
          <p>{listOfUSer.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserList;
