
const Banner = () => {
    return (
        <div className="carousel mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src=" https://i.ibb.co/cLKgMK1/event-management-concept-event-management-flowchart-event-management-related-items-mixed-media-busin.webp" className="w-full h-[80vh]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/WyJ23Hd/event-planning-word-written-wood-block-text-table-concept-105965014.webp   " className="w-full  h-[80vh]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/dk71RZ8/calendar-event-planner-busy-calendar-clock-to-set-timetable-organize-schedule-calendar-event-planner.webp" className="w-full  h-[80vh]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/H7nVKNR/time-planning-concept-cropped-hand-holding-grey-pen-word-upcoming-event-written-calendar-145352838.webp" className="w-full  h-[80vh]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;