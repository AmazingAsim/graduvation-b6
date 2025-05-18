import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="First slide"
                ></li>
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="1"
                    aria-label="Second slide"
                ></li>
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="2"
                    aria-label="Third slide"
                ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/008/191/708/non_2x/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg"
                        className="w-100 d-block"
                        alt="First slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://media.istockphoto.com/id/1443013154/vector/january-is-national-blood-donor-month-vector.jpg?s=612x612&w=0&k=20&c=vGIi7PKm-h8zJa4Nx3ULB67i7vk9ohSQ7ZapASOnABo="
                        className="w-100 d-block"
                        alt="Second slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-world-blood-donor-day_23-2150334089.jpg?t=st=1747290828~exp=1747294428~hmac=8c744dc278f5c8fd64fc889ddff55a7b52be2436a307c7e9c807c94378517dc8"
                        className="w-100 d-block"
                        alt="Third slide"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    </div>
  )
}
