// import React from 'react'

const ProfileCard = () => {
  return (
    <div className="shadow-sm">
      <div className="history-expanded-container">
        <h1 className="text-primary">History</h1>

        <div className="history-list-container">
          <ul className="history-list">
            <li className="history-list-item">
              <Link href="" className="history-item-link">
                https://jumia.com/vehicle/product-9
              </Link>
            </li>
            <li className="history-list-item">
              <Link href="" className="history-item-link">
                https://jumia.com/vehicle/product-10
              </Link>
            </li>
            <li className="history-list-item">
              <Link href="" className="history-item-link">
                https://jumia.com/vehicle/product-4
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
