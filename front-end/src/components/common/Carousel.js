import React from 'react'


// TODO add picutres of care centers
function Carousel() {
  return (
    // <div className="carousel w-full">
    //     <div id="slide1" className="carousel-item relative w-full">
    //         <img src="https://www.spartapetpalazzo.com/wp-content/uploads/2020/12/daycare-playyard-crop-2-600x400-1.jpg" className="w-lg rounded-2xl shadow-xl" />
    //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide4" className="btn btn-circle">❮</a> 
    //         <a href="#slide2" className="btn btn-circle">❯</a>
    //         </div>
    //     </div> 
    //     <div id="slide2" className="carousel-item relative w-full">
    //         <img src="https://www.townandcountrypetcarecenter.com/wp-content/uploads/2020/08/daycare-bottom-1.jpg" className="w-lg rounded-2xl shadow-xl" />
    //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide1" className="btn btn-circle">❮</a> 
    //         <a href="#slide3" className="btn btn-circle">❯</a>
    //         </div>
    //     </div> 
    //     <div id="slide3" className="carousel-item relative w-full">
    //         <img src="../images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide2" className="btn btn-circle">❮</a> 
    //         <a href="#slide4" className="btn btn-circle">❯</a>
    //         </div>
    //     </div> 
    //     <div id="slide4" className="carousel-item relative w-full">
    //         <img src="../images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide3" className="btn btn-circle">❮</a> 
    //         <a href="#slide1" className="btn btn-circle">❯</a>
    //         </div>
    //     </div>
    // </div>
    <div className="carousel carousel-center rounded-box bg-gray-300">
        <div className="carousel-item">
            <img src="https://www.spartapetpalazzo.com/wp-content/uploads/2020/12/daycare-playyard-crop-2-600x400-1.jpg" className="w-lg shadow-xl" alt="Pizza" />
        </div> 
        <div className="carousel-item">
            <img src="https://www.townandcountrypetcarecenter.com/wp-content/uploads/2020/08/daycare-bottom-1.jpg" className="w-lg shadow-xl" alt="Pizza" />
        </div> 
        <div className="carousel-item">
            <img src="https://compote.slate.com/images/7ceafc5e-4c27-4883-89cf-b40577d52929.jpeg?width=780&height=520&rect=1560x1040&offset=0x0" alt="Pizza" />
        </div> 
        
    </div>


  )
}

export default Carousel